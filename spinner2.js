// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);
const arr = ['\r|   ','\r/   ','\r-   ','\r\\   '];
let n = 100;
for (let val of arr){
setTimeout(() => {
  process.stdout.write(val);
},n);
n += 100;
}