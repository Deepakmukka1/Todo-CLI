#!/usr/bin/env node
const { transcode } = require('buffer');
var fs = require('fs');
//const inquirer  = require('./bin/inquirer');
if(process.argv[2]==="add")
 {
    fs.appendFile('todo.txt', `${process.argv[3]+'\n'}`, function (err) {
        if (err) throw err;
        console.log('Saved to file');
      }); 
 }
 if(process.argv[2]==="ls")
 {
     fs.readFile('todo.txt','utf-8',function(err,data){
         if(err) throw err;
         arr=data.split("\n")
         arr.forEach(element => {
             console.log(element)
         });

     })
 }
 if(process.argv.length<=2)
 {
     console.log("Enter ls for list\n")
 }
 if(process.argv[2]=="del")
 {
    fs.readFile('todo.txt','utf-8',function(err,data){
        if(err) throw err;
        arr=data.split("\n")
        arr.splice(process.argv[3]-1,1)
        fs.writeFile('todo.txt',arr.join("\n"), function(err){
           if(err) throw err
           console.log(arr.length)
        })
    })
 }
