//define the data going to local storage 
$('.saveBtn').on("click",function() {
    var text = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id');
    //time need to be a variable because we need it to identify every text area
    localStorage.setItem(time, text);
})

// time today
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

//time now 
var now = moment()
var timeNow = now.hour()

//comparing the global time to display time and set up the colors
function timeColor(){
 for(i=9;i<18;i++){
     var hour = "hour-"
     var hourId = hour.concat(i)
    //  var numberId = parseInt(hourId.slice(5,7)) 
    var myId = $("#" + hourId)
    
    if( i < timeNow ){
        myId.children(".description").addClass("past")
    }
    else if (i == timeNow){
        myId.children(".description").addClass("present")
    }
    else {
        myId.children(".description").addClass("future")
    }
 }
}
timeColor()

    //display the data back in to the screen 
    for(let i=9;i<18;i++){
    
    var hour = "hour-"
    var hourId = hour.concat(i) 
    var myId = $("#" + hourId)
    myId.children().eq(1).val(localStorage.getItem("hour-"+i));
    }
    

  