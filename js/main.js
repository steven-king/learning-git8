// testing
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();

console.log(date);
const TimeFormat = new Intl.DateTimeFormat('en', { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
console.log(TimeFormat);
const [{ value: weekday },,{ value: hour },,{ value: minute },,{ value: second },,{ value: hour12 }] = TimeFormat.formatToParts(date);
console.log(TimeFormat);

var date0 = `Today is ${weekday}.<br />Current Time: ${hour}:${minute}:${second} ${hour12}`;
console.log(date0);
document.getElementById("answer1").innerHTML = date0;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/

const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date);


var date1 = `${month}-${day}-${year}<br />${month}/${day}/${year}<br />${day}/${month}/${year}`;
// var date2 = `${month}/${day}/${year}`;
// var date3 = `${day}/${month}/${year}`;
console.log(`${month}-${day}-${year}`);

document.getElementById("answer2").innerHTML = date1;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/


function myFunction() {
var text = document.documentElement.innerHTML;
//document.body.appendChild(text);
document.getElementById('answer3').innerText= text;
}


//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//
    $(document).ready(function() { 'use strict';
      console.log('main.js loaded');


    paper.install(window);
    paper.setup(document.getElementById('main-canvas'));

    var tool = new Tool();


    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';

    var text = new PointText(200, 200); text.justification = 'center'; text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20); c.fillColor = 'green';
    };

    paper.view.draw();
     });





// adapt from Learning Javascript Ethan Brown Chapter 1
