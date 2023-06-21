import {middleBuild,titler,item} from './builders.js';
const home = ()=>{
  
  middleBuild();
  titler('Slawek\'s specials');
  item('Hello!','Welcome to my cat restaurant');
  item('Hours','Sunday: 8am - 8pm','Monday: 6am - 6pm','Tuesday: 6am - 6pm','Wednesday: 6am - 6pm','Thursday: 6am - 10pm','Friday: 6am - 10pm','Saturday: 8am - 10pm');
  item('Location','Slawek\s yard, Wilkszyn ');
  
}
export {home};