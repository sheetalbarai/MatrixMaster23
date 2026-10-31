const fs = require('fs');

//reading files
// readFile is Async when the file is read(action is completed) it will execute callback
// if any statement after readfile ..in this case 'last line' is printed earlier and after that file
//content is displayed.
//File context is returned in BYTE type code, to convert it back to string ..use toString()
//fs.readFile(<path>, callback--executed after file is read)
fs.readFile('./docs/text1.txt',(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

//writing files
//overwrite same file or if file doesnt exist create a new one 
//fs.writeFile(<path>, <text to be written>, <callback> -- is called when action is completed)
fs.writeFile('./docs/text2.txt','Hello text2', ()=>{ 
    console.log('file 2 is written');
});

//directories, async task
//fs.mkdir( <path>,<callback--err>)
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('assets folder created');
    })
} else{
//deleting folder
//fs.rmdir( <path>,<callback--err>)
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');

    })
}

///delet files

if(fs.existsSync('./docs/text2.txt')){
    fs.unlink('./docs/text2.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('File deleted');

    })
}