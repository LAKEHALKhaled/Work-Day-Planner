






$('.saveBtn').on("click",function() {
    var text = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
    // notes.push(note)
    //  localStorage.setItem("notes",JSON.stringify(notes))
     
})


// timer today
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






    
    
    for(let i=9;i<18;i++){

    var hour = "hour-"
    var hourId = hour.concat(i) 
    var myId = $("#" + hourId)
        
    console.log(myId);
    myId.children().eq(1).val(localStorage.getItem("hour-"+i));
    }
    

  