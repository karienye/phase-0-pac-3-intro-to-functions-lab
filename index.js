function shout(string) {
    "Hello!".toUpperCase();
    return string;
  }
  function shout(string) {
  return string.toUpperCase();

}
function whisper(string) {
    "Hello!".toLowerCase();
    return string;
  }
  function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
   
    console.log(string.toUpperCase());
}
function logWhisper(string) {
   
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!"
    }
  
    if (string.toUpperCase() === string) {
      return "YES INDEED!"
    }
  
    if (string === "Let's have dinner together!") {
      return "I would love to!"
    }
  }

/*
{
   console.log(('hello').toEqual("I can't hear you!"));

    console.log(('HELLO').toEqual("YES INDEED!"));
    
    console.log(("Let's have dinner together!").toEqual("I would love to!"));
   
  }*/

  /*
 function logShout(string) {
   
   console.log(spy, ('HELLO'));


  } 
  
  */