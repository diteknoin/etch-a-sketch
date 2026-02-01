const container = document.getElementById("container");

const userInput = prompt("Mau ukuran berapa ?");

container.style.setProperty("--size", userInput);

for (let i = 0; i < userInput * userInput; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = "div-child";

  container.appendChild(newDiv);
}

const boxes = document.querySelectorAll(".div-child");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", function () {
    this.classList.add("painted");
  });
});
