function shout(message) {
  return message.toUpperCase();
}

function whisper(message) {
  return message.toLowerCase();
}

function logShout(message) {
  console.log(message.toUpperCase());
}

function logWhisper(message) {
  console.log(message.toLowerCase());
}

function sayHiToGrandma(message) {
  
  var uppercase = message.toUpperCase;
  var lowercase = message.toLowerCase;
  
  if (message === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (message === uppercase) {
    return "I can't hear you!";
  } else if (message === lowercase) {
    return "YES INDEED!";
  }
}

