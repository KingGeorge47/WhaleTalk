// create variable input
let input = 'turpentine and turtles'
// create variable vowels
const vowels = ['a', 'e', 'i', 'o', 'u']
// create variable resultArray = empty array
const resultArray = []
// create loop for input = i
for (let i = 0; i < input.length; i++) {
// create loop for vowels = j
for (let j = 0; j < vowels.length; j++) {
// create nested loop
 if (input[i] === vowels[j]) {
// test loop
console.log(input[i]) 
// test input position
console.log('input positions are ' + i)
// test vowels position
console.log('vowels positiions are ' + j)
// create if statement and append(add or push) e into result array  
  if (input[i] === 'e') {
    resultArray.push('ee')
} 
// // create an else if statement and append(add or push) u into result array  
  else if (input[i] === 'u') {
    resultArray.push('uu')
} else {
  resultArray.push(input[i])
}
}
}
}
// test result array
console.log(resultArray)

// all tests will print 4 differnt results.