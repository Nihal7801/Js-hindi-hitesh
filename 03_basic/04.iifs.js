// Imediately invoked function Expressions (IIFE)

(function milk(){
    console.log(`DataBase is connected`);
    
})();
// ; this braces indicate that IIFE function is close 
 

((name)=>{
    console.log(`${name}DataBase is connected`);
    
})('Nihal your ')
