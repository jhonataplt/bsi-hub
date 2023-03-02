import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const schedule = require('./modules/scheduleModule.js');
const theme = require('./modules/themeModule.js');
// const grade = require('./modules/gradeModule.js');
// const reminder = require('./modules/reminderModule.js');



function globalFunction() {
    
    //#======================================================================================#//
    //#================================|| GLOBAL VARIABLES ||================================#//
    //#======================================================================================#//



    const openLoginButton = document.querySelector('#openLoginButton');
    const closeLoginButton = document.querySelector('#closeLoginButton');
    const loginArea = document.querySelector('#loginArea');
    const loginForm = document.querySelector('.loginForm');

    const sideMenu = document.querySelector('.sideMenuArea');

    const themeSwitch = document.querySelector('#themeSwitch');

    const welcomeScreen = document.querySelector('.welcomeScreen');

    const scheduleScreen = document.querySelector('.scheduleScreen');
    const scheduleLink = document.querySelector('#scheduleLink');
    

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
    //#====================================|| LOAD PAGE ||===================================#//
    //#======================================================================================#//


    //#======================================================================================#//
    //#======================================|| LOGIN ||=====================================#//
    //#======================================================================================#//


    
    openLoginButton.addEventListener('click', () => {
        loginArea.style.display = 'block';
    });

    loginArea.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (clickedElement === loginArea) {
            loginArea.style.display = 'none';
        }
    });

    closeLoginButton.addEventListener('click', (e) => {
        e.preventDefault();
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

    sideMenu.addEventListener('click', (e) => {

        const clickedElement = e.target;
        const clickedElementParent = clickedElement.parentElement;

        if (clickedElement === scheduleLink || clickedElementParent === scheduleLink || clickedElement.firstChild === scheduleLink) {
            changeSelectedLink(scheduleLink);
        }
        else if (clickedElement === calendarLink || clickedElementParent === calendarLink || clickedElement.firstChild === calendarLink) {
            changeSelectedLink(calendarLink);
        }
        else if (clickedElement === libraryLink || clickedElementParent === libraryLink || clickedElement.firstChild === libraryLink) {
            changeSelectedLink(libraryLink);
        }
        else if (clickedElement === gradeLink || clickedElementParent === gradeLink || clickedElement.firstChild === gradeLink) {
            changeSelectedLink(gradeLink);
        }
        else if (clickedElement === remindersLink || clickedElementParent === remindersLink || clickedElement.firstChild === remindersLink) {
            changeSelectedLink(remindersLink);
        }
        else if (clickedElement === scholarGridLink || clickedElementParent === scholarGridLink || clickedElement.firstChild === scholarGridLink) {
            changeSelectedLink(scholarGridLink);
        }
        else if (clickedElement === contactLink || clickedElementParent === contactLink || clickedElement.firstChild === contactLink) {
            changeSelectedLink(contactLink);
        }
    });



    //#======================================================================================#//
    //#==================================|| THEME SWITCH ||==================================#//
    //#======================================================================================#//



    themeSwitch.addEventListener('click', () => {
        theme.themeChanger();
    });


    
    //#======================================================================================#//
    //#=================================|| SCHEDULE SCREEN||=================================#//
    //#======================================================================================#//



    // lockTableButton.addEventListener('click', () => {
    //     schedule.switchTableLock();
    // });



} globalFunction();