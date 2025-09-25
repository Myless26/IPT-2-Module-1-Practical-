document.addEventListener("DOMContentLoaded", () => {
  const subjectForm = document.getElementById("subjectForm");
  const addSubjectButton = document.getElementById("addSubject");
  const tableContent = document.querySelector("#subjectForm ~ .row table tbody#table-content");

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
        tableContent.innerHTML += newRow;
        subjectForm.reset();
      }
    });
  }
});