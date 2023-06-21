import {middleBuild,titler,item} from './builders.js';

const menu = ()=> {
  
    middleBuild();
    titler('Menu');
    item('Tuna','Mmm very tasty, grilled.');
    item('Cheese','The fatter, the better.');
    item('Catnip','Only on weekends.');
    item('Crisps','Base of healthy diet.');
}
     
export {menu};