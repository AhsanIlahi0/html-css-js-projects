let turn = 0;
const draw = (id) => {
  let pos = document.getElementById(id);
  let win = document.getElementById("win");
  let p1 = document.getElementById("turn1");
  let p2 = document.getElementById("turn2");
  if (pos.textContent === "" && win.textContent == "") {
    if (turn == 0) {
      p1.textContent = "player 1's turn";
      p1.style.visibility = "visible";
    }
    if (turn % 2 === 0) {
      p1.style.visibility = "hidden";
      p2.style.visibility = "visible";
      p2.textContent = "player 2's turn";
      pos.textContent = "X";
      turn++;
    } else {
      p2.style.visibility = "hidden";
      p1.style.visibility = "visible";
      p1.textContent = "player 1's turn";
      pos.textContent = "O";
      turn++;
    }
  }
  let x = wincondition();

  let restart = document.getElementById("restart");
  if (x === 1) {
    restart.style.visibility = "visible";
    p1.style.visibility = "hidden";
    p2.style.visibility = "hidden";
    win.textContent = "winner is player 1";
  } else if (x === 2) {
    p2.style.visibility = "hidden";
    p1.style.visibility = "hidden";
    p2.style.visibility = "hidden";
    p1.style.visibility = "hidden";
    restart.style.visibility = "visible";
    win.textContent = "winner is player 2";
  } else if (turn == 9) {
    p2.style.visibility = "hidden";
    p1.style.visibility = "hidden";
    restart.style.visibility = "visible";
    win.textContent = "Game Draw";
  }
};
const wincondition = () => {
  let a = document.getElementById("a").textContent;
  let b = document.getElementById("b").textContent;
  let c = document.getElementById("c").textContent;
  let d = document.getElementById("d").textContent;
  let e = document.getElementById("e").textContent;
  let f = document.getElementById("f").textContent;
  let g = document.getElementById("g").textContent;
  let h = document.getElementById("h").textContent;
  let i = document.getElementById("i").textContent;
  if (a === "X" && b === "X" && c === "X") {
    return 1;
  } else if (a === "O" && b === "O" && c === "O") {
    return 2;
  } else if (a === "X" && e === "X" && i === "X") {
    return 1;
  } else if (a === "O" && e === "O" && i === "O") {
    return 2;
  } else if (a === "X" && d === "X" && g === "X") {
    return 1;
  } else if (a === "O" && d === "O" && g === "O") {
    return 2;
  } else if (b === "X" && e === "X" && h === "X") {
    return 1;
  } else if (b === "O" && e === "O" && h === "O") {
    return 2;
  } else if (c === "X" && f === "X" && i === "X") {
    return 1;
  } else if (c === "O" && f === "O" && i === "O") {
    return 2;
  } else if (c === "X" && e === "X" && g === "X") {
    return 1;
  } else if (c === "O" && e === "O" && g === "O") {
    return 2;
  } else if (d === "X" && e === "X" && f === "X") {
    return 1;
  } else if (d === "O" && e === "O" && f === "O") {
    return 2;
  } else if (g === "X" && h === "X" && i === "X") {
    return 1;
  } else if (g === "O" && h === "O" && i === "O") {
    return 2;
  }
  return 0;
};
restart = () => {
(document.getElementById("a").textContent = "");
(document.getElementById("b").textContent = "");
(document.getElementById("c").textContent = "");
(document.getElementById("d").textContent = "");
(document.getElementById("e").textContent = "");
(document.getElementById("f").textContent = "");
(document.getElementById("g").textContent = "");
(document.getElementById("h").textContent = "");
(document.getElementById("i").textContent = "");
    let Restart = document.getElementById("restart");
    Restart.style.visibility = "hidden";
    turn = 0;
    let win = document.getElementById("win");
    win.textContent = "";
    document.getElementById("turn1").style.visibility="visible";

};
