import './style.css';
import {home} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';



const createInitial= (() => {
    const content=document.getElementById('content');

    const header=document.createElement('div');
    const middle=document.createElement('div');
    const footer=document.createElement('div');

    header.classList.add('header');
    middle.classList.add('middle');
    footer.classList.add('footer');
    
    content.appendChild(header);
    content.appendChild(middle);
    content.appendChild(footer);

   
    footer.textContent='Made by MikolajUZ';
    
    const button1=document.createElement('div');
    button1.textContent='Home';
    button1.setAttribute('id','button1');
    header.appendChild(button1);

    const button2=document.createElement('div');
    button2.setAttribute('id','button2');
    button2.textContent='Menu';home
    header.appendChild(button2);

    const button3=document.createElement('div');
    button3.setAttribute('id','button3');
    button3.textContent='Contact';
    header.appendChild(button3);
    
    const buttons=document.querySelectorAll('div.header>div');  
    buttons.forEach(elem=>{
        elem.addEventListener('click',tabHandler);
        elem.classList.add('button');
    });



    function tabHandler(){

       const buttons=document.querySelectorAll('div.button, div.buttonAct');
       buttons.forEach(elem=>{
        if(elem===this){
            this.classList.remove('button');
            this.classList.add('buttonAct');
        }
        else{
            elem.classList.remove('buttonAct');
            elem.classList.add('button');
        }
       });

       if(this.textContent==='Home')home();
       if(this.textContent==='Menu')menu();
       if(this.textContent==='Contact')contact();

    }


})();



