const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	   let ans = [];
    let temp = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if adding the current element exceeds the limit
        if (sum + arr[i] <= n) {
            // If it does not exceed, add to temp and update sum
            temp.push(arr[i]);
            sum += arr[i];
        } else {
            // If it exceeds or equals, push the current temp to ans
            ans.push(temp);
            // Start a new subarray with the current element
            temp = [arr[i]];
            sum = arr[i]; // Reset sum to the current element
        }
    }

    // If there are remaining elements in temp, add them to ans
    if (temp.length > 0) {
        ans.push(temp);
    }

    return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
