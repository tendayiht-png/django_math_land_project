// Get element by ID
let title = document.getElementById("title");




// Get button by ID
let button = document.getElementById("changeButton");

// Add an event listener
button.addEventListener("click", changeTitle);

// function to change the title
function changeTitle() {
  title.textContent = "You clicked on the button!";
}



// Get elements by class name
let items = document.getElementsByClassName("item");

// Add a new class to the item elements
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "green";
}


