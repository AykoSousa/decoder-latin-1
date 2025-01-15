# decode-hex-lib

**Biblioteca para decodificar strings hexadecimais em caracteres UTF-8.**

## Descrição
Esta biblioteca fornece uma função para decodificar strings que contenham códigos hexadecimais precedidos por `%` (por exemplo, `%F3`) em seus respectivos caracteres UTF-8.

## Instalação
```bash
npm install decode-hex-lib

import { decodeHex } from 'decode-hex-lib';

const encodedString = "%F3%E3%20JavaScript";
const decodedString = decodeHex(encodedString);
console.log(decodedString); // Output: óã JavaScript
```

## API
decodeHex(encodedString: string): string
Decodifica uma string hexadecimal para uma string UTF-8.

encodedString: A string a ser decodificada.
Retorna: A string decodificada.

```javascript
decodeHex("Gest%E3o"); // Retorna: Gestão
decodeHex("%C9poca"); // Retorna: Época
```

## Testes
Para executar os testes, utilize:
```bash
npm test
```
