//alert('おはようございます！');
console.log("おはようございます")
const namae = 'Katarina'

const small_part = document.querySelector('h1')

small_part.innerHTML = `おはようございます客さん。私は ${namae}.

if (2 == '2' ) {
    console.log('Zgadza sie');
  }


 const names = ["Peter", 'James', 'Mike', 'Sam', 'Frodo']

 for (name of names) {
   console.log(name)
   if(name === "Mike") {
   console.log(`${name} was found.`)
  break;}
 }
const whole = document.querySelector("div")
console.log(whole)




let userColor = '';
let defaultColor = 'pink';
let currentColor = userColor || defaultColor;

console.log(currentColor);

let hour = 10;


function greet (time) {
    if (time < 8) {
        console.log('You managed to get up earlier!')
    }
    else console.log('Didn\'t managed today')
}

console.log(greet(hour))





// let points = 90;
// //let type = points > 100 ? 'gold' : 'silver';
// //console.log(type)
// let type = 'fdcc';
// function compare(result) {
// if (result > 100) {
// type = 'gold';
// return type}
// else var type = 'silver';
// return type
// }
// console.log(compare(points))
// console.log(type);


console.log ('Tu sie robi przerwe')
let a = 'a jest globalne'

console.log (a);
function a_na_pierwszym (a){
  console.log (`FN1 mam dostep do a globalnego: ${a}`);

  function a_na_drugim_vB (a){
  
    console.log (`FN2vB dostałem a z globalnego: ${a}`);
    var a = 'a poziom 2 versja B';
    console.log (`FN2vB tu mam moje lokalne a z wersji B:${a}`)
      
  }
  a_na_drugim_vB (a)


  var a = 'a poziom 1';
  console.log (`FN1 a tu mam moje a lokalne: ${a}`);
  
  function a_na_drugim_vA (a){

    console.log (`FN2vA dostam a z poziomu jeden: ${a}`);
    var a = 'a poziom 2 versja A';
    console.log (`FN2vA tu mam moje lokalne a:${a}`)
      
  }
  a_na_drugim_vA (a)
}

a_na_pierwszym (a)
console.log (a)