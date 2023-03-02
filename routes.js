const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('.'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




app.get('/', (req, res) => {
    res.render('welcomeView', {
        style: 'style.css'
    });
});

app.get('/horario-individual', (req, res) => {
    res.render('scheduleView', {
        style: 'style.css',
        viewScript: 'scheduleModule.js'
    });
});

app.get('/calendario', (req, res) => {
    res.render('calendarView', { style: 'style.css' });
});

app.get('/biblioteca', (req, res) => {
    res.render('libraryView', { style: 'style.css' });
});

app.get('/registro-notas', (req, res) => {
    res.render('gradeView', {
        style: 'style.css',
        viewScript: 'gradeModule.js'
    });
});

app.get('/lembretes', (req, res) => {
    res.render('reminderView', {
        style: 'style.css',
        viewScript: 'reminderModule.js'
    });
});

app.get('/matriz-escolar', (req, res) => {
    res.render('scholarGridView', { style: 'style.css' });
});

app.get('/contatos', (req, res) => {
    res.render('contactView', { style: 'style.css' });
});



