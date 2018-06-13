## Synopsis

Our facilitator for the second meet up ([Hope](https://github.com/ebonyhope)), after introducing us to some
of the fundamentals of **Javascript**, challenged us to come up with a game wherein
the computer picks a number at random between 0 and 100 and the user is to guess
accurately the number the computer picked.

To solve this challenge, I came up with [the above IIFE](guessNumber.js) which
uses a loop control structure to rerun the code and provide a bit of feedback to
the user if each guess he/she provides is inaccurate.

Also, as a bit of a **_personal challenge_**, the facilitator stated that the loop to 
be used could only be a while loop and I stated to her that a **for loop** could be
used. She stated she wasn't so sure that it could be and asked me to try implement
my solution using a for loop.

## Running the code:

To test the code simply copy everything in [the above snippet](guessNumber.js), paste 
it into your browser's Javascript console and hit enter.

Since it's an IIFE, there'd be no need for you to call the functtion separately to 
initiate it.

### Worth mentioning:

I haven't implemented any 'reasonable' form of input validation, **yet**. That'll be 
done when I create a UI for the challenge (as also directed by our facilitator).

## Final Note:

This short, trivial, program was written in ES6 using the following 'advanced' 
(relative to ES5) mechanisms:

- Arrow Functions,
- 'const' and 'let' for variable declarations,
- Template literals,
- Tenary operator (not specific to ES6 though).