const { addUser, getUserById } = require('../../src/user');
const { createAuction, placeBid, getAuctionById, getBidsForAuction } = require('../../src/auction');

describe('Integration Tests', () => {
    beforeEach(() => {
        users = [];
        auctions = [];
        bids = [];
    });

    test('Criar usuário, leilão e fazer um lance', () => {
        addUser({ id: 1, name: 'Alice' });

        createAuction({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });

        placeBid(1, 1, 60);

        const user = getUserById(1);
        expect(user).toEqual({ id: 1, name: 'Alice' });

        const auction = getAuctionById(1);
        expect(auction).toEqual({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });

        const bids = getBidsForAuction(1);
        expect(bids).toEqual([{ auctionId: 1, userId: 1, amount: 60 }]);
    });

});
