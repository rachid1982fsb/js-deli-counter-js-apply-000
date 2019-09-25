function takeANumber (namesInLine, newPersonName) { 
  
  var nextNumber = namesInLine.length +1 
  namesInLine.push(newPersonName)
  
  return `Welcome, ${newPersonName}. You are number ${nextNumber} in line.`
}
var i=0
function takeANumber2(){
  
  i = i+1
  console.log(`Welcome Yoy are the number ${i}`)
}
takeANumber2()
takeANumber2()

function nowServing(namesInLine) {
  var displayMessage = "Currently serving " + namesInLine[0] +"."
  
  if (namesInLine[0]===undefined){
    displayMessage ="There is nobody waiting to be served!"
    
  }else {
    namesInLine.shift() 
  }
  
  return displayMessage
}



function currentLine(namesInLine) {
  var inLineNamesAsString = "The line is currently: "
  
  if (namesInLine[0] === undefined) {
    inLineNamesAsString = "The line is currently empty."
    
  } else {
    var l=namesInLine.length
    for (var i=0; i<l-1; i++) {
      
       // the list without last person 
      inLineNamesAsString = inLineNamesAsString + `${i+1}. ${namesInLine[i]}, `   
    } 
    
    // the list without comma at the end 
  inLineNamesAsString = inLineNamesAsString + `${l}. ${namesInLine[l-1]}`    
   }
   
return inLineNamesAsString
  
}


/*
line=[]
takeANumber(line,"Rachid")
takeANumber(line,"josh")
console.log(takeANumber(line,"Mike"))
console.log(" ")
console.log(nowServing(line))
console.log(" ")
console.log(currentLine(line))
*/
