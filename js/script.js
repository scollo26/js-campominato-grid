let containerCell = document.querySelector('.container-cell');
let button = document.querySelector('.controls  button');
const select = document.getElementById('level');
console.log(containerCell);
console.log(button);

// const row = 10;
// const col = 10;
// let numberSquare = row * col;
// let maxNumber = numberSquare;


function arrayNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// button

button.addEventListener('click', function() {

    const select = document.getElementById('level');

// easy

if( select.value == "easy"){
    containerCell.innerHTML ='';

    for (let i = 1; i < 101; i++) {
        const square = document.createElement('div');
        square.classList.add('easy');
        square.classList.add('active');
        square.append(i);
        containerCell.append(square);

        square.addEventListener('click', function(){
            square.classList.add('blue');
        });
        
    }
    // medium
}else if( select.value == "medium"){
    containerCell.innerHTML ='';
    
    for (let i = 1; i < 81; i++) {
        const square = document.createElement('div');
        square.classList.add('medium');
        square.classList.add('active');
        
        square.append(i);
        containerCell.append(square);

        square.addEventListener('click', function(){
            square.classList.add('blue');
        });
        
        
    }

    // hard

}else{
    containerCell.innerHTML ='';
    for (let i = 1; i < 50; i++) {
        const square = document.createElement('div');
        square.classList.add('hard');
        square.classList.add('active');
        square.append(i);
        containerCell.append(square);


        square.addEventListener('click', function(){
            square.classList.add('blue');
        });
        
            
    }
    
}
    

    
})







