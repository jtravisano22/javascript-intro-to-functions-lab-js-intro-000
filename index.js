function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var cantHearYou = "I can't hear you!";
  var canHearYou = "YES INDEED!";
  var loveAnswer = "I love you, too.";

  if (string.toLowerCase(string) === string) {
  return cantHearYou;
}

  else if (string.toUpperCase(string) === string) {
    return canHearYou;
  }
  else if ("I love you, Grandma." === string){
  return loveAnswer;
}
}
