const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [

        { name: "Nguyễn Văn Luận", position: "Developer" },

        { name: "Nguyễn Văn Hoàng", position: "Tester" },

        { name: "Hoàng Nam Cao", position: "Manager" }

    ]  
}
const companyinfo = `Ten cong ty: ${company.name}\n` +
"Danh sach nhan vien:\n" +
company.employees.map( (employee,index) => `${index+1}. ${employee.name}`).join("\n")
alert(companyinfo)