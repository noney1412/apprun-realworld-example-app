import * as store from 'store';

export const name =
  localStorage.getItem('user') !== null
    ? store.get('user').name
    : store.set('user', { name: null });
