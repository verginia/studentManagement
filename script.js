let students = [];

document.getElementById('addStudentButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = parseInt(document.getElementById('age').value);
    const scores = [
        parseInt(document.getElementById('score1').value),
        parseInt(document.getElementById('score2').value),
        parseInt(document.getElementById('score3').value),
        parseInt(document.getElementById('score4').value),
        parseInt(document.getElementById('score5').value)
    ];

    const student = { name, surname, age, scores };
    students.push(student);
    displayStudents(students);
});

function displayStudents(students) {
    document.getElementById('output').textContent = JSON.stringify(students, null, 2);
}

function calculateAverage(scores) {
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
}

document.getElementById('calculateAverageButton').addEventListener('click', () => {
    students.forEach(student => {
        student.averageScore = calculateAverage(student.scores);
    });
    displayStudents(students);
});

document.getElementById('sortByNameButton').addEventListener('click', () => {
    students.sort((a, b) => a.name.localeCompare(b.name));
    displayStudents(students);
});

document.getElementById('sortByAgeButton').addEventListener('click', () => {
    students.sort((a, b) => a.age - b.age);
    displayStudents(students);
});

document.getElementById('sortByScore1Button').addEventListener('click', () => {
    students.sort((a, b) => b.scores[0] - a.scores[0]);
    displayStudents(students);
});

document.getElementById('sortByScore2Button').addEventListener('click', () => {
    students.sort((a, b) => b.scores[1] - a.scores[1]);
    displayStudents(students);
});

document.getElementById('sortByScore3Button').addEventListener('click', () => {
    students.sort((a, b) => b.scores[2] - a.scores[2]);
    displayStudents(students);
});

document.getElementById('sortByScore4Button').addEventListener('click', () => {
    students.sort((a, b) => b.scores[3] - a.scores[3]);
    displayStudents(students);
});

document.getElementById('sortByScore5Button').addEventListener('click', () => {
    students.sort((a, b) => b.scores[4] - a.scores[4]);
    displayStudents(students);
});

document.getElementById('filterByThresholdButton').addEventListener('click', () => {
    const threshold = parseFloat(document.getElementById('threshold').value);
    const filteredStudents = students.filter(student => student.averageScore >= threshold);
    displayStudents(filteredStudents);
});

document.getElementById('sortDescendingButton').addEventListener('click', () => {
    students.sort((a, b) => b.averageScore - a.averageScore);
    displayStudents(students);
});