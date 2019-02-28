const chars = ['A','B','C','D','E','F',0,1,2,3,4,5];

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;
const charsNumber = 12;

const codesGeneretor = () => {
for (let i =0; i<1000; i++) {
    
    let ki = "";
    for(let i = 0; i<12;i++){
        const index = Math.floor(Math.random() * chars.length);
        
        ki+=chars[index];
    
    
// for (let i = 0; i < codesNumber; i++) {
//  let code = "";
//  for (let i = 0; i < charsNumber; i++) {
//   const index = Math.floor(Math.random() * 20)
//   code += chars[index];
}
const div = document.createElement('div');
div.textContent = ki;
section.appendChild(div)
}
}

btn.addEventListener('click', codesGeneretor)