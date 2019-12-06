let card1 = {}
card1.number = 5;
card1.suit = "clubs";
card1.value = 5;

let card2 = {}
card2.number = 6;
card2.suit = "clubs";
card2.value = 6;

let card3 = {}
card3.number = "King";
card3.suit = "hearts";
card3.value = 10;

blackjackStatus(card1, card2, card3);

function blackjackStatus(cardA, cardB, cardC) {
  console.log(cardA.value + ' of ' + cardA.suit);
  console.log(cardB.value + ' of ' + cardB.value);
  console.log(cardC.value + ' of ' + cardC.value);
}


// This was never finished. I hope to finish this soon. December 6