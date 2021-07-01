var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));





$('.saveBtn').on("click",function() {
    var text = $(this).siblings('.description').val()
    var time = $(this).siblings('.hour').text()
    console.log(text);
    console.log(time);
    var note = {text,time}
    var notes = JSON.parse(localStorage.getItem("notes"))  || []
    notes.push(note)
     localStorage.setItem("notes",JSON.stringify(notes))
    console.log(notes);
     
})





//time now 
var now = moment()
var timeNow = now.hour()




 
//comparing the global time to display time and set up the colors

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


 function dispayData(){
    var hour = "hour-"
    var notes = JSON.parse(localStorage.getItem("notes")) || []
    for(i=9;i<18;i++){
        var hourId = hour.concat(i) 
        var myId = $("#" + hourId)
        var note = notes[i]
        console.log(note);
        console.log(notes);
        $("myId .description").val(localStorage.getItem("note"));
    //    myId.children(".description").val(note.text) 
    }
 }
dispayData()
//   $("myId .description").val(localStorage.getItem("note"));