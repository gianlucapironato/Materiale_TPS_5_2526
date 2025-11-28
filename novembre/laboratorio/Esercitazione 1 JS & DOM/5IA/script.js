const addGradeBtn = document.getElementById("add-grade-btn");
const newGradeSubject = document.getElementById("new-grade-subject");
const newGradeInfo = document.getElementById("new-grade-info");
const newGradeScore = document.getElementById("new-grade-score");
const userGrades = document.getElementById("user-grades");
const avgBtn = document.getElementById("average-grade");

const errorBox = document.getElementById("error-box");

const grades = [];

document.getElementById("average-grade").onclick = () => {
    let sum = 0;

    grades.forEach(element => {
        sum += parseFloat(element["score"]);
    });

    const avg = sum / grades.length;
    avgBtn.innerHTML = avg.toFixed(2);

    avgBtn.className = classifyScore(avg);
}

addGradeBtn.addEventListener("click", addGrade);

function addGrade() {
    if (validateScores(newGradeSubject.value, newGradeInfo.value, newGradeScore.value)) {
        // Validazione passata
        errorBox.innerHTML = "";

        grades.push(
            {
                "subject": newGradeSubject.value,
                "info": newGradeInfo.value,
                "score": newGradeScore.value
            }
        );

        console.clear();
        grades.forEach((element) => {
            console.log(
                "Materia: " +
                element["subject"] +
                ", info: " +
                element["info"] +
                ", score: "
                + element["score"]);
        });

        updateUI();
    } else {
        // Validazione non passata
        errorBox.innerHTML = "Errore nei valori inseriti";
    }
}

function updateUI() {
    userGrades.innerHTML = "";

    grades.forEach((element) => {
        const li = document.createElement("li");

        const classColor = classifyScore(element["score"]);

        li.innerHTML = ` 
            <div>
                <h4>${element["subject"]}</h4>
                <h2>${element["info"]}</h2>
            </div>

            <h2 class="grade-value ${classColor}">
                ${element["score"]}
            </h2>
        `;

        userGrades.appendChild(li);
    });
}

function classifyScore(score) {
    score = parseInt(score);

    if (!score || score < 3 || score > 10)
        return false;

    if (score < 5)
        return "red";
    if (score >= 5 && score < 6)
        return "yellow";
    if (score >= 6 && score < 10)
        return "green";
    if (score === 10)
        return "purple";
}

function validateScores(gradeSubject, gradeInfo, gradeScore) {
    if (gradeSubject === "" || gradeInfo === "") {
        return false;
    }

    if (gradeScore < 3 || gradeScore > 10) {
        return false;
    }

    return true;
}