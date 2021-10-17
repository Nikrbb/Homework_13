const userNum = +prompt( `Введите число` );
const userDegree = +prompt( `В какую степень возвести число?`, 1 );
function degreeCalc( num, degree = 1 ) {
    if ( isNaN( num ) || isNaN( degree ) ) return `Awesome ERROR`;
    return Math.pow( num, degree );
}
let calc = degreeCalc( userNum, userDegree );
alert( calc );
