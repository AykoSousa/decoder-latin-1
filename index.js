function decodeToHex(encodedString) {
    try {
      return encodedString.replace(/%([a-fA-F0-9]{2})/g, (_, hex) => {
        try {
          const decimal = parseInt(hex, 16);
          return String.fromCharCode(decimal);
        } catch (parseError) {
          throw new Error(`Invalid hexadecimal code: ${hex} at index ${_.index}`);
        }
      });
    } catch (error) {
      throw new Error(`Error decoding URL-encoded string: ${error.message}`);
    }
  }
  
  module.exports = { decodeToHex };