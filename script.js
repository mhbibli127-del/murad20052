let inputNumber = prompt("iki reqemli eded daxil edin:");

for (let i = 100; i >= 7; i--) {
  if (i % 7 === 0) {
    console.log(i);
  }
}


const N = prompt( " n sayda eded daxil edin: " );

for ( let i = 0 ; i < N; i++ ) {
  console.log( "I know how to use cycles" );
}




const limit = prompt("0-la bitən üçrəqəmli bir ədəd daxil edin:");

for (let i = 100; i <= limit; i += 10) {
  console.log(i);
}

let inputNum = prompt("butun ikireqemli tek ededlerin cemini yazin:");

for ( let i = 11 ; i <= inputNum ; i+=2 ) {
  if ( i % 2 !== 0 ) {
    console.log(i);
  }

const number = prompt("Eded daxil edin:");

for ( let i = 1 ; i <= 3 ; i+=3) {
if ( number % i === 0 && i % 3 === 0 ) {
    console.log(i);
  }
}
} 

let inputNum2 = prompt(" n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxart:");
for ( let i = inputNum2 ; i >= 2 ; i-- )  {    
 if ( inputNum2 == 23 || inputNum2 == 19 || inputNum2 == 17 || inputNum2 == 13 || inputNum2 == 11 || inputNum2 == 7 || inputNum2 == 5 || inputNum2 == 3 || inputNum2 == 2 ) {
    console.log(i);
}   
}