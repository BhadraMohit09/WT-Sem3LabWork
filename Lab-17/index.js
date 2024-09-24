//Path Modules
// const path = require('path');

// const dataA = path.basename('C:\\temp\\myfile.html');
// console.log(dataA);

// const dataB = path.dirname('C:\\temp\\myfile.html');
// console.log(dataB);

// const dataC = path.extname('fileA.html');
// console.log(dataC);

// const dataD = path.isAbsolute('C:\\temp\\myfile.html');
// console.log(dataD);

// const RelativeData = path.relative('FolderA/FolderB/FileA.html','FolderA/FileA.html');
// console.log(RelativeData);

// const dataE = path.parse('C://folderA/folderB/FileA.html');
// console.log(dataE);

// const pathObject = {
//     root: 'C:/',
//     dir: 'C://FolderA',
//     basename: 'FileA.html',
//     ext: '.html',
//     name: 'FileA'
// }
// const formattedPath = path.format(pathObject);
// console.log(formattedPath);

// const dataF = path.join('FolderA','FolderB','FolderC','FileA.js');
// console.log(dataF);

// const dataG = path.normalize('FolderA//FolderB/../FileA.html');
// console.log(dataG);

// const dataH = path.resolve('C:/.../FolderA/...//FolderC//.../FileA.html');
// console.log(dataH);


//File Modules
const fs = require('fs');
// fs.writeFileSync('MyFileA.txt',"Some Data Entered....");

// const ReadData = fs.readFileSync('MyFileA.txt', 'utf-8');
// console.log(ReadData);

// fs.appendFileSync('MyFileA.txt',"Some appended Text");

// fs.renameSync('MyFileA.txt','NewFileA.txt');

// fs.unlinkSync('NewFileA.txt');

// fs.writeFile('MyFileB.txt','Asynchronous File','utf-8', (e)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log("Async File Created");
//     }
// });

// const ReadAsyncData = fs.readFile('MyFileB.txt','utf-8', (e, data)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log("Async File Created " + data);
//     }
// });

// fs.appendFile('MyFileB.txt','Appended Data Async', 'utf-8', (e)=>{
//     if(e){
//         console.log(e);
//     }
//     console.log("Data appended in Async Format");
// });

// fs.rename('MyFileB.txt', 'NewFileB.txt', (e)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log("Rename done...");
//     }
// });

// fs.unlink('NewFileB.txt', (e)=>{
//     if(e){
//         console.log(e);
//     }else{
//         console.log("UnLinked")
//     }
// });