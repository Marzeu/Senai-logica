let students = [
    { name: "", classes: [] },
];

function Save() {

    // let classes = [];
    let chkclass = document.getElementsByName("box");
    let name = document.getElementById("name").value;
    students.name = name;

    for (i = 0; i < chkclass.length; i++) {

        if (chkclass[i].checked == true) {

            students[0].classes.push(chkclass[i].value);

        }
    }   

    console.log(students);
}