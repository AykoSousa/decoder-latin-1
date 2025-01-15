const { decodeToHex } = require('../index');

test('Must replace encoded char (%F3) to respective latin-1 char like (ó)', () => {
    expect(decodeToHex("Vit%F3ria")).toBe("Vitória");
})

test('Must replace encoded char (%E3) to respective latin-1 char like (ã)', () => {
    expect(decodeToHex("Gest%E3o")).toBe("Gestão");
})

test('Must replace encoded char (%C9) to respective latin-1 char like (é)', () => {
    expect(decodeToHex("%C9poca")).toBe("Época");
})

test('Must replace encoded char (%E1) to respective latin-1 char like (á)', () => {
    expect(decodeToHex("Cont%E1bil")).toBe("Contábil");
})