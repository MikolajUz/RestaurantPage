const menu = ()=>{
  
    const title=document.createElement('h1');
    const container=document.createElement('div');
    const main=document.querySelector('div.middle');
    container.classList.add('containerMenu')

    title.textContent='Menu';
    main.appendChild(container);
    container.appendChild(title);

 

    const dish = (name,text) =>{

        let containerD=document.createElement('div');
        let title=document.createElement('h2');
        let descrip=document.createElement('div');
        let img =document.createElement('img');

        img.src = `../src/images/${name}.jpg`;
        img.classList.add('img');
        img.alt= name;

        containerD.classList.add('dish');
        title.textContent=name;
        descrip.textContent=text;
        descrip.classList.add('textDish');

        container.appendChild(containerD);
        containerD.appendChild(title);
        containerD.appendChild(descrip);
        containerD.appendChild(img);

    }

    dish('Tuna','Mmm very tasty, grilled.');
    dish('Cheese','The fatter, the better.');
    dish('Catnip','Only on weekends.');
    dish('Crisps','Base of healthy diet.');


  }
  export {menu};