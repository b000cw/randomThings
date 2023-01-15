Generate a random quote or a number.



For generating a random number you can either pass minium number and maximum number (or) just call the function without any arguments in it.  
```
  import {random} from "random-n-num"

  // pass using min and max values

  random.number(1, 20) // generates a random number between 1 and 20 and returns it.

  // call the function directly.
  random.number()  // generates a random between 1 to 100 and returns it.

```

For generating a quote

```
  import {random} from "random-n-num"


  random.quote() // return a random quote.

```

Quotes are taken from https://www.briantracy.com/blog/personal-success/inspirational-quotes/