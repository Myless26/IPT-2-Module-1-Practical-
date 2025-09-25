IPT2-M2-Practical-Exam-main/js/app.j// Attach behaviors once DOM is ready
(function initApp() {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', setupStudentPageIfPresent);
	} else {
		setupStudentPageIfPresent();
	}
})();

// Initializes the Add Student feature only if student form exists
function setupStudentPageIfPresent() {
	var studentForm = document.getElementById('studentForm');
	var addButton = document.getElementById('addStudentButton');
	var tableBody = document.getElementById('table-content');

	// Guard: run only on student page where elements exist
	if (!studentForm || !addButton || !tableBody) {
		return;
	}

	addButton.addEventListener('click', function onAddStudentClick() {
		var idInput = document.getElementById('idNumber');
		var firstNameInput = document.getElementById('firstName');
		var middleNameInput = document.getElementById('middleName');
		var lastNameInput = document.getElementById('lastName');

		var idNumber = (idInput && idInput.value || '').trim();
		var firstName = (firstNameInput && firstNameInput.value || '').trim();
		var middleName = (middleNameInput && middleNameInput.value || '').trim();
		var lastName = (lastNameInput && lastNameInput.value || '').trim();

		// Basic validation: require ID, first and last name
		if (!idNumber || !firstName || !lastName) {
			alert('Please fill in at least ID Number, Firstname, and Lastname.');
			return;
		}

		// Create a new row and cells
		var row = document.createElement('tr');
		appendCell(row, idNumber);
		appendCell(row, firstName);
		appendCell(row, middleName);
		appendCell(row, lastName);

		// Append to table
		tableBody.appendChild(row);

		// Clear inputs after successful add
		if (idInput) idInput.value = '';
		if (firstNameInput) firstNameInput.value = '';
		if (middleNameInput) middleNameInput.value = '';
		if (lastNameInput) lastNameInput.value = '';
	});
}

function appendCell(rowEl, text) {
	var cell = document.createElement('td');
	cell.textContent = text || '';
	rowEl.appendChild(cell);
}