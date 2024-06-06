function assignLetterGrade(numericGrade) {
    let letterGrade;
    
    if (numericGrade >= 90 && numericGrade <= 100) {
        letterGrade = 'A';
    } else if (numericGrade >= 80 && numericGrade < 90) {
        letterGrade = 'B';
    } else if (numericGrade >= 70 && numericGrade < 80) {
        letterGrade = 'C';
    } else if (numericGrade >= 60 && numericGrade < 70) {
        letterGrade = 'D';
    } else if (numericGrade < 60) {
        letterGrade = 'F';
    } else {
        letterGrade = 'Invalid grade';
    }
    
    return letterGrade;
}

// Example usage:
let grade = prompt("Enter a numeric grade:");
grade = parseFloat(grade);

if (!isNaN(grade)) {
    let letter = assignLetterGrade(grade);
    console.log(The letter grade for ${grade} is: ${letter});
} else {
    console.log("Please enter a valid numeric grade.");
}