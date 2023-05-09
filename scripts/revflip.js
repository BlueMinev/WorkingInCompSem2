var flashcards = document.querySelectorAll(".flashcard");

for (var i = 0; i < flashcards.length; i++) {
  flashcards[i].addEventListener("click", function() {
    this.classList.toggle("flipped");
  });
}
