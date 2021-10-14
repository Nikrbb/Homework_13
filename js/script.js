const userNum = prompt( `Введите число` );
const userDegree = prompt( `В какую степень возвести число?`, 1 );
function degreeCalc( num, degree = 1 ) {
    if ( ( isNaN( num )  === true ) || ( num  === null ) || ( isNaN( degree )  === true ) ) {
        return `Awesome ERROR`;
    } else {
        return Math.pow( num, degree );
    }
}
let calc = degreeCalc( userNum, userDegree );
alert( calc );
