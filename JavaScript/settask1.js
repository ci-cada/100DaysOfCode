//1
/*
for (let i = 0 ; i <= 10 ; i++){
    console.log(i)
}
//2
let j = 0 
while(j <= 10){
    console.log(j)
    j++
}

//3
do{
    console.log(j)
    j++
    
}while(j <= 10)
//3
let enter  = prompt("Enter number to reach: ")
for (let k = 0 ; k <= enter ; k++){
    console.log(k)
}
//4
for (let a = 0; a < 7; a++){
    let line = ''
    for (let b = 0 ; b <= a ; b++){
        line += "#"
    }
    console.log(line)
}

for (let i = 1; i <= 6; i++) {
    console.log('#'.repeat(i));
}

//5
for (let a = 0; a < 11; a++){
        console.log(`${a} x ${a} = ${a * a}`)
}
//6 
console.log("i \ti^2\t i^3")
for(let a = 0; a <= 10; a++){
    console.log(`${a} \t${a**2}\t ${a**3}`)
}

//7
for (let u = 0; u <= 100; u++){
    if( u % 2 != 0 ){
        continue
    }
    console.log(u)
}

//8
for (let u = 0; u <= 100; u++){
    if( u % 2 === 0 ){
        continue
    }
    console.log(u)
}

//9
for (let d = 0; d <= 100; d++){

    if (d <= 3){
        console.log(d)
    };
    if (d % 2 === 0 || d % 3 === 0){continue};
    
    for (let i = 5; i * i <= d; i += 6) {
        if (d % i === 0 || d % (i + 2) === 0) {
            continue;
        }
    }
    console.log(d)
}
*/
for (let d = 0; d <= 100; d++) {
    if (d === 2 || d === 3) {
        console.log(d);
    } else if (d > 1 && d !== 1 && d !== 0 && (d !== 2 && d !== 3) && (d % 2 !== 0 && d % 3 !== 0)) {
        let isPrime = true;
        
        for (let i = 5; i * i <= d; i += 6) {
            if (d % i === 0 || d % (i + 2) === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(d);
        }
    }
}
