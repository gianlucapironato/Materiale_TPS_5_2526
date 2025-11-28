const addGradeBtn = document.getElementById("add-grade-btn");
const newGradeSubject = document.getElementById("new-grade-subject");
const newGradeInfo = document.getElementById("new-grade-info");
const newGradeScore = document.getElementById("new-grade-score");

const errorBox = document.getElementById("error-box");
const userGrades = document.getElementById("user-grades");
const avgButton = document.getElementById("average-grade");

const grades = [];

avgButton.addEventListener("click", calcutateAvg);

function calcutateAvg() {
    let sum = 0;

    grades.forEach(grade => {
        sum += parseFloat(grade["score"]);
    });

    const avg = sum / grades.length;
    avgButton.innerHTML = avg.toFixed(2);

    avgButton.className = classifyScore(avg);
}

addGradeBtn.addEventListener("click", () => {
    if (checkValues(newGradeSubject.value, newGradeInfo.value, newGradeScore.value)) {
        // Aggiunta del voto

        errorBox.innerHTML = "";

        grades.push(
            {
                "subject": newGradeSubject.value,
                "info": newGradeInfo.value,
                "score": newGradeScore.value
            }
        );

        console.clear();
        grades.forEach(grade => {
            console.log(`Materia: ${grade["subject"]}, Info: ${grade["info"]}, Score: ${grade["score"]}.`);
        });

        updateUI();
    } else {
        // Errore

        errorBox.innerHTML = "Errore con i dati.";
    }
});

function classifyScore(score) {
    score = parseFloat(score);

    if (score < 5) return "red";
    if (score >= 5 && score < 6) return "yellow";
    if (score >= 6 && score < 10) return "green";
    if (score === 10) return "purple";
}

function updateUI() {
    userGrades.innerHTML = "";

    grades.forEach(grade => {
        const li = document.createElement("li");
        const classColor = classifyScore(grade["score"]);

        li.innerHTML = `
            <div>
                <h4>${grade["subject"]}</h4>
                <h2>${grade["info"]}</h2>
            </div>

            <h2 class="grade-value ${classColor}">
                ${grade["score"]}
            </h2>
        `;

        userGrades.appendChild(li);
    });
}

function checkValues(subject, info, score) {
    if (subject === "" || info === "" || score < 3 || score > 10) {
        return false;
    }

    return true;
}