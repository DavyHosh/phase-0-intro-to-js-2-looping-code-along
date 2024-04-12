// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts);*/


/*function writeCards(names, eventName) {
    let messages = [];

    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
}

const result = writeCards(["Ada", "Brendan", "Ali"], "birthday");
console.log(result);*/


/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);*/

/*let countup = 0;
while (countup < 10) {
  console.log(countup++);
}


for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}*/

/*function countDown(startingNumber) {
    for (let countDown = startingNumber; countDown >= 0; countDown--) {
        console.log(countDown);
    }
}

countDown(10);*/


function countDown(startingNumber) {
    let countDown = startingNumber;

    while (countDown >= 0) {
        console.log(countDown);
        countDown--;
    }
}

countDown(10);

