console.log("durp");


let pageInfo; // this is where we put the stuff from pages.json (eventually)

/*
    We need to fetch the .json file
    1. start fectching (we get a promise "IOU" back)
    2. then, we get the file and we'll need to get the data from it
    3. then, we can actually use it :)
*/

fetch("../js/pages.json") // go find the file
//    The raw file   turn it into json
.then( response => response.json() ) // convert the raw file to something readable
.then( data => console.log(data.pages[0].characters[1]) ); // show the data in the console
