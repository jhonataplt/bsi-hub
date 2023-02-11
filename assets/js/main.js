function globalFunction() {

    const sideMenu = document.querySelector('.sideMenuArea');

    const nothingScreen = document.querySelector('.nothingScreen');

    const scheduleScreen = document.querySelector('.scheduleScreen');
    const scheduleLink = document.querySelector('#scheduleLink');
    const scheduleTable = document.querySelector('#scheduleTable');
    const scheduleTableCells = document.querySelectorAll('#scheduleTable td');
    const lockTableButton = document.querySelector('#lockTableButton');
    const lockTableButtonImage = document.querySelector('#lockTableButton img');

    const calendarScreen = document.querySelector('.calendarScreen');
    const calendarLink = document.querySelector('#calendarLink');

    const libraryScreen = document.querySelector('.libraryScreen');
    const libraryLink = document.querySelector('#libraryLink');

    const gradeScreen = document.querySelector('.gradeScreen');
    const gradeLink = document.querySelector('#gradeLink');

    const remindersScreen = document.querySelector('.remindersScreen');
    const remindersLink = document.querySelector('#remindersLink');

    const scholarGridScreen = document.querySelector('.scholarGridScreen');
    const scholarGridLink = document.querySelector('#scholarGridLink');

    const contactScreen = document.querySelector('.contactScreen');
    const contactLink = document.querySelector('#contactLink');

    const allScreens = [nothingScreen, scheduleScreen, calendarScreen, libraryScreen, gradeScreen, remindersScreen, scholarGridScreen, contactScreen];
    const allLinks = [scheduleLink, calendarLink, libraryLink, gradeLink, remindersLink, scholarGridLink, contactLink];

    function changeSelectedLink(element){
        allLinks.forEach(element => {
            if (element.classList.contains('selectedLink')) {
                element.classList.remove('selectedLink');
            }
        });
        element.classList.add('selectedLink');
    }

    function changeScreenTo(screen) {
        allScreens.forEach(element => {
            if (!element.classList.contains('hidden')){
                element.classList.add('hidden');
            }
        });
        screen.classList.remove('hidden');
    }

    sideMenu.addEventListener('click', function(e) {
        if (e.target.parentElement === scheduleLink) {
            changeSelectedLink(scheduleLink);
            changeScreenTo(scheduleScreen);
        }
        else if (e.target.parentElement === calendarLink) {
            changeSelectedLink(calendarLink);
            changeScreenTo(calendarScreen);
        }
        else if (e.target.parentElement === libraryLink) {
            changeSelectedLink(libraryLink);
            changeScreenTo(libraryScreen);
        }
        else if (e.target.parentElement === gradeLink) {
            changeSelectedLink(gradeLink);
            changeScreenTo(gradeScreen);
        }
        else if (e.target.parentElement === remindersLink) {
            changeSelectedLink(remindersLink);
            changeScreenTo(remindersScreen);
        }
        else if (e.target.parentElement === scholarGridLink) {
            changeSelectedLink(scholarGridLink);
            changeScreenTo(scholarGridScreen);
        }
        else if (e.target.parentElement === contactLink) {
            changeSelectedLink(contactLink);
            changeScreenTo(contactScreen);
        }
    });

    function switchTableLock(state) {
        if (state === 'locked') {
            scheduleTable.classList.remove('locked');
            scheduleTable.classList.add('unlocked');
            scheduleTableCells.forEach(element => {
            if (!element.classList.contains('timeCell')) {
                element.style.setProperty('border', '2px solid var(--text-color)');
                const previousText = element.firstChild.innerText;
                element.innerHTML = `<input type="text" value="${previousText}">`;
            }
            });
        }
        else if (state === 'unlocked'){
            scheduleTable.classList.remove('unlocked');
            scheduleTable.classList.add('locked');
            scheduleTableCells.forEach(element => {
            if (!element.classList.contains('timeCell')) {
                element.style.setProperty('border', '2px solid var(--secondary-color)');
                const previousText = element.firstChild.value;
                element.innerHTML = `<p>${previousText}</p>`;
            }
        });
        }
    };

    lockTableButton.addEventListener('click', function() {
        if (scheduleTable.classList.contains('locked')) {
            switchTableLock(scheduleTable.getAttribute('class'));
            lockTableButtonImage.setAttribute('src', 'assets/img/svg/unlock-icon.svg');
        }
        else if (scheduleTable.classList.contains('unlocked')) {
            switchTableLock(scheduleTable.getAttribute('class'));
            lockTableButtonImage.setAttribute('src', 'assets/img/svg/lock-icon.svg');
        }
    });
}globalFunction();