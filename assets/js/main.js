<<<<<<< HEAD
const nothingScreen = document.querySelector('.nothingScreen');

const scheduleScreen = document.querySelector('.scheduleScreen');
const scheduleLink = document.querySelector('#scheduleLink');
const scheduleTable = document.querySelector('#scheduleTable');
const scheduleTableCells = document.querySelectorAll('#scheduleTable td');
const lockTableButton = document.querySelector('#lockTableButton');
const lockTableButtonImage = document.querySelector('#lockTableButton img');

const calendarScreen = document.querySelector('.calendarScreen');
const calendarLink = document.querySelector('#calendarLink');

const gradeScreen = document.querySelector('.gradeScreen');
const gradeLink = document.querySelector('#gradeLink');

const remindersScreen = document.querySelector('.remindersScreen');
const remindersLink = document.querySelector('#remindersLink');

const scholarGridScreen = document.querySelector('.scholarGridScreen');
const scholarGridLink = document.querySelector('#scholarGridLink');

const contactScreen = document.querySelector('.contactScreen');
const contactLink = document.querySelector('#contactLink');


// function switchTableLock(state) {
//     if (state === 'locked') {
//         scheduleTable.classList.remove('locked');
//         scheduleTable.classList.add('unlocked');
//         scheduleTableCells.forEach(element => {
//         if (!element.classList.contains('timeCell')) {
//             element.style.setProperty('border', '2px solid var(--text-color)');
//             const previousText = element.firstChild.innerText;
//             element.innerHTML = `<input type="text" value="${previousText}">`;
//         }
//         });
//     }
//     else if (state === 'unlocked'){
//         scheduleTable.classList.remove('unlocked');
//         scheduleTable.classList.add('locked');
//         scheduleTableCells.forEach(element => {
//         if (!element.classList.contains('timeCell')) {
//             element.style.setProperty('border', '2px solid var(--secondary-color)');
//             const previousText = element.firstChild.value;
//             element.innerHTML = `<p>${previousText}</p>`;
//         }
//     });
//     }
// };

// lockTableButton.addEventListener('click', function(e) {
//     if (scheduleTable.classList.contains('locked')) {
//         console.log('scheduleTable is locked');
//         switchTableLock(scheduleTable.getAttribute('class'));
//         lockTableButtonImage.setAttribute('src', 'assets/img/svg/unlock-icon.svg');
//     }
//     else if (scheduleTable.classList.contains('unlocked')) {
//         console.log('scheduleTable is unlocked');
//         switchTableLock(scheduleTable.getAttribute('class'));
//         lockTableButtonImage.setAttribute('src', 'assets/img/svg/lock-icon.svg');
//     }
// });
=======
function global() {

    const scheduleTable = document.querySelector('#scheduleTable');
    const scheduleTableCells = document.querySelectorAll('#scheduleTable td');
    const lockTableButton = document.querySelector('#lockTableButton');
    const lockTableButtonImage = document.querySelector('#lockTableButton img');


    // function switchTableLock(state) {
    //     if (state === 'locked') {
    //         scheduleTable.classList.remove('locked');
    //         scheduleTable.classList.add('unlocked');
    //         scheduleTableCells.forEach(element => {
    //         if (!element.classList.contains('timeCell')) {
    //             element.style.setProperty('border', '2px solid var(--text-color)');
    //             const previousText = element.firstChild.innerText;
    //             element.innerHTML = `<input type="text" value="${previousText}">`;
    //         }
    //         });
    //     }
    //     else if (state === 'unlocked'){
    //         scheduleTable.classList.remove('unlocked');
    //         scheduleTable.classList.add('locked');
    //         scheduleTableCells.forEach(element => {
    //         if (!element.classList.contains('timeCell')) {
    //             element.style.setProperty('border', '2px solid var(--secondary-color)');
    //             const previousText = element.firstChild.value;
    //             element.innerHTML = `<p>${previousText}</p>`;
    //         }
    //     });
    //     }
    // };


    // lockTableButton.addEventListener('click', function(e) {
    //     if (scheduleTable.classList.contains('locked')) {
    //         console.log('scheduleTable is locked');
    //         switchTableLock(scheduleTable.getAttribute('class'));
    //         lockTableButtonImage.setAttribute('src', 'assets/img/svg/unlock-icon.svg');
    //     }
    //     else if (scheduleTable.classList.contains('unlocked')) {
    //         console.log('scheduleTable is unlocked');
    //         switchTableLock(scheduleTable.getAttribute('class'));
    //         lockTableButtonImage.setAttribute('src', 'assets/img/svg/lock-icon.svg');
    //     }
    // });



    //#==============================================================================================
    //#==============================================================================================
    //#==============================================================================================
    //#==============================================================================================
    //#==============================================================================================



    
}
global();
>>>>>>> 369957e1b24d4b3f1939707dca25e4915166b11f
