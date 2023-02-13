function globalFunction() {

    //#======================================================================================#//
    //#================================|| GLOBAL VARIABLES ||================================#//
    //#======================================================================================#//



    const root = document.querySelector(':root');

    const headerBsiLogo = document.querySelector('.bsiHubLogo');
    const welcomeScreenLogo = document.querySelector('.welcomeScreenLogo');

    const openLoginButton = document.querySelector('#openLoginButton');
    const closeLoginButton = document.querySelector('#closeLoginButton');
    const loginArea = document.querySelector('#loginArea');
    const loginForm = document.querySelector('.loginForm');

    const sideMenu = document.querySelector('.sideMenuArea');

    const themeSwitch = document.querySelector('#themeSwitch');
    const themeButton = document.querySelector('#themeButton');
    const themeButtonIcon = document.querySelector('#themeButton img');

    const welcomeScreen = document.querySelector('.welcomeScreen');

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

    const allScreens = [welcomeScreen, scheduleScreen, calendarScreen, libraryScreen, gradeScreen, remindersScreen, scholarGridScreen, contactScreen];
    const allLinks = [scheduleLink, calendarLink, libraryLink, gradeLink, remindersLink, scholarGridLink, contactLink];



    //#======================================================================================#//
    //#======================================|| LOGIN ||=====================================#//
    //#======================================================================================#//



    loginArea.addEventListener('click', function (e) {
        const clickedElement = e.target;
        if (clickedElement !== loginForm) {
            loginArea.style.display = 'none';
        }
    });

    openLoginButton.addEventListener('click', function () {
        loginArea.style.display = 'block';
    });

    closeLoginButton.addEventListener('click', function () {
        loginArea.style.display = 'none';
    });



    //#======================================================================================#//
    //#==============================|| SIDEMENU NAVIGATION ||===============================#//
    //#======================================================================================#//



    function changeSelectedLink(element) {
        allLinks.forEach(element => {
            if (element.classList.contains('selectedLink')) {
                element.classList.remove('selectedLink');
            }
        });
        element.classList.add('selectedLink');
    }


    function changeScreenTo(screen) {
        allScreens.forEach(element => {
            if (!element.classList.contains('hidden')) {
                element.classList.add('hidden');
            }
        });
        screen.classList.remove('hidden');
    }


    sideMenu.addEventListener('click', function (e) {

        const clickedElement = e.target;
        const clickedElementParent = clickedElement.parentElement;

        if (clickedElement === scheduleLink || clickedElementParent === scheduleLink) {
            changeSelectedLink(scheduleLink);
            changeScreenTo(scheduleScreen);
        }
        else if (clickedElement === calendarLink || clickedElementParent === calendarLink) {
            changeSelectedLink(calendarLink);
            changeScreenTo(calendarScreen);
        }
        else if (clickedElement === libraryLink || clickedElementParent === libraryLink) {
            changeSelectedLink(libraryLink);
            changeScreenTo(libraryScreen);
        }
        else if (clickedElement === gradeLink || clickedElementParent === gradeLink) {
            changeSelectedLink(gradeLink);
            changeScreenTo(gradeScreen);
        }
        else if (clickedElement === remindersLink || clickedElementParent === remindersLink) {
            changeSelectedLink(remindersLink);
            changeScreenTo(remindersScreen);
        }
        else if (clickedElement === scholarGridLink || clickedElementParent === scholarGridLink) {
            changeSelectedLink(scholarGridLink);
            changeScreenTo(scholarGridScreen);
        }
        else if (clickedElement === contactLink || clickedElementParent === contactLink) {
            changeSelectedLink(contactLink);
            changeScreenTo(contactScreen);
        }
    });



    //#======================================================================================#//
    //#==================================|| THEME SWITCH ||==================================#//
    //#======================================================================================#//



    themeSwitch.addEventListener('click', function () {
        if (themeButton.classList.contains('darkTheme')) {
            themeButton.classList.remove('darkTheme');
            themeButton.classList.add('lightTheme');
            root.style.setProperty('--bg-color', '#D8E0E9');
            root.style.setProperty('--primary-color', '#e6ebf0');
            root.style.setProperty('--secondary-color', '#ffffff');
            root.style.setProperty('--text-color', '#242424');
            root.style.setProperty('--text-color-2', '#373E4E');
            root.style.setProperty('--button-color', '#3d8cdb');
            root.style.setProperty('--element-color-1', '#1A31B1');
            root.style.setProperty('--element-color-2', '#6644B7');
            root.style.setProperty('--element-color-3', '#422189');
            root.style.setProperty('--shadow-color', '#D5D9DD');
            root.style.setProperty('--bg-color-svg-filter', 'brightness(0) saturate(100%) invert(90%) sepia(3%) saturate(1117%) hue-rotate(192deg) brightness(109%) contrast(88%)');
            root.style.setProperty('--primary-color-svg-filter', 'brightness(0) saturate(100%) invert(98%) sepia(1%) saturate(1648%) hue-rotate(178deg) brightness(98%) contrast(92%)');
            root.style.setProperty('--secondary-color-svg-filter', 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(32deg) brightness(116%) contrast(106%)');
            root.style.setProperty('--text-color-svg-filter', 'brightness(0) saturate(100%) invert(23%) sepia(28%) saturate(402%) hue-rotate(183deg) brightness(90%) contrast(93%)');
            root.style.setProperty('--text-color-2-svg-filter', 'brightness(0) saturate(100%) invert(27%) sepia(20%) saturate(868%) hue-rotate(177deg) brightness(91%) contrast(90%)');
            root.style.setProperty('--button-color-svg-filter', 'brightness(0) saturate(100%) invert(44%) sepia(96%) saturate(777%) hue-rotate(186deg) brightness(93%) contrast(84%)');
            themeButton.style = "transform: translateX(30px);";
            themeButton.style = "-webkit-transform: translateX(30px);";
            themeButtonIcon.setAttribute('src', 'assets/img/svg/outlined-sun-icon.svg');
            headerBsiLogo.setAttribute('src', 'assets/img/bsi-hub-logo-2.png');
            welcomeScreenLogo.setAttribute('src', 'assets/img/bsi-hub-logo-2.png');
        } else if (themeButton.classList.contains('lightTheme')) {
            themeButton.classList.remove('lightTheme');
            themeButton.classList.add('darkTheme');
            root.style.setProperty('--bg-color', '#1a1f25');
            root.style.setProperty('--primary-color', '#21262D');
            root.style.setProperty('--secondary-color', '#2b323a');
            root.style.setProperty('--text-color', '#A5A8BD');
            root.style.setProperty('--text-color-2', '#394962');
            root.style.setProperty('--button-color', '#39A6FF');
            root.style.setProperty('--element-color-1', '#3957ff');
            root.style.setProperty('--element-color-2', '#9971f7');
            root.style.setProperty('--element-color-3', '#6b1bcc');
            root.style.setProperty('--shadow-color', '#07090d');
            root.style.setProperty('--bg-color-svg-filter', 'brightness(0) saturate(100%) invert(13%) sepia(11%) saturate(774%) hue-rotate(175deg) brightness(100%) contrast(97%)');
            root.style.setProperty('--primary-color-svg-filter', 'brightness(0) saturate(100%) invert(13%) sepia(12%) saturate(804%) hue-rotate(175deg) brightness(92%) contrast(94%)');
            root.style.setProperty('--secondary-color-svg-filter', 'brightness(0) saturate(100%) invert(11%) sepia(4%) saturate(4425%) hue-rotate(172deg) brightness(97%) contrast(78%)');
            root.style.setProperty('--text-color-svg-filter', 'brightness(0) saturate(100%) invert(76%) sepia(31%) saturate(163%) hue-rotate(195deg) brightness(88%) contrast(76%)');
            root.style.setProperty('--text-color-2-svg-filter', 'brightness(0) saturate(100%) invert(25%) sepia(10%) saturate(1811%) hue-rotate(178deg) brightness(98%) contrast(89%)');
            root.style.setProperty('--button-color-svg-filter', 'brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(619%) hue-rotate(179deg) brightness(108%) contrast(87%)');
            themeButton.style = "transform: translateX(0px);";
            themeButton.style = "-webkit-transform: translateX(0px);";
            themeButtonIcon.setAttribute('src', 'assets/img/svg/outlined-moon-icon.svg');
            headerBsiLogo.setAttribute('src', 'assets/img/bsi-hub-logo.png');
            welcomeScreenLogo.setAttribute('src', 'assets/img/bsi-hub-logo.png');
        }
    })


    //#======================================================================================#//
    //#=================================|| SCHEDULE SCREEN||=================================#//
    //#======================================================================================#//



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
        else if (state === 'unlocked') {
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

    lockTableButton.addEventListener('click', function () {
        if (scheduleTable.classList.contains('locked')) {
            switchTableLock(scheduleTable.getAttribute('class'));
            lockTableButtonImage.setAttribute('src', 'assets/img/svg/unlock-icon.svg');
        }
        else if (scheduleTable.classList.contains('unlocked')) {
            switchTableLock(scheduleTable.getAttribute('class'));
            lockTableButtonImage.setAttribute('src', 'assets/img/svg/lock-icon.svg');
        }
    });


} globalFunction();