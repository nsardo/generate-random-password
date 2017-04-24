# generate-random-password
Generate a random password consisting of upper and lowercase alpha-numeric characters and special characters with inputs for length, and percent chance of special characters occuring.

*DEFAULT*:
- Return alpha-numeric characters, roughly 80% chance for each letter
- Return special characters, roughly 20% chance for each letter

            generateRandomPassword( length [,special_chars_percent_chance] )

            where LENGTH: is required, and the number of characters desired in the password
                  SPECIAL_CHARS_PERCENT_CHANCE: is optional, and if not included, defaults to 20 (for 20% chance)
            NOTE for special_chars_percent_chance, desired percentage chance should be a WHOLE NUMBER, i.e. 25 for 25%

## usage:

```
npm i generate-random-password
```

...

```
let gpw = require( 'generate-random-password' );

// this will create a random password of length 8, and
// a 20% chance of special chars for each letter
let pw = gpw.generateRandomPassword( 8 );
```
OR
```
// this will create a random password of length 8, special characters
// having a 50% chance of showing up each letter
let pw = gpw.generateRandomPassword( 8, 50 );
```