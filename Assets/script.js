// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Date/Day Display
var todaysDate = dayjs().format('DD/MM/YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
  //Click Listener for save button
  $(".saveBtn").on("click", function(){

      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      // Saves input text in local storage
      localStorage.setItem(time,text);
  })

  function timeTracker() {
    //get current hour number
      var timenow = dayjs().hour();

    // loop over time blocks and sets classes
      $(".time-block").each(function () {
          var blockTime = parseInt($(this).attr("id").split("hour")[1]);
          console.log(blockTime)
        // Removes and adds classes based on current time
          if (blockTime < timenow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
          }
          else {
          $(this).addClass("future");
          $(this).removeClass("present");
          $(this).removeClass("past");
          }
    })
  }

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11.description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));

  timeTracker();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});