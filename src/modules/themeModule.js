const root = document.querySelector(':root');

const themeButton = document.querySelector('#themeButton');
const themeButtonIcon = document.querySelector('#themeButton img');

const headerBsiLogo = document.querySelector('.bsiHubLogo');

const welcomeScreenLogo = document.querySelector('.welcomeScreenLogo');

function themeChanger() {
    if (themeButton.classList.contains('darkTheme')) {
        themeButton.classList.remove('darkTheme');
        themeButton.classList.add('lightTheme');
        root.style.setProperty('--bg-color', '#D8E0E9');
        root.style.setProperty('--primary-color', '#e6ebf0');
        root.style.setProperty('--secondary-color', '#ffffff');
        root.style.setProperty('--tertiary-color', '#f5f5fc');
        root.style.setProperty('--text-color', '#242424');
        root.style.setProperty('--text-color-2', '#373E4E');
        root.style.setProperty('--button-color', '#3d8cdb');
        root.style.setProperty('--shadow-color', '#D5D9DD');
        root.style.setProperty('--bg-color-svg-filter', 'brightness(0) saturate(100%) invert(90%) sepia(3%) saturate(1117%) hue-rotate(192deg) brightness(109%) contrast(88%)');
        root.style.setProperty('--primary-color-svg-filter', 'brightness(0) saturate(100%) invert(98%) sepia(1%) saturate(1648%) hue-rotate(178deg) brightness(98%) contrast(92%)');
        root.style.setProperty('--secondary-color-svg-filter', 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(32deg) brightness(116%) contrast(106%)');
        root.style.setProperty('--text-color-svg-filter', 'brightness(0) saturate(100%) invert(23%) sepia(28%) saturate(402%) hue-rotate(183deg) brightness(90%) contrast(93%)');
        root.style.setProperty('--text-color-2-svg-filter', 'brightness(0) saturate(100%) invert(27%) sepia(20%) saturate(868%) hue-rotate(177deg) brightness(91%) contrast(90%)');
        root.style.setProperty('--button-color-svg-filter', 'brightness(0) saturate(100%) invert(44%) sepia(96%) saturate(777%) hue-rotate(186deg) brightness(93%) contrast(84%)');
        themeButton.style = "transform: translateX(30px);";
        themeButton.style = "-webkit-transform: translateX(30px);";
        themeButtonIcon.setAttribute('src', 'src/assets/img/svg/outlined-sun-icon.svg');
        headerBsiLogo.setAttribute('src', 'src/assets/img/bsi-hub-logo-2.png');
        welcomeScreenLogo.setAttribute('src', 'src/assets/img/bsi-hub-logo-2.png');
    } else if (themeButton.classList.contains('lightTheme')) {
        themeButton.classList.remove('lightTheme');
        themeButton.classList.add('darkTheme');
        root.style.setProperty('--bg-color', '#1a1f25');
        root.style.setProperty('--primary-color', '#21262D');
        root.style.setProperty('--secondary-color', '#2b323a');
        root.style.setProperty('--tertiary-color', '#2f373f');
        root.style.setProperty('--text-color', '#A5A8BD');
        root.style.setProperty('--text-color-2', '#394962');
        root.style.setProperty('--button-color', '#39A6FF');
        root.style.setProperty('--shadow-color', '#07090d');
        root.style.setProperty('--bg-color-svg-filter', 'brightness(0) saturate(100%) invert(13%) sepia(11%) saturate(774%) hue-rotate(175deg) brightness(100%) contrast(97%)');
        root.style.setProperty('--primary-color-svg-filter', 'brightness(0) saturate(100%) invert(13%) sepia(12%) saturate(804%) hue-rotate(175deg) brightness(92%) contrast(94%)');
        root.style.setProperty('--secondary-color-svg-filter', 'brightness(0) saturate(100%) invert(11%) sepia(4%) saturate(4425%) hue-rotate(172deg) brightness(97%) contrast(78%)');
        root.style.setProperty('--text-color-svg-filter', 'brightness(0) saturate(100%) invert(76%) sepia(31%) saturate(163%) hue-rotate(195deg) brightness(88%) contrast(76%)');
        root.style.setProperty('--text-color-2-svg-filter', 'brightness(0) saturate(100%) invert(25%) sepia(10%) saturate(1811%) hue-rotate(178deg) brightness(98%) contrast(89%)');
        root.style.setProperty('--button-color-svg-filter', 'brightness(0) saturate(100%) invert(58%) sepia(91%) saturate(3020%) hue-rotate(188deg) brightness(106%) contrast(103%)');
        themeButton.style = "transform: translateX(0px);";
        themeButton.style = "-webkit-transform: translateX(0px);";
        themeButtonIcon.setAttribute('src', 'src/assets/img/svg/outlined-moon-icon.svg');
        headerBsiLogo.setAttribute('src', 'src/assets/img/bsi-hub-logo.png');
        welcomeScreenLogo.setAttribute('src', 'src/assets/img/bsi-hub-logo.png');
    }
};

module.exports = {themeChanger};