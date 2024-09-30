function gradingStudents(grades) {
    // Write your code here
    let arr = grades.map((el) => {
        if (el >= 38) {
            let rem = el % 5;
            if (rem >= 3) {
                return el + (5 - rem);
            }
        }
        return el;
    });
    
    return arr;
}

console.log(gradingStudents([38, 41, 42, 43, 44, 45]));
