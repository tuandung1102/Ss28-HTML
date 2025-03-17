let employees = []
function showMenu() {
    let choice;
    do {
        choice = prompt(
            "Quản lý nhân viên:\n" +
            "1. Thêm nhân viên mới\n" +
            "2. Xóa nhân viên theo ID\n" +
            "3. Cập nhật mức lương của nhân viên\n" +
            "4. Tìm kiếm nhân viên theo tên\n" +
            "5. Hiển thị danh sách nhân viên\n" +
            "0. Thoát\n" +
            "Chọn một chức năng:"
        );
        switch (choice) {
            case 1:
                addEmployee()
                break;
            case 2:
                deleteEmployee()
                break;
            case 3:
                updateSalary()
                break;
            case 4:
                searchByName()
                break;
            case 5:
                displayEmployees()
                break;
            case 0:
                alert("Thoát chương trình")
                break
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng thử lại")
        }
    } while (choice !== "0")
}
function addEmployee() {
    const id = prompt("Nhập ID nhân viên:")
    const name = prompt("Nhập tên nhân viên:")
    const position = prompt("Nhập chức vụ nhân viên:")
    const salary = parseFloat(prompt("Nhập lương nhân viên:"))
    if (isNaN(salary) || salary < 0) {
        alert("Lương không hợp lệ. Nhân viên không được thêm.")
        return
    }
    employees.push({ id, name, position, salary })
    alert("Đã thêm nhân viên mới!")
}
function deleteEmployee() {
    const id = prompt("Nhập ID nhân viên cần xóa:")
    const index = employees.findIndex(emp => emp.id === id)
    if (index === -1) {
        alert("Không tìm thấy nhân viên có ID này.")
        return;
    }
    const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employees[index].name} không?`)
    if (confirmDelete) {
        employees.splice(index, 1)
        alert("Nhân viên đã được xóa.")
    } else {
        alert("Hủy xóa nhân viên.")
    }
}
function updateSalary() {
    const id = prompt("Nhập ID nhân viên cần cập nhật lương:")
    const employee = employees.find(emp => emp.id === id)
    if (!employee) {
        alert("Không tìm thấy nhân viên có ID này.")
        return;
    }
    const newSalary = parseFloat(prompt(`Nhập mức lương mới cho nhân viên ${employee.name}:`))
    if (isNaN(newSalary) || newSalary < 0) {
        alert("Mức lương không hợp lệ. Không thay đổi.")
        return;
    }
    employee.salary = newSalary;
    alert(`Đã cập nhật lương cho nhân viên ${employee.name}.`)
}
function searchByName() {
    const name = prompt("Nhập tên nhân viên cần tìm:")
    const foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()))
    if (foundEmployees.length === 0) {
        alert("Không tìm thấy nhân viên nào có tên phù hợp.");
    } else {
        alert("Nhân viên tìm thấy:\n" + 
            foundEmployees.map(emp => `${emp.id} - ${emp.name} - ${emp.position} - ${emp.salary}`).join("\n"))
    }
}
function displayEmployees() {
    if (employees.length === 0) {
        alert("Danh sách nhân viên trống.")
    } else {
        alert("Danh sách nhân viên:\n" + 
            employees.map(emp => `${emp.id} - ${emp.name} - ${emp.position} - ${emp.salary}`).join("\n"))
    }
}
showMenu()
