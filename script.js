// //  Question 1

document.write( "<h1>" + "Question 1" + "<br>" + "<br>" + "</h1>");
var city = "Karachi";
var userInput = prompt("Enter your city");

 if(city === "Karachi"){
    document.write("Welcome to city of lights"+ "<br>" + "<br>" );
 }

// //   Question 2

 document.write( "<h1>" + "Question 2" + "<br>" + "<br>" + "</h1>");
 
 var gender = prompt("What is your gender?");

 if(gender === "male"){
    document.write("Good Morning Sir");
 }
 if(gender === "female"){
    document.write("Good morning Ma'am");
 }

// //  Question 3

 document.write( "<h1>" + "Question 3" + "<br>" + "<br>" + "</h1>");

  var trafficLight = prompt("Enter traffic signal color");

  if(trafficLight === "Red"){
    document.write("Must Stop");
  }
 if(trafficLight === "Yellow"){
    document.write("Ready to move");
 }
 if(trafficLight === "Green"){
    document.write("Move now");
 }
 
// //  Question 4 

 document.write( "<h1>" + "Question 4" + "<br>" + "<br>" + "</h1>");

 var reaminingFuel = prompt("Enter remaining fuel in liters");

 if(reaminingFuel < 0.25){
    document.write("Please refill  the fuel your car");
 }

//  Question 5

 document.write( "<h1>" + "Question 5" + "<br>" + "<br>" + "</h1>");
  document.write("Alert messages");

//  Q5 (a)


  var a = 4;
  if (++a === 5){
     alert("given condition for variable a is true"); 
    } 

    // Output
    //  Messege displayed


//  Q5 (b)

  var b = 82;
  if (b++ === 83)
    {
     alert("given condition for variable b is true");
  } 

    // Output
    // Message not displyed 
 
 
//   Q5 (c)

  var c = 12;
   if (c++ === 13)
    { alert("condition 1 is true"); 

    } 
    if (c === 13){ 
        alert("condition 2 is true");
     } 
     if (++c < 14){ 
        alert("condition 3 is true");
     } 
     if(c === 14){
         alert("condition 4 is true"); 
  } 

        //    Output
      //  Condition 4 is true 

// Q5 (d)

 var materialCost = 20000;
  var laborCost = 2000; 
  var totalCost = materialCost + laborCost;
   if (totalCost === laborCost + materialCost){

     alert("The cost equals");

     } 

    //  Output
    // Material equals 

//  Q5 (e)
  
  if (true){ 
    alert("True"); 
} if (false){ 
    alert("False");
 } 

    //   Output
    // True 

// Q5(f)

 if("car" < "cat"){
     alert("car is smaller than cat");
     } 

    //  Output 
    // Message displayed
 

//   Question 6 

 document.write( "<h1>" + "Question 6" + "<br>" + "<br>" + "</h1>");

  var totalMarks = +prompt("Enter total marks");
  var obtainedMarks = +prompt("Enter Obtained marks");

  var percentage = (obtainedMarks / totalMarks) *100;

  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Obtained Marks: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage  + "%" + "<br>");

  if(percentage >= 80){
    document.write("Grade: A-One" + "<br>");
    document.write("Remarks: Excellent");
  }
  else if (percentage >= 70){
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good");
  }
  else if (percentage >= 60){
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve");
  }
  else{
    document.write("Grade : Fail" + "<br>");
    document.write("Remarks: Sorry");
  }

//   Question 7

  document.write( "<h1>" + "Question 7" + "<br>" + "<br>" + "</h1>");

  var secretNumber = 4;
  var guessNumber = +prompt("Guess the secret number (1-10)");
  
  if(secretNumber === guessNumber){
    document.write("Bingo!Correct Answer");
  }
  if(guessNumber + 1 === secretNumber){
    document.write("Close Enough to the correct Answer");
  }

 //   Question 8

  document.write( "<h1>" + "Question 8" + "<br>" + "<br>" + "</h1>");
 
  var num = prompt("Enter a number");

  if(num % 3 === 0){
    document.write("Number is divisible by 3");
  }
  else{
    document.write("number is not divisible by 3");
  }

//    Question 9

 document.write( "<h1>" + "Question 9" + "<br>" + "<br>" + "</h1>");

 var inputNumber = prompt("Enter any number");

 if(inputNumber % 2 === 0){
    document.write("Given number is an odd number");
 }
 if(inputNumber % 2  !== 0){
    document.write("Given number is an even number");
 }

//   Question 10

 document.write( "<h1>" + "Question 10" + "<br>" + "<br>" + "</h1>");

  var temperature = prompt("Enter Temperature");

  if(temperature > 40){
    document.write("It's too hot outside");
  }
  if(temperature > 30){
    document.write("The Weather today is Normal");
  }
  if(temperature > 20){
    document.write("Today's weather is cool");
  }
  if(temperature > 10){
    document.write("OMG! Today's weather is cool");
  }

//   Question 11

 document.write( "<h1>" + "Question 10" + "<br>" + "<br>" + "</h1>");

 