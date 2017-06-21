function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy (1).mp3");
    thatWasEasy.play()
}
$("#easy").on("click", sayThatWasEasy);