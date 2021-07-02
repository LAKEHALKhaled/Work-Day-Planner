






$('.saveBtn').on("click",function() {
    var text = $(this).siblings('.description').val()
    var time = $(this).siblings('.hour').text()
    var textItem = JSON.parse(localStorage.getItem("textItem"))  || []
    localStorage.setItem("hour-1",JSON.stringify(textItem))
    var note = {text,time}
    var notes = JSON.parse(localStorage.getItem("notes"))  || []
    notes.push(note)
     localStorage.setItem("notes",JSON.stringify(notes))
     
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





// console.log($("#hour-12"));
//  function dispayData(){
    
    console.log(notes);
    for(let i=0;i<9;i++){
       
    var notes = JSON.parse(localStorage.getItem("notes")) || []
        //  console.log(notes[i]);
        
        // console.log(hourId);
        
        
    }
    var hour = "hour-"
    var hourId = hour.concat(9) 
    var myId = $("#" + hourId)
        
    console.log(myId);
    myId.children().eq(1).val(localStorage.getItem("textItem"));
//         console.log(myId);
//          var note = notes[i].text
//          console.log(note);
//         //  console.log(notes[i].text );
//         //  console.log(note);
//     //      console.log(note);
//     // //     console.log(notes);
//     // //    .val(notes[0][0]) 
    
//     console.log();
//     if(myId === "hour-9" ){
//         // $("#"+myId).children(".description").val(note) = notes[i].text
//         console.log(myId[i]);
//         console.log("hello")
//     }
    
//   }
//  }
// dispayData()
  