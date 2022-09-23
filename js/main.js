let btns = document.getElementsByTagName("button");
let lift = document.querySelector(".lift");
for (b of btns) {
  b.addEventListener("click", e => {
    let floor = parseInt(e.target.innerText);
    let margin = 1600 - 100 * floor;
    lift.style.marginTop = margin + "px";
  });
}

// 1 - margin-top 1500
// 2 - margin-top 1400
// 3 - margin-top 1300

// 16 - margin-top 0
