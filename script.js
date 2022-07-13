// select the elements on the page to interact with

let button = document.querySelector("#submit");
let answer = document.querySelector("#answer");
let answerText= '';

// add a click event to the button 
//element.addEventListener("new_event", function() {} );
button.addEventListener("click", function() {
  console.log("clicked");
  const randomNumber = Math.floor(Math.random() * 8);
  let question = document.querySelector("#question");

switch (randomNumber) {
  case 0:
    answerText = 'It is certain';
    break;
  case 1: 
    answerText = 'It is decidedly so';
    break;
  case 2:
    answerText = 'Reply hazy try again';
    break;
  case 3:
    answerText = 'Cannot predict now';
    break;
  case 4:
    answerText = 'Do not count on it';
    break;
  case 5: 
    answerText = 'My sources say no';
    break;
  case 6:
    answerText = 'Outlook not so good';
    break;
  case 7:
    answerText = 'Signs point to yes';
    break;
  default:

};
// currently does the alert. will continue to run the answerText. will also complete this if there is text in the input field
// question === '';
// console.log('Try again');
// alert('Error occured. Please type a question');

answer.innerHTML = answerText;
console.log(answerText);
});


