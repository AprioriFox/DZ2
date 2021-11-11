let board = prompt("Размер шахмотной доски")

let board_size = Number(board);

let white = "#";

let line = '';

for (let i = 0; i < board_size; i++){

  for (let j = 0; j < board_size; j++){

    if (i%2 === 0){

      if (j%2 === 0){
        line = line + white;
      }
      else{
        line = line + ' ';
      }
    }
    else if (j%2 === 1){
        line = line + white;
      }
    else{
        line = line + ' ';
      }
  }
  line = line + "\n";
}
console.log(line);
