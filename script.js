//-------------------------------------------------------- 1. isArray --------------------------------------------------------

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const isArray = Array.isArray(arr);
// console.log(isArray);

//-------------------------------------------------------- 2. clone Array --------------------------------------------------------

// const arr = [2,4,6,8,10]
// const newArray = [...arr]
// console.log(newArray);

//-------------------------------------------------------- 3. add '-' --------------------------------------------------------

// const array = [0, 2, 5, 4, 6, 8, 9];
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   newArray.push(array[i]);
//   if (array[i] % 2 === 0) {
//     newArray.push("-");
//   }
// }
// const myString = newArray.join("");
// console.log(myString);

//-------------------------------------------------------- 5. arr union --------------------------------------------------------

// function union(arr1, arr2) {
//    const combinedArr = arr1.concat(arr2).sort((a, b) => a - b);

//    const filteredArr = combinedArr.filter((item, index)=> {
//     return combinedArr.indexOf(item) === index;
//    })
//   return filteredArr;
 
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));

//-------------------------------------------------------- 6. remove spesific element --------------------------------------------------------

// function remove_array_element(arr, element) {
//   return arr.filter(item => item !== element);
// }
// console.log(remove_array_element([2, 5, 9, 6], 5));

//-------------------------------------------------------- 7. remove duplicate --------------------------------------------------------

// function removeDuplicates(arr) {
//   const uniqueArray = [];
  
//   arr.forEach(item => {
//     if (!uniqueArray.includes(item)) {
//       uniqueArray.push(item);
//     }
//   });
  
//   return uniqueArray;
// }

// console.log(removeDuplicates([1, 2, 3, 4, 2, 1, 5, 6, 3]));

//-------------------------------------------------------- 8. return true false --------------------------------------------------------

function isTargetNumberPresent(arr, target) {
  return arr.includes(target);
}

console.log(isTargetNumberPresent([1, 2, 3, 4, 5], 3));
console.log(isTargetNumberPresent([1, 2, 3, 4, 5], 6));

//-------------------------------------------------------- 9. return common elements --------------------------------------------------------

// let arr1 = [1,7,4,12,15]
// let arr2 = [8,3,4,5,12]


// let onlycommons = [...arr1,...arr2]

// let finalarray = arr1.filter((a)=>arr2.includes(a));

// console.log(finalarray.sort((a,b)=>a-b).join('-'))