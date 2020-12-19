#!/usr/bin/env node
var fs = require("fs");
const todoFilePath = './todo.txt'
const fd = fs.openSync(todoFilePath, 'a+')
if (process.argv[2] === "add") {
  if(!process.argv[3])
  {
    console.log("Error: Missing todo string. Nothing added!")
    return;
  }
  fs.appendFile("todo.txt", `${process.argv[3] + "\n"}`, function (err) {
    if (err) throw err;
    console.log(`Added todo: "${process.argv[3]}"`);
  });
}
if (process.argv[2] === "ls") {

  fs.readFile("todo.txt", "utf-8", function (err, data) {
    if (err) throw err;
    arr = data.split("\n");
    arr=arr.filter((value)=>{
      return value!==""
    })
    if(arr.length===0)
    {
     console.log(`There are no pending todos!`);
     return; 
    }
    
    for(var i=arr.length-1;i>=0;i--)
    {
      console.log(`[${i+1}] ${arr[i]}`)
    }
  });
}
if (process.argv.length <= 2) {
  let help = `Usage :-
$ ./todo add "todo item"  # Add a new todo
$ ./todo ls               # Show remaining todos
$ ./todo del NUMBER       # Delete a todo
$ ./todo done NUMBER      # Complete a todo
$ ./todo help             # Show usage
$ ./todo report           # Statistics`;
  console.log(help);
}
if (process.argv[2] == "del") {
  const argumentValue = process.argv[3];

  fs.readFile("todo.txt", "utf-8", function (err, data) {
    if (err) throw err;
    if(process.argv.length<=3)
    { 
      console.log("Error: Missing NUMBER for deleting todo.")
        return
    }
    if(argumentValue==0) 
    {
      console.log("Error: todo #0 does not exist. Nothing deleted.")
      return;
    }
    arr = data.split("\n");
    arr=arr.filter((value)=>{
      return value!==""
    })
    if (argumentValue > arr.length) {
      console.log(
        `Error: todo #${argumentValue} does not exist. Nothing deleted.`
      );
      return;
    }
    else
    {
    arr.splice(argumentValue-1, 1);
    fs.writeFile("todo.txt", arr.join("\n"), function (err) {
      if (err) throw err;
      console.log(`Deleted todo #${argumentValue}`);
    });
}
  });
}
const getDate=(arg1)=>{

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + arg1 + mm + arg1 + dd;
return today;

}

if(process.argv[2]==="done")
{
     const itemnumber=process.argv[3];
     fs.readFile("todo.txt", "utf-8", function (err, data) {
      if (err) throw err;
      if (!itemnumber) console.log("Error: Missing NUMBER for marking todo as done.")
      if(itemnumber==0) 
    {
      console.log("Error: todo #0 does not exist. Nothing deleted.")
      return;
    }
      arr = data.split("\n");
      const item=arr[itemnumber-1];
      arr.splice(itemnumber - 1, 1);
     fs.writeFile("todo.txt", arr.join("\n"), function (err) {
      if (err) throw err;
    });
    fs.appendFile("done.txt",`x ${getDate('-')} ${item} \n`, function (err) {
      if (err) throw err;
      console.log(`Marked todo #${itemnumber} as done.`)
    });

     })

}
if (process.argv[2] === "help") {
  let help = `Usage :-
$ ./todo add "todo item"  # Add a new todo
$ ./todo ls               # Show remaining todos
$ ./todo del NUMBER       # Delete a todo
$ ./todo done NUMBER      # Complete a todo
$ ./todo help             # Show usage
$ ./todo report           # Statistics`;
  console.log(help);
}
if (process.argv[2] === "report") {

  fs.readFile("todo.txt", "utf-8", function (err, data1) {
    if (err) throw err;
    arr1 = data1.split("\n");
    fs.readFile("done.txt", "utf-8", function (err, data2) {
      if (err) throw err;
      arr2 = data2.split("\n");
      console.log(`${getDate('-')} Pending : ${arr1.length-1} Completed : ${arr2.length-1}`)//get date 
      //is taking an argument because it was mentioned in the Readme as dd/mm/yyyy
      // but in the test it is taking dd-mm-yyyy so it is reusable based on requirement
      
    })
    
  })
}