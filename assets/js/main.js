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