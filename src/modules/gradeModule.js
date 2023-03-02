const axios = require('axios');

axios.get('http://localhost:3000/grades')
    .then(response => {console.log(response.data)});

const userData = require('./fakeData.json')

const gradeData = userData.grades;

const gradesContainer = document.querySelector('.gradesContainer');
const gradesContent = document.querySelector('.gradesContent');

const gradeScreen = document.querySelector('.gradeScreen');

const semesterArea = document.querySelector('.semesterArea');
const semesterMean = document.querySelector('#semesterMean');

const performanceEvaluation = document.querySelector('#performanceEvaluation');

const gradesNotFound = document.querySelector('.gradesNotFound');

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
    addGradeButton.innerHTML = `<img src="src/assets/img/svg/plus-icon.svg" alt="Plus Icon"><p>Adicionar Nota</p>`;
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

function createCircleChartSvg(svgId = null){

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 36 36');
    svg.classList.add('circularChart');
    svg.classList.add('buttonColor');

    if(svgId != null){
        svg.classList.add(`${svgId}`);
    }

    return svg;
}

function createCircleChartBackground(){
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add('circleBackground');
    path.setAttribute('d', 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831');

    return path;
}

function createCircleChartFill(percentage){
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add('circle');
    path.setAttribute('stroke-dasharray', `${Math.round(percentage)}, 100`);
    path.setAttribute('d', 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831');

    return path;
}

function createCircleChartText(percentage){
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '18');
    text.setAttribute('y', '20.35');
    text.classList.add('percentage');
    text.innerHTML = `${percentage.toFixed(0)}%`;

    return text;
}

function createAttendaceBar(workload, absences){

    const attendancePercentage = (100 / workload) * (workload - absences);

    const circleChart = createCircleChartSvg('attendanceChart');

    const circleChartBackground = createCircleChartBackground();
    const circleChartFill = createCircleChartFill(attendancePercentage);
    const circleChartText = createCircleChartText(attendancePercentage);

    circleChart.appendChild(circleChartBackground);
    circleChart.appendChild(circleChartFill);
    circleChart.appendChild(circleChartText);

    return circleChart;
}

function createAttendanceText(absences, workload){
    const attendanceText = document.createElement('p');
    const avaiableAbsences = Math.floor(workload * 0.25) - absences;
    attendanceText.innerHTML = `Você tem <strong>${avaiableAbsences}</strong> faltas disponíveis`;
    return attendanceText;
}


function getSubjectGrade(assesment){
    let totalGrade = 0;
    for(let test of assesment){
        totalGrade += test.grade;
    }
    return totalGrade;
}

function getUserGrades(){

    if(gradeData.length > 0){

        const semesterMeanText = semesterMean.querySelector('text');
        const semesterMeanFill = semesterMean.querySelector('path:nth-child(2)');

        let semesterMeanValue = 0;
        let subjectGrade = 0;

        semesterArea.style.display = "flex";
        gradesContent.style.display = "flex";
        gradesContainer.style.display = "flex";

        const subjectArea = createSubjectArea();
        gradesContent.appendChild(subjectArea);

        for(let grade of gradeData){

            const subject = createSubject(grade.semester);
            const subjectName = createSubjectName(grade.subject, grade.semester);        
            const subjectSubarea = createSubjectSubarea();
            const gradeArea = createGradeArea();

            subjectArea.appendChild(subject);
            subject.appendChild(subjectName);
            subject.appendChild(subjectSubarea);
            subjectSubarea.appendChild(gradeArea);

            for(let assesment of grade.assesments){
                const gradeElement = createGrade(assesment.name, assesment.grade, assesment.value);
                gradeArea.appendChild(gradeElement);
                semesterMeanValue += assesment.grade;
            }

            subjectGrade = getSubjectGrade(grade.assesments);
            const subjectGradeElement = createGrade('Total', subjectGrade, 100);

            
            
            const addGradeArea = createAddGradeArea();
            const addGradeButton = createAddGradeButton();
            const attendanceArea = createAttendaceArea();
            const attendanceTitle = createAttendanceTitle();
            const attendanceBar = createAttendaceBar(grade.workload, grade.absences);
            const attendanceText = createAttendanceText(grade.absences, grade.workload);
            
            gradeArea.appendChild(addGradeArea);
            addGradeArea.appendChild(addGradeButton);
            subjectSubarea.appendChild(attendanceArea);
            attendanceArea.appendChild(attendanceTitle);
            attendanceArea.appendChild(attendanceBar);
            attendanceArea.appendChild(attendanceText);
            attendanceArea.appendChild(subjectGradeElement);
        }
        
        semesterMeanValue /= gradeData.length;
        semesterMeanText.innerHTML = `${semesterMeanValue.toFixed(1)}`;
        semesterMeanFill.setAttribute('stroke-dasharray', `${Math.round(semesterMeanValue)}, 100`);

        gradeScreen.appendChild(gradesContent);

    } else{

        gradesNotFound.style.display = "flex";

    }
}

grade.getUserGrades();

// module.exports = {getUserGrades}