(function(){
const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
        quote:
          "One need not be a chamber to be haunted. One need not be a house. The brain has corridors surpassing material place.",
        author: " Emily Dickinson"
      }
      ,
      {
        quote:
          "Monsters are real, ghosts are real too. They live inside us, and sometimes, they win.",
        author: " Stephen King"
      },
      {
        quote:
          "Danger doesn’t lurk at every corner. It’s just hanging out, waiting for fear and horror to show up.",
        author: " UNKNOWN"
      },
      {
        quote:
          "This inhuman place makes human monsters.",
        author: " Stephen King"
      },

  ];

  console.log(quotes.length);

  var controls= document.getElementById('mybtn');
  controls.addEventListener('click', changeQuote)

  function changeQuote(){
 let randomIndex= getRandomValue();
    document.getElementById('line').innerText=quotes[randomIndex].quote;
    document.getElementById('author').innerText=quotes[randomIndex].author;
  }

  function getRandomValue(){
      let val= Math.random()*10;
      val= Math.floor(val);
      return val;
  }

})();