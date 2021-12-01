let containerCell = document.querySelector('.container-cell');
const row = 10;
const col = 10;
let numberSquare = row * col;
let maxNumber = numberSquare;


function arrayNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





const number = arrayNumber( 1, 100)

for (let i = 1; i <= numberSquare; i++) {
    const square = document.createElement('div');
    square.classList.add('cell');
    console.log(square);
    square.append(i);
    containerCell.append(square);
}


