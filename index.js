function hasTargetSum(array, target) {
  const viewedNo = new Set();
  for (const no of array) {
    const same = target - no;

    if (viewedNo.has(same)) return true;

    viewedNo.add(no);
  }
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;
