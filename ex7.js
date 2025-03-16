let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

]
function topStudent(students){
    return students.filter(student => {
        const {math, english, literature} = student.scores
        const averge = (math+english+literature)/3
        return averge >=8
    })
    .map(student => student.name)
}
alert(`Danh sach sinh vien co diem trung binh >=8:\n${topStudent(students).join("\n")}`)