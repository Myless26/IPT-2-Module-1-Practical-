// =========================
// STUDENT FEATURE
// =========================

// Store students in an array
let students = [];

// Add Student button handler
const addStudentBtn = document.getElementById("addStudentButton");
if (addStudentBtn) {
    addStudentBtn.addEventListener("click", function () {
        const idNumber = document.getElementById("idNumber").value.trim();
        const firstName = document.getElementById("firstName").value.trim();
        const middleName = document.getElementById("middleName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();

        if (!idNumber || !firstName || !lastName) {
            alert("ID Number, Firstname, and Lastname are required!");
            return;
        }

        const student = {
            idNumber,
            firstName,
            middleName,
            lastName
        };

        students.push(student);
        renderStudents();
        document.getElementById("studentForm").reset();
    });
}

// Render students into table
function renderStudents() {
    const tableBody = document.getElementById("table-content");
    if (!tableBody) return; // only run on student page

    tableBody.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.idNumber}</td>
            <td>${student.firstName}</td>
            <td>${student.middleName}</td>
            <td>${student.lastName}</td>
        `;
        tableBody.appendChild(row);
    });
}



// =========================
// SUBJECT FEATURE
// =========================

// Store subjects in an array
let subjects = [];

// Add Subject button handler
const addSubjectBtn = document.getElementById("addSubject");
if (addSubjectBtn) {
    addSubjectBtn.addEventListener("click", function () {
        const subjectCode = document.getElementById("subjectCode").value.trim();
        const subjectName = document.getElementById("subjectName").value.trim();
        const units = document.getElementById("units").value.trim();

        if (!subjectCode || !subjectName || !units) {
            alert("All fields are required!");
            return;
        }

        const subject = {
            subjectCode,
            subjectName,
            units
        };

        subjects.push(subject);
        renderSubjects();
        document.getElementById("subjectForm").reset();
    });
}

// Render subjects into table
function renderSubjects() {
    const tableBody = document.getElementById("table-content");
    if (!tableBody) return; // only run on subject page

    tableBody.innerHTML = "";
    subjects.forEach(subject => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subject.subjectCode}</td>
            <td>${subject.subjectName}</td>
            <td>${subject.units}</td>
        `;
        tableBody.appendChild(row);
    });
}
