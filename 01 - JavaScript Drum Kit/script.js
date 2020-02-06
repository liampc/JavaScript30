
/*  1. (const audio) Make audio files to play when a key is pressed.
        a. Make sure audio start everytime a key is press
        b. play audio      
    2. (const key) Put an animation to the box when a key is pressed 
        a. add the class playing, which has attributes for animation
        b. then remove the class after a time using transitionend event
        c. specify what specific transitionend event

*/




window.addEventListener('keydown', function(e) { // the window serves a a global reference it is applicable to the whole page, it can be other element 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // e is the event itself, e.keyCode - keyCode is a property of e. console.log(e) to find out more properties
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // use .key for class="key"
    console.log(audio);                                                     // to insert a number not a variable, ${} was used
    if (!audio) return;       // if there is no audio attached to keyCode, the return will just stop
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing"); // add the class for animation
  });

  function removeTransition(e){
      if (e.propertyName !== "transform") return //all of the other properties will be skipped
        this.classList.remove("playing") //remove the properties of class playing from key
    }
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));