function runVideo(element, state = "") {
  if (state == "playing") {
    element.play();
  } else {
    element.pause();
  }
}
