const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Images/Pottery_Ceramic.png") {
    myImage.setAttribute("src", "Images/Fortnite_Jumpscream.jpeg");
  } else {
    myImage.setAttribute("src", "Images/Pottery_Ceramic.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `DO NOT DO POTTERY, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `DO NOT DO POTTERY, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `DO NOT DO POTTERY, ${myName}`;
  }

}
