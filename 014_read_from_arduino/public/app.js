var socket = io('/my_namespace');     //change this in your own code!
var message_state = 0;

function setup(){
  createCanvas(400, 400);
  background(0);
}

function draw(){

  background(0);
  textSize(20);
  fill(255, 102, 153);

  //a very simple state machine
  if(message_state==0){
    text("No Signal", 100, 100);
  }
  else {
    text("Triggered", 100, 100);
  }
}

socket.on('trigger_1', function(){
  console.log("trigger 1 listener fired");
  message_state=1;
  //setup retrigger timer
  setTimeout(resetMonitor,2000);
})

function resetMonitor(){
  message_state=0;
}


// socket.on('trigger_2', function(){
//   console.log("trigger 2 listener fired");
//   message_state=2;
// })
