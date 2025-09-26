const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the exam app statically
const publicDir = path.join(__dirname, 'IPT2-M2-Practical-Exam-main');
app.use(express.static(publicDir));

// Default route -> student page
app.get('/', function (req, res) {
	res.sendFile(path.join(publicDir, 'student.html'));
});

app.listen(PORT, function () {
	console.log(`Server running at http://localhost:${PORT}`);
}); 