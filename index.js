function hasTargetSum(array, target) {
  // Write your algorithm here
} function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    for (let a = i + 1; a < array.length; a++) {
      let num = target - array[i]
      // n * n steps (nested loop!)
      if (num === array[a]) {
        return true

      }

    }


  }
  return false;
  // 1 step
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 8, 12, 4, 11, 7], 13));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 16, 14, 6, 90], 30));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8, 2, 5], 12));
}

module.exports = hasTargetSum;
