// user.test.js
const { addUser, getUserById } = require('../../src/user');

describe('User Module Tests', () => {
    beforeEach(() => {
        // Limpa os dados antes de cada teste
        users = [];
    });

    test('Adicionar e obter usuário por ID', () => {
        addUser({ id: 1, name: 'Alice' });
        addUser({ id: 2, name: 'Bob' });
        const user = getUserById(2);
        expect(user).toEqual({ id: 2, name: 'Bob' });
    });

    // Adicione mais testes conforme necessário
});
