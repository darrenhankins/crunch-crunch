var arr = [[1,2,3],[4,5,6],[7,8,9]];

// [1,2,3]
// [4,5,6]
// [7,8,9]
//
// [7,4,1]
// [8,5,2]
// [9,6,3]
//
// [7,1,4]
// [8,2,5]
// [9,3,6]

var newArr = [];
var newArr2 = [];
var newArr3 = [];
// console.log(arr[0].length);

for(var i=0; i<arr.length; i++){
  var num = arr[i][0];
  newArr.push(num);

}
  newArr.reverse();
for(var i=0; i<arr.length; i++){
  var num = arr[i][1];
  newArr2.push(num);
}
newArr2.reverse();

for(var i=0; i<arr.length; i++){
  var num = arr[i][2];
  newArr3.push(num);
}
newArr3.reverse();
console.log(newArr);
console.log(newArr2);
console.log(newArr3);
