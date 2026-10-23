const searchBtn = document.getElementById('searchBtn'); 
const displayResult = document.getElementById('displayResult');
const apiKEY = 'ci5OSbLdRxg2uRPS6KfnnqWQibJCsmoY';

// Attach an event listener to the button
// invoke the function after click
searchBtn.addEventListener("click", fetchDataFromAPI);

function fetchDataFromAPI() {
       
    let api = new XMLHttpRequest(); // Create a new XMLHttpRequest object
   
    const searchID = document.getElementById('searchID').value; // get the type of GIF to be searched
  
    let apiAddr = `http://api.giphy.com/v1/gifs/search?q=${searchID}&api_key=${apiKEY}&limit=8`; //format the API address to get 
    
    api.open('GET', apiAddr, true);  // Configure the request

    // Set up an event handler to handle the response
    api.onreadystatechange = function() {
        if (api.readyState === 4 && api.status === 200) {  //response check state and status if its okay
            const returnData = JSON.parse(api.response); //convert the response string into object format with JSON parse
            
            displayResult.innerHTML = ""; //clear previous display results
  
            for(let i=0;i<returnData.data.length;i++){ //loop through the object array elements
               
                let gif = document.createElement("img");  //create a img element
                gif.src = returnData.data[i].images.fixed_height.url; // assign the fixed_height url (there are original size also available)
                gif.alt = "GIF";  
                //console.log(gif.src); //written just to check the source link if working
                displayResult.appendChild(gif); //append the images to the html DOM 
            }
        }
    };
    // Send the request
    api.send();
}