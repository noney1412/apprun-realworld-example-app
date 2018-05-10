import app, { Component } from 'apprun';
import { name } from './store/_store__Name';
import * as store from 'store';

export default class homeComponent extends Component {
  model = name;

  view = state => {
    return (
      <div>
        <h1>{state}</h1>
        <div className="test">5555</div>
        <button onclick={() => app.run('justClick')}>change state</button>
        <button onclick={() => app.run('justClear')}>clear</button>
        <input oninput={e => app.run('input', e)} />
      </div>
    );
  };

  update = {
    '#Home': state => state,
    input: (state, e) => {
      return e.target.value;
    },
    justClick: state => {
      if (typeof Storage !== 'undefined') {
        store.set('user', { name: 'ChanonEIEI' });
      } else {
        // Sorry! No Web Storage support..
      }
    },
    justClear: state => {
      if (typeof Storage !== 'undefined') {
        store.clearAll();
      } else {
        // Sorry! No Web Storage support..
      }
    }
  };
}

const element = document.getElementById('my-app');
const Home = new homeComponent();
app.start(element, Home.model, Home.view, Home.update);
