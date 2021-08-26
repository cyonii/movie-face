import {
  ADD_MOVIES,
  SET_FILTER,
  SET_QUERY,
  SET_TOTAL_PAGES,
  INCREASE_PAGE,
  DECREASE_PAGE,
} from '../../../redux/actions/types';

describe('Actions Types', () => {
  test('ADD_MOVIES should have the correct action text', () => {
    expect(ADD_MOVIES).toEqual('ADD_MOVIES');
  });

  test('SET_FILTER should have the correct action text', () => {
    expect(SET_FILTER).toEqual('SET_FILTER');
  });

  test('SET_QUERY should have the correct action text', () => {
    expect(SET_QUERY).toEqual('SET_QUERY');
  });

  test('SET_TOTAL_PAGES should have the correct action text', () => {
    expect(SET_TOTAL_PAGES).toEqual('SET_TOTAL_PAGES');
  });

  test('INCREASE_PAGE should have the correct action text', () => {
    expect(INCREASE_PAGE).toEqual('INCREASE_PAGE');
  });

  test('DECREASE_PAGE should have the correct action text', () => {
    expect(DECREASE_PAGE).toEqual('DECREASE_PAGE');
  });
});
