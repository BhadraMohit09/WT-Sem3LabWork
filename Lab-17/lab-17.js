// 1. Demonstrate the use of Node Package Manage (NPM). (A)

/*
Initialize the project
- npm init -y

open https://www.npmjs.com/
    search for required package
    you can look at the weekly dowmloads, license, size etc
    you can copy the install code and paste it on your terminal
    there are various
 
npm install packageName@version (for downloading specific version)

npm uninstall packageName (for uninstalling package)
npm update packageName (for updating package)
*/

// 2. Demonstrate “path” core module in NodeJS. (A)

const path = require('node:path');

path.basename('C:\\temp\\myfile.html');
// Returns: 'myfile.html'

path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf' 

path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false 

path.join('Users', 'Refsnes', 'demo_path.js');
//Returns: 'Users\Refsnes\demo_path.js'

path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// Returns: 'C:\\temp\\foo\\' 

path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// Returns: '..\\..\\impl\\bbb' 

path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'



// 3. Demonstrate “fs” core module in NodeJS. (A)

const fs = require('fs');

fs.exists(' /path/to/file' , (exists) => {
    console. log(exists ? 'Found' : 'Not Found!');
})


const data = fs.readFileSync('darshan .txt');
console.log(data.toString()) //Synchronous (blocking)

fs.readFile('demofile1.html', function(err, data) {
    console.log(data.toString())
  }); //Asynchronous (non-blocking)

fs.unlink( 'darshan .txt', (err) => {
  if(err){ throw err }
  console.log("File Deleted");
})

fs.rename('darshan .txt', 'darshan uni.txt', (err) => {
    if(err){ throw err }
    console.log("Renamed");
})

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});



// 4. Demonstrate “child_process” core module in NodeJS (A)

const child_process = require('child_process');
child_process.exec('dir', ((err, stdout, stdin) => {
    console. log(stdout)}
))

// 5. Explore minimum 3 other core module from the documentation of NodeJS (B)
// 6. Explore minimum 8 other core module from the documentation of NodeJS (C )

