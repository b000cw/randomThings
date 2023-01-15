import { quotes } from "./quotes.js"

export const random = {
  // Generate a random number.
  number: (min, max) => {
    if (min && max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    } else {
      return Math.floor(Math.random() * 100)
    }
  },
  // Generate a random quote.
  quote: () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}

// console.log(random.number(1, 5))
// console.log(random.number())
// console.debug(random.quote())
