/*Tuesday : Selection Sort
how does it work: This is very simple. Go through the array, 
find the index of the lowest element swap the lowest element with the first element. 
Hence first element is the lowest element in the array.

Now go through the rest of the array (excluding the first element) 
find the index of the lowest and swap it with the second element.

That is how it continues to select (find out) the lowest element of the array and 
put it on the left until it hits the last element.*/
//--------------------------------------------------------------------------------------------
///create a function that takes an array as an argument
// 1st loop to go through array multiple times as length of array 
// write another loop that will go through rest of the elements after index of 1st loop
// inner loop will detemine Index of element which is lowest.
// if the minIndex is not same as assigned earlier which is index from outer loop.
// swap the values 
// This will ensure at the end of 1st iteration ..1st element of the array is lowest.
// 2nd iteration will start from the 2nd element of the array and so on...
// return the sorted array 

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i; 
        for(let j = i+1 ; j <arr.length; j++){
            if(arr[minIndex] > arr[j]){
               minIndex = j;
            }  
        }    
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];   // swapping through destructuring
        } 
    }
    return arr;
}

console.log(selectionSort([100, 20, 32, 45, 12, 3]));

console.log(selectionSort([30, 12, 3, 4, 17, 200, 89, 78]));
