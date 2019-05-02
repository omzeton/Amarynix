
function getMostFequentK (arr, k) {
    let output = [];
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] == arr[i + 1] ) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(getMostFequentK([1,1,1,2,2,3], 2));