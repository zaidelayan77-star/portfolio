let pop4 = document.getElementById("pop4");
let closeBtn = document.querySelectorAll(".close");
let projects = document.querySelectorAll(".p div");

function showItems(element) {
    pop4.style.display = "flex";
}

projects.forEach((e) => {
  e.addEventListener("click", () => {
    showItems(e);
  });
});

closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    pop4.style.display = "none";
  });
});


