
function middleBuild(){  

    const container=document.createElement('div');
    const main=document.querySelector('div.middle');
    container.classList.add('containerMenu');
    main.appendChild(container);
   
}

 
function item(name,...text){

        const main=document.querySelector('div.containerMenu');
        const containerD=document.createElement('div');
        const title=document.createElement('h2');
        
        const img =document.createElement('img');
        const container=document.createElement('div');

        
        img.src = `./src/images/${name}.jpg`;
        
        img.classList.add('img');
        img.onerror = function(){this.style.display='none';};
        

        containerD.classList.add('dish');
        main.appendChild(containerD);
        containerD.appendChild(title);
        containerD.appendChild(img);


        text.forEach(elem=>{
            let descrip=document.createElement('div');
            descrip.textContent=elem;
            descrip.classList.add('textDish');
            containerD.appendChild(descrip);

        });
        
        
        title.textContent=name;

    
       
}

function titler(titleText){
        
    const main=document.querySelector('div.containerMenu');
    const title=document.createElement('h1');
    main.appendChild(title);
    title.textContent=titleText;
}


  export {middleBuild,titler,item};