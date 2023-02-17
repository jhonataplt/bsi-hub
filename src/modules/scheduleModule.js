const userData = require('./fakeData.json')
const scheduleData = userData.schedule;

const lockTableButtonImage = document.querySelector('#lockTableButton img');

const scheduleCells = document.querySelectorAll('#scheduleTable td:not(.timeCell)');
const scheduleTable = document.querySelector('#scheduleTable');


function switchTableLock() {
    const state = scheduleTable.classList.contains('locked');
    if (state) {
        lockTableButtonImage.setAttribute('src', '../src/assets/img/svg/unlock-icon.svg');
        scheduleTable.classList.remove('locked');
        scheduleTable.classList.add('unlocked');
        scheduleCells.forEach(element => {
            element.style.setProperty('border', '2px solid var(--text-color)');
            const previousText = element.innerText;
            element.innerHTML = `<input type="text" value="${previousText}">`;
        });
    } else {
        lockTableButtonImage.setAttribute('src', '../src/assets/img/svg/lock-icon.svg');
        scheduleTable.classList.remove('unlocked');
        scheduleTable.classList.add('locked');
        scheduleCells.forEach(element => {
            element.style.setProperty('border', '2px solid var(--primary-color)');
            const previousText = element.firstChild.value;
            element.innerHTML = `<p>${previousText}</p>`;
        });
    }
};


function objectFinder(day, time){
    for(let object of scheduleData){
        if(object.week_day === day && object.time === time){
            return object;
        }
    }
}


function getUserSchedule(){
    for(let cell of scheduleCells){
        const cellParent = cell.parentElement;
        const cellDay = Array.prototype.indexOf.call(cellParent.children, cell) + 1;
        const cellTime = cellParent.rowIndex;
        const subjectObject = objectFinder(cellDay, cellTime);
        if(subjectObject){
            cell.innerHTML = `<p>${subjectObject.subject}</p>`; 
        }
    }
}


module.exports = {getUserSchedule, switchTableLock};