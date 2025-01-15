function decodeToHex(encodedString) {
    return encodedString.replace(/%([a-fA-F0-9]{2})/g, (_, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
    });
}

module.exports = { decodeToHex };