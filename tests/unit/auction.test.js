// auction.test.js
const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('../../src/auction');

describe('Auction Module Tests', () => {
    beforeEach(() => {
        // Limpa os dados antes de cada teste
        auctions = [];
        bids = [];
    });

    test('Criar e obter leilão por ID', () => {
        createAuction({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });
        const auction = getAuctionById(1);
        expect(auction).toEqual({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });
    });

    test('Criar e obter lances para o leilão', () => {
        createAuction({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });
        placeBid(1, 1, 60);
        placeBid(1, 2, 70);
        const bids = getBidsForAuction(1);
        expect(bids).toEqual([{ auctionId: 1, userId: 1, amount: 60 }, { auctionId: 1, userId: 2, amount: 70 }]);
    });

    test('Criar e obter lances para o leilão', () => {
        createAuction({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });
        placeBid(1, 1, 20);
        placeBid(1, 2, 70);
        const bids = getBidsForAuction(1);
        expect(bids).toEqual([{ auctionId: 1, userId: 1, amount: 20 }, { auctionId: 1, userId: 2, amount: 70 }]);
    });

    test('Criar e obter lances para o leilão', () => {
        createAuction({ id: 1, name: 'Leilão de Teste', startingPrice: 50 });
        placeBid(9, 1, 60);
        placeBid(1, 2, 70);
        const bids = getBidsForAuction(1);
        expect(bids).toEqual([{ auctionId: 9, userId: 1, amount: 60 }, { auctionId: 1, userId: 2, amount: 70 }]);
    });

    // Adicione mais testes conforme necessário
});
