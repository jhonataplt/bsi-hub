const userData = require('./fakeData.json')
const gradeData = userData.grades;
const gradesContainer = document.querySelector('.gradesContainer');
const gradesContent = document.querySelector('.gradesContent');

const gradeScreen = document.querySelector('.gradeScreen');

const semesterArea = document.querySelector('.semesterArea');

const notFound = document.querySelector('.notFound');

function createSubjectArea(){
    const subjectArea = document.createElement('div');
    subjectArea.classList.add('subjectArea');
    return subjectArea;
}

function createSubject(semester){
    const subject = document.createElement('div');
    subject.classList.add('subject');
    subject.classList.add(`${semester}-semester`);
    return subject;
}

function createSubjectName(subjectName, semester){
    const subjectNameElement = document.createElement('p');
    subjectNameElement.classList.add('subjectName');
    subjectNameElement.innerText = `${subjectName} - ${semester}º Semestre`;
    return subjectNameElement;
}

function createSubjectSubarea(){
    const subjectSubarea = document.createElement('div');
    subjectSubarea.classList.add('subjectSubarea');
    return subjectSubarea;
}

function createGradeArea(){
    const gradeArea = document.createElement('div');
    gradeArea.classList.add('gradeArea');
    return gradeArea;
}

function createGrade(name, grade, maxValue){
    const gradeElement = document.createElement('div');
    gradeElement.classList.add('grade');
    gradeElement.innerHTML = `<p>${name}</p><progress max="${maxValue}" value="${grade}"></progress><p>${grade}/${maxValue}</p>`;
    return gradeElement;
}

function createAddGradeArea(){
    const addGradeArea = document.createElement('div');
    addGradeArea.classList.add('addGradeArea');
    return addGradeArea;
}

function createAddGradeButton(){
    const addGradeButton = document.createElement('button');
    addGradeButton.id = 'addGradeButton';
    addGradeButton.innerHTML = `<img src="../src/assets/img/svg/plus-icon.svg" alt="Plus Icon"><p>Adicionar Nota</p>`;
    return addGradeButton;
}

function createAttendaceArea(){
    const attendanceArea = document.createElement('div');
    attendanceArea.classList.add('attendanceArea');
    return attendanceArea;
}

function createAttendanceTitle(){
    const attendanceTitle = document.createElement('p');
    attendanceTitle.classList.add('attendanceTitle');
    attendanceTitle.innerText = 'Presença';
    return attendanceTitle;
}

function createAttendaceBar(workload, grade){
    const maxAbsences = Math.floor(workload * 0.25);
    const attendanceBar = document.createElement('div');
    attendanceBar.classList.add('attendanceBar');
    attendanceBar.setAttribute('role', 'progressbar');
    attendanceBar.setAttribute('aria-valuemin', '0');
    attendanceBar.setAttribute('aria-valuemax', maxAbsences);
    attendanceBar.style.setProperty('--value', grade);
    return attendanceBar;
}

function createAttendanceText(absences, workload){
    const attendanceText = document.createElement('p');
    const avaiableAbsences = Math.floor(workload * 0.25) - absences;
    attendanceText.innerHTML = `Você tem <strong>${avaiableAbsences}</strong> faltas disponíveis`;
    return attendanceText;
}

function getUserGrades(){
    console.log(gradeData)
    if(gradeData.length > 0){
        semesterArea.style.display = "flex";
        gradesContent.style.display = "flex";
        gradesContainer.style.display = "flex";
        const subjectArea = createSubjectArea();
        gradesContent.appendChild(subjectArea);
        for(let grade of gradeData){
            const subject = createSubject(grade.semester);
            subjectArea.appendChild(subject);
            const subjectName = createSubjectName(grade.subject, grade.semester);        
            subject.appendChild(subjectName);
            const subjectSubarea = createSubjectSubarea();
            subject.appendChild(subjectSubarea);
            const gradeArea = createGradeArea();
            subjectSubarea.appendChild(gradeArea);
            for(let assesment of grade.assesments){
                const gradeElement = createGrade(assesment.name, assesment.grade, assesment.value);
                gradeArea.appendChild(gradeElement);
            }
            const addGradeArea = createAddGradeArea();
            gradeArea.appendChild(addGradeArea);
            const addGradeButton = createAddGradeButton();
            addGradeArea.appendChild(addGradeButton);
            const attendanceArea = createAttendaceArea();
            subjectSubarea.appendChild(attendanceArea);
            const attendanceTitle = createAttendanceTitle();
            attendanceArea.appendChild(attendanceTitle);
            const attendanceBar = createAttendaceBar(grade.workload, grade.absences);
            attendanceArea.appendChild(attendanceBar);
            const attendanceText = createAttendanceText(grade.absences, grade.workload);
            attendanceArea.appendChild(attendanceText);
        }
        gradeScreen.appendChild(gradesContent);
    } else{
        notFound.style.display = "flex";
        console.log("Não há notas cadastradas")
    }
}

module.exports = {getUserGrades}