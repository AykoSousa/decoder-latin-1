# decode-hex-lib

Library to decode hexadecimal strings into UTF-8 characters.

## Description
This library provides a function to decode strings containing hexadecimal codes preceded by % (e.g., %F3) into their respective UTF-8 characters.

Link to Latin-1 character table: https://en.wikipedia.org/wiki/ISO/IEC_8859-1

## Installation
```bash
npm install decode-hex-lib
```

## Import and usage
```javascript
import { decodeHex } from 'decode-hex-lib';

const encodedString = "S%E3o%20Paulo";
const decodedString = decodeHex(encodedString);
console.log(decodedString); // Output: São Paulo
```

## API
decodeHex(encodedString: string): string
Decodes a hexadecimal string to a UTF-8 string.

encodedString: The string to be decoded.
Returns: The decoded string.

```javascript
decodeHex("Gest%E3o"); // Retorna: Gestão
decodeHex("%C9poca"); // Retorna: Época
```

## Tests
To run the tests, use:
```bash
npm test
```