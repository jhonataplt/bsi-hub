console.log("Bundle loaded");

const accountFormChanger = document.querySelector('#accountFormChanger');
const chooserBar = document.querySelector('#chooserBar');
const formSlider = document.querySelector('#formSlider');

if(accountFormChanger){
  accountFormChanger.addEventListener('click', (e) => {
    const el = e.target;
    if(el.innerText === "Entrar") {
      chooserBar.style.setProperty("margin-left", "0");
      formSlider.firstElementChild.style.setProperty("margin-left", "0");
    }else{
      chooserBar.style.setProperty("margin-left", "50%");
      formSlider.firstElementChild.style.setProperty("margin-left", "-100%");
    }
  });
}



