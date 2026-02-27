const ifButton = document.getElementById("ifButton");

ifButton.onclick = function () {
  let isStudent = true;

  if (isStudent) {
    console.log("You are a student");
    document.getElementById("message").textContent = "You are a student!";
  } else {
    console.log("You are not a student");
    document.getElementById("message").textContent = "You are not a student!";
  }
};






const loopButton = document.getElementById("loopButton");

loopButton.onclick = function () {
  const list = document.getElementById("list");
  list.innerHTML = ""; // clear previous items

  for (let i = 1; i <= 5; i++) {
    console.log("Loop number:", i);

    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }
};




const domButton = document.getElementById("domButton");

domButton.onclick = function () {
  const title = document.getElementById("title");

  title.textContent = "The DOM Has Been Changed!";
  title.style.color = "blue";
};