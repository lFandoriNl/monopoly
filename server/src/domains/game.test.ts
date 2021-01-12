import { Game } from './game';
import { Player } from './player';

describe('Game logic', () => {
  it('executeActions > move to the company', () => {
    const game = new Game({});

    game.addPlayer(new Player({ id: '1', balance: 5000, buyPrice: 1000 }));
    game.addPlayer(new Player({ id: '2', balance: 5000, buyPrice: 1000 }));

    game.currentPlayerId = '1';

    game.executeActions([
      { path: 'top', order: 0 },
      { path: 'top', order: 6 },
    ]);

    const company = game.board?.cellsPriceData[6];

    expect(company?.cost).toBe(1000);
  });

  it('buyCompany', () => {
    const game = new Game({});

    game.addPlayer(
      new Player({
        id: '1',
        color: '#fff',
        balance: 5000,
        buyPrice: 1000,
        moveCells: [
          { path: 'top', order: 0 },
          { path: 'top', order: 6 },
        ],
      }),
    );

    game.addPlayer(new Player({ id: '2', balance: 5000, buyPrice: 1000 }));

    game.currentPlayerId = '1';

    game.buyCompany();

    expect(game.getPlayer('1').balance).toBe(4000);

    const company = game.board?.cellsData[6];

    if (company?.type === 'company') {
      expect(company.ownerId).toBe('1');
    }

    expect(game.currentPlayerId).toBe('2');
  });
});
