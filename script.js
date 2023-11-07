const clickHeure = document.getElementById("telephone");
const codebe = document.getElementById("code");
const heurebas = document.getElementById("sous-body");
clickHeure.onclick = function () {
  codebe.style.display = "block";
  heurebas.style.display = "none";
};

const heurekely = document.getElementById("heurekely");
const minute = document.getElementById("min");

function update() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  if (h > 23) {
    h--;
  }
  heurekely.innerText = h;
  minute.innerText = m;
  setTimeout(() => {
    update();
  }, 1000);
}

update();

const heurBas = document.getElementById("heuriha");
const minBas = document.getElementById("mineK");
function update1() {
  let he = new Date().getHours();
  let mi = new Date().getMinutes();
  if (he > 23) {
    he--;
  }
  heurBas.innerText = he;
  minBas.innerText = mi;
  setTimeout(() => {
    update1();
  }, 1000);
}

update1();
