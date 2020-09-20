const typedName = document.querySelector(".type-name");
const typedSubtitle = document.querySelector(".type-subtitle");

const nameString = ["Jigar Patel"];
const typingDelay = 200; // milliseconds
let charIndex = 0;

function typeName() {
  if (charIndex < nameString[0].length) {
    typedName.textContent += nameString[0].charAt(charIndex);
    charIndex++;
    setTimeout(typeName, typingDelay);
  }
  // else {
  //   setTimeout('', 2000);
  //   typeSubtitle();
  // }
}

const subStringArray = ["Experienced Programmer | ", "Aspring Web-Developer | ", "PADI Scuba-Diver"];
let subCharIndex = 0;

function typeSubtitle() {
  if (subCharIndex < subStringArray.length) {
    typedSubtitle.textContent += subStringArray[subCharIndex];
    subCharIndex++;
    setTimeout(typeSubtitle, typingDelay*2);
  }
  else {
    // show image
    // self + padi scuba
  }
}

//TODO: Show Images function

typeName();
setTimeout(()=> {typeSubtitle();}, 2000);
setTimeout(() => {showImages();}, 2000);
