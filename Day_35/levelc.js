
let mwezi = prompt("Enter a month: ")
let leap = prompt("Is leap year: ")
month = mwezi.toLocaleLowerCase()
leap = leap.toLocaleLowerCase()
switch(month){
    case 'september':
        console.log(`${month} has 30 days.`)
        break;
    case 'october':
        console.log(`${month} has 31 days.`)
        break;
    case 'november':
        console.log(`${month} has 30 days.`)
        break;
    case 'december':
        console.log(`${month} has 31 days.`)
        break;
    case 'january':
        console.log(`${month} has 31 days.`)
        break;
    case 'february':
        console.log(`${month} has 30 days.`)
        break;
    case 'march':
        console.log(`${month} has 31 days.`)
        break;
    case 'april':
        console.log(`${month} has 30 days.`)
        break;
    case 'may':
        console.log(`${month} has 31 days.`)
        break;
    case 'june':
        console.log(`${month} has 30 days.`)
        break;
    case 'july':
        console.log(`${month} has 31 days.`)
        break;
    case 'august':
        console.log(`${month} has 31 days.`)
        break;

}


//5
switch(month){

    case 'september':
        console.log(`${month} has 30 days.`)
        break;
    case 'october':
        console.log(`${month} has 31 days.`)
        break;
    case 'november':
        console.log(`${month} has 30 days.`)
        break;
    case 'december':
        console.log(`${month} has 31 days.`)
        break;
    case 'january':
        console.log(`${month} has 31 days.`)
        break;
    case 'february':
        leap === 'true'? console.log(`${month} has 29 days.`)
        : console.log(`${month} has 28 days.`)
        break;
    case 'march':
        console.log(`${month} has 31 days.`)
        break;
    case 'april':
        console.log(`${month} has 30 days.`)
        break;
    case 'may':
        console.log(`${month} has 31 days.`)
        break;
    case 'june':
        console.log(`${month} has 30 days.`)
        break;
    case 'july':
        console.log(`${month} has 31 days.`)
        break;
    case 'august':
        console.log(`${month} has 31 days.`)
        break;
}