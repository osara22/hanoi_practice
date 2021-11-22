let left = [];
let center = [];
let right = [];
let count = 1;
let size = 5;

function run() {
  for(var i = 1; i <= size; i++){
    left.push(i);
  }
  console.log("1: left=" + left + " center=" + center + " right=" + right);
  hanoi(size, left, center, right);
}

const hanoi = (size, from, work, target) => {
  if(size < 1) return;
  hanoi(size-1, from, target, work);
  // console.log("円盤の大きさ" + size + "を" + from + "から" + work + "に動かします");
  from.shift();
  work.unshift(size);
  count++;
  console.log(count + ": left=" + left + " center=" + center + " right=" + right);
  hanoi(size-1, target, work, from);
}