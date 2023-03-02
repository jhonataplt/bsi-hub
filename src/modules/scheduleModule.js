const scheduleData = [
    {
        "week_day": 2,
        "time": 1,
        "subject": "Metodologia de Pesquisa"
    },
    {
        "week_day": 2,
        "time": 2,
        "subject": "Arquitetura e Organização de Computadores"
    },
    {
        "week_day": 3,
        "time": 1,
        "subject": "Arquitetura e Organização de Computadores"
    },
    {
        "week_day": 3,
        "time": 2,
        "subject": "Teoria Geral de Sistemas"
    },
    {
        "week_day": 4,
        "time": 1,
        "subject": "Algebra Linear"
    },
    {
        "week_day": 4,
        "time": 2,
        "subject": "Estrutura de Dados"
    },
    {
        "week_day": 5,
        "time": 1,
        "subject": "Algebra Linear"
    },
    {
        "week_day": 5,
        "time": 2,
        "subject": "Teoria Geral de Sistemas"
    },
    {
        "week_day": 5,
        "time": 3,
        "subject": "Probabilidade e Estatística"
    },
    {
        "week_day": 6,
        "time": 1,
        "subject": "Probabilidade e Estatística"
    },
    {
        "week_day": 6,
        "time": 2,
        "subject": "Estrutura de Dados"
    }
];

const lockTableButtonImage = document.querySelector('#lockTableButton img');

const scheduleCells = document.querySelectorAll('#scheduleTable td:not(.timeCell)');
const scheduleTable = document.querySelector('#scheduleTable');


function switchTableLock() {
    const state = scheduleTable.classList.contains('locked');
    if (state) {
        lockTableButtonImage.setAttribute('src', 'src/assets/img/svg/unlock-icon.svg');
        scheduleTable.classList.remove('locked');
        scheduleTable.classList.add('unlocked');
        scheduleCells.forEach(element => {
            element.style.setProperty('border', '2px solid var(--text-color)');
            const previousText = element.innerText;
            element.innerHTML = `<input type="text" value="${previousText}">`;
        });
    } else {
        lockTableButtonImage.setAttribute('src', 'src/assets/img/svg/lock-icon.svg');
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

getUserSchedule();
const lockTableButton = document.querySelector('#lockTableButton');
lockTableButton.addEventListener('click', () => {
    switchTableLock();
});


//module.exports = {getUserSchedule, switchTableLock};