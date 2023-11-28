import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect'
import Game from '../components/game/Game';
import { CategoryName } from '../models/category';

it('changes the class when hovered', () => {
  const games = [{
    name: 'test',
    categories: [CategoryName.top, CategoryName.slots],
    image: 'https://image.com',
    id: 'test_id'
  }]
  const jackpots = [{
    game: 'test_id',
    amount: 12000,
  }]
  const component = renderer.create(
    <Game active={CategoryName.top} games={games} jackpots={jackpots}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});