// let x = 25;
// let y = 53;
// let z = 56;
// let area;

// if (x>0 && y>0 && z>0 && x+y>z && y+z>x && x+z>y){
//     let s = (x+y+z)/2;
//     area =Math.sqrt(s*(s-x)*(s-y)*(s-z));
// }else{
//     area=0;
// }
// console.log("Area of the triangle using if-else:",parseFloat(area.toFixed(2)));


// let x = 25;
// let y = 53;
// let z = 56;
// let area = 0;
// let validTriangle = false;

// if (x>0 && y>0 && z>0 && x+y>z && y+z>x && x+z>y){
//     validTriangle = true;
//     let s = (x+y+z)/2;
//     for (let i=0;i<1;i++){
//         area = Math.sqrt(s*(s-x)*(s-y)*(s-z));
//     };
// };
// console.log("Area of the triangle:",parseFloat(area.toFixed(2)));


// let x = 25;
// let y = 53;
// let z = 56;
// let area = 0;

// let validTriangle = x>0 && y>0 && z>0 && x+y>z && y+z>x && x+z>y;
// if (validTriangle){
//     let s = (x+y+z)/2;
//     while(validTriangle){
//         area = Math.sqrt(s*(s-x)*(s-y)*(s-z));
//         validTriangle = false;
//     }
// }
// console.log("Area of the triangle using while loop:",parseFloat(area.toFixed(2)));