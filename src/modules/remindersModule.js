const userData = require('./fakeData.json')
const remindersData = userData.reminders;

const remindersScreen = document.querySelector('.remindersScreen');

/* <div class="remindersContainer">
    <div class="reminderContent">
        <h2 class="reminderTitle">Prova de Probabilidade e Estatística</h2>
        <div class="horizontalLine"></div>
        <div class="reminderDescriptionArea">
            <p class="descriptionText">Média, mediana e moda</p>
            <p class="reminderData">27/04/2023</p>
        </div>
    </div>
    <div class="reminderCrud">
        <button class="reminderEditButton"><img src="../src/assets/img/svg/edit-icon.svg" alt="Edit Icon"></button>
        <button class="reminderRemoveButton"><img src="../src/assets/img/svg/bin-icon.svg" alt="Bin Icon"></button>
    </div>
</div> */

{/* <div class="addReminderArea">
    <button id="addReminderButton">
        <img src="../src/assets/img/svg/plus-icon.svg" alt="Plus Icon"></img>
        <p>Adicionar Lembrete</p>
    </button>
</div> */}

function createRemindersArea(){
    const remindersArea = document.createElement('div');
    remindersArea.classList.add('remindersArea');
    return remindersArea;
}

function createReminderContainer(){
    const reminderContainer = document.createElement('div');
    reminderContainer.classList.add('remindersContainer');
    return reminderContainer;
}

function createReminderContent(){
    const reminderContent = document.createElement('div');
    reminderContent.classList.add('reminderContent');
    return reminderContent;
}

function createReminderTitle(title){
    const reminderTitle = document.createElement('h2');
    reminderTitle.classList.add('reminderTitle');
    reminderTitle.innerText = title;
    return reminderTitle;
}

function createHorizontalLine(){
    const horizontalLine = document.createElement('div');
    horizontalLine.classList.add('horizontalLine');
    return horizontalLine;
}

function replaceAll(str, find, replace) {
    while(str.includes(find)){
        str = str.replace(find, replace);
    }
    return str;
}

function createReminderDescriptionArea(description, date){
    const reminderDescriptionArea = document.createElement('div');
    reminderDescriptionArea.classList.add('reminderDescriptionArea');
    reminderDescriptionArea.innerHTML = `<p class="descriptionText">${description}</p><p class="reminderData">${replaceAll(date, '-', '/')}</p>`;
    return reminderDescriptionArea;
}

function createReminderCrud(){
    const reminderCrud = document.createElement('div');
    reminderCrud.classList.add('reminderCrud');
    return reminderCrud;
}

function createReminderEditButton(){
    const reminderEditButton = document.createElement('button');
    reminderEditButton.classList.add('reminderEditButton');
    reminderEditButton.innerHTML = `<img src="../src/assets/img/svg/edit-icon.svg" alt="Edit Icon">`;
    return reminderEditButton;
}

function createReminderRemoveButton(){
    const reminderRemoveButton = document.createElement('button');
    reminderRemoveButton.classList.add('reminderRemoveButton');
    reminderRemoveButton.innerHTML = `<img src="../src/assets/img/svg/bin-icon.svg" alt="Bin Icon">`;
    return reminderRemoveButton;
}

function createReminder(reminder, remindersArea){

    const reminderContainer = createReminderContainer();
    const reminderContent = createReminderContent();
    const reminderTitle = createReminderTitle(reminder.title);
    const horizontalLine = createHorizontalLine();
    const reminderDescriptionArea = createReminderDescriptionArea(reminder.description, reminder.date);
    const reminderCrud = createReminderCrud();
    const reminderEditButton = createReminderEditButton();
    const reminderRemoveButton = createReminderRemoveButton();

    reminderContainer.appendChild(reminderContent);
    reminderContainer.appendChild(reminderCrud);

    reminderContent.appendChild(reminderTitle);
    reminderContent.appendChild(horizontalLine);
    reminderContent.appendChild(reminderDescriptionArea);


    reminderCrud.appendChild(reminderEditButton);
    reminderCrud.appendChild(reminderRemoveButton);
    
    remindersArea.appendChild(reminderContainer);

}

function getUserReminders(){

    const remindersArea = createRemindersArea();

    if(remindersData.length > 0){

        remindersData.forEach(reminder => {
            createReminder(reminder, remindersArea);
        });
    } else {
        const noRemindersMessage = document.createElement('p');
        noRemindersMessage.innerText = 'Você não possui lembretes';
        remindersScreen.appendChild(noRemindersMessage);
        return;
    }

    remindersScreen.appendChild(remindersArea);
}

module.exports = {getUserReminders};