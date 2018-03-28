var board = document.getElementsByClassName('boards')


function setup() {
  for (let i = 0; i < 28; i++) {
    let x = Math.floor((Math.random() * 135) - 28);
    let y = Math.floor((Math.random() * 135) - 28);

    board[0].innerHTML += `<img class="butterfly" src="img/datatype-integer.png" alt="" width="100%" height="100%" style="left:${x}%; top:${y}%;">`
  }

}



setup()