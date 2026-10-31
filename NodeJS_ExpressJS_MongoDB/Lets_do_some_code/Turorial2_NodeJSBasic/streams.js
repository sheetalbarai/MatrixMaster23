const fs = require('fs');

//read stream 
//read a file in small chunks and send those like a stream of water
//fs.createReadStream(<file path to read>, {encoding: 'utf8'} -- this elimiates the tostring() when data is read)
//so instead of BYTE type data you get original data

const readStream = fs.createReadStream('./docs/text3.txt', {encoding: 'utf8'});
//write stream
const writeStream = fs.createWriteStream('./docs/text4.txt');

//.on is event listener ..on chunk of type data
// readStream.on('data', (chunk) =>{
//     console.log('-----New Chunk-----');
//     console.log(chunk);
//     writeStream.write('\nNEWWWWW\n');
//     writeStream.write(chunk);
// });

//Piping  (like actual PIPE)
//read file => Pipe to =>writeStream 
readStream.pipe(writeStream); //equivalant to code from lines 13 to 18
