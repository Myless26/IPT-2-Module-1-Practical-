// ========================
// Student Feature (Dev 1)
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("studentForm");
  const addStudentButton = document.getElementById("addStudentButton");
  const studentTableContent = document.getElementById("table-content");

  if (addStudentButton) {
    addStudentButton.addEventListener("click", () => {
      const idNumber = document.getElementById("idNumber").value;
      const firstName = document.getElementById("firstName").value;
      const middleName = document.getElementById("middleName").value;
      const lastName = document.getElementById("lastName").value;

      if (idNumber && firstName && lastName) {
        const newRow = `
          <tr>
            <td>${idNumber}</td>
            <td>${firstName}</td>
            <td>${middleName}</td>
            <td>${lastName}</td>
          </tr>
        `;
        studentTableContent.innerHTML += newRow;
        studentForm.reset();
      }
    });
  }
});

// ========================
// Subject Feature (Dev 2)
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const subjectForm = document.getElementById("subjectForm");
  const addSubjectButton = document.getElementById("addSubject");
  const subjectTableContent = document.querySelector(
    "#subjectForm ~ .row table tbody#table-content"
  );

  if (addSubjectButton) {
    addSubjectButton.addEventListener("click", () => {
      const subjectCode = document.getElementById("subjectCode").value;
      const subjectName = document.getElementById("subjectName").value;
      const units = document.getElementById("units").value;

      if (subjectCode && subjectName && units) {
        const newRow = `
          <tr>
            <td>${subjectCode}</td>
            <td>${subjectName}</td>
            <td>${units}</td>
          </tr>
        `;
        subjectTableContent.innerHTML += newRow;
        subjectForm.reset();
      }
    });
  }
});


