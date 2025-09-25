document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addSubject");
  const tbody = document.getElementById("table-content");

  if (!addBtn || !tbody) return;

  addBtn.addEventListener("click", () => {
    const codeEl = document.getElementById("subjectCode");
    const nameEl = document.getElementById("subjectName");
    const unitsEl = document.getElementById("units");

    const code = (codeEl?.value || "").trim();
    const name = (nameEl?.value || "").trim();
    const units = (unitsEl?.value || "").trim();

    if (!code || !name || !units) {
      alert("Please fill in Subject Code, Subject Name, and Units.");
      return;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${code}</td>
      <td>${name}</td>
      <td>${units}</td>
    `;
    tbody.appendChild(tr);

    if (codeEl) codeEl.value = "";
    if (nameEl) nameEl.value = "";
    if (unitsEl) unitsEl.value = "";
    codeEl?.focus();
  });
});
