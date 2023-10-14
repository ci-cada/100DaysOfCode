let score = prompt("Enter the score: ")

if (score >= 90){
    console.log("A")
}else if(score >= 70 && score <= 89){
    console.log("B")
}else if (score >= 60 && score <= 69){
    console.log("C")
}else if(score >= 50 && score <= 59){
    console.log("D")
}else{
    console.log("F")
}

//2
let month = prompt("Enter the month: ")

month = month.toLowerCase()
switch(month){
    case 'september':
        console.log("Autum")
        break;
    case 'october':
        console.log("Autum")
        break;
    case 'november':
        console.log("Autum")
        break;
    case 'december':
        console.log("Winter")
        break;
    case 'january':
        console.log("Winter")
        break;
    case 'february':
        console.log("Winter")
        break;
    case 'march':
        console.log("Spring")
        break;
    case 'april':
        console.log("Spring")
        break;
    case 'may':
        console.log("Spring")
        break;
    case 'june':
        console.log("Summer")
        break;
    case 'july':
        console.log("Summer")
        break;
    case 'august':
        console.log("Summer")
        break;
}
//3
let day = prompt("What is the day today? ")

day = day.toLocaleLowerCase()

if (day === 'sartuday' || day === 'sunday'){
    console.log(`${day} is a weekend`)
}else{
    console.log(`${day} is a working day`)
}


