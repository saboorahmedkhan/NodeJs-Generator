// Generator Function
// function* gen(){
//    let num = 1
//    while(true){
//     yield num++
//    }
// }
// let autoGen = gen()
// console.log(autoGen.next())
// console.log(autoGen.next())
// console.log(autoGen.next())
// console.log(autoGen.next())
function* gen() {
    let num = 1;
    while (num !== 6) {
        yield num++;
    }
}
let autoGen = gen();
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
console.log(autoGen.next());
export {};
