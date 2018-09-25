// values of the cards
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
// colors of the cards
let colors = ['D', 'H', 'C', 'S'];
let cards = [];
let card;

const generate = () => {
  for (let i = 0; i < 5; i++) {
    card = values[Math.floor(Math.random() * values.length)] + colors[Math.floor(Math.random() * colors.length)] + '.png';
    cards.push(card);
  }
  console.log(cards);
}

generate();
