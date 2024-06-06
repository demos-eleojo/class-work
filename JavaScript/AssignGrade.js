function assignGrade(numG) {
    let letterG;

    if (numG >= 90 && numG <= 100) {
        letterG ='A';
    } else if (numG >= 80 && numG < 90) {
        letterG = 'B';

    } else if (numG >= 70 && numG < 80){
        letterG = 'C'

    }else if (numG >= 60 && numG < 70){
        letterG = 'D';

    }else if (numG < 60){

        letterG = 'F';

    }else 
    {
        letterG = 'Invalid grade';
    
    }
    
        return letterG
    
}
console.log(assignGrade(90));

}
