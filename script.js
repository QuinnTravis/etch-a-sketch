window.onload = function(){
   createGrid();
   hover();
}


function createGrid(size = 16){
   
   const sizePer = (600 / size);

  const container = document.querySelector('.sketchpad');
  for(let i = 1;i<=size**2;i++){
      const element = document.createElement("div");
      element.classList.add("divGrid");
      element.style.height = `${sizePer}px`;
      element.style.width = `${sizePer}px`;
      container.append(element);
  }

 

  hover();

  
}


const changeGrid = document.querySelector('.size-grid');

changeGrid.addEventListener('click', e =>{
   gridSize();
})

function gridSize(){

   userInput = userSize();

   clearGrid();
   createGrid(userInput);

   
}



function userSize(){
   
   let userInput = +prompt("Enter the number of grid(s) to be produced in the container:");
   while (userInput > 100 || userInput <= 1) {
      userInput = prompt(`Enter a number from 1 to 100.`)
   }

   return userInput;

}


const removeGrid = document.querySelector('.clear-grid');

removeGrid.addEventListener('click',e =>{

  erase();
  
})


function clearGrid(){
   
   const elements = document.querySelectorAll(".divGrid");
   elements.forEach(element => {
   element.remove();
   });
   
}

function erase(){
   const container = document.querySelector('.sketchpad');
   const elements = document.querySelectorAll(".divGrid");
   elements.forEach((divGrid) => divGrid.style.backgroundColor = 'white');
}

function hover(){
   const grid = document.querySelectorAll('.divGrid');
   grid.forEach(element => {
      element.addEventListener("mouseover", (event) => {
          event.target.style.backgroundColor = "black";
      });
  });
}

hover();

function randomColor(){

   const randomNum = Math.floor(Math.random()*16777215);
   const randomCode = '#' + randomNum.toString(16);

   return randomCode;
}

const rainbow = document.querySelector('.rainbow-button');

rainbow.addEventListener('click',e =>{


   const grid = document.querySelectorAll('.divGrid');
   grid.forEach(element => {
      element.addEventListener("mouseover", (event) => {
          event.target.style.backgroundColor = randomColor();
      });
  });
})