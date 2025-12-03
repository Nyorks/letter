const message = `I don’t even know if you’ll ever read this because of how disappointed you are, Love.\nBut if you do… I just want you to know, I still feel the same way towards you, Love.\n\nI hope you can forgive me for the mistakes that i caused you, Love.\n\nI always wish you all the best and care for you every single day, Love.\n\nAnyway, I hope you're doing okay, Love, even though you're feeling down. I love you, Love`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
