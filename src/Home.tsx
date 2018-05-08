import app, { Component } from 'apprun';

export default class homeComponent extends Component {
  model = 'Chanon Panpila';

  view = state => {
    return (
      <div>
        <h1>{state}</h1>
        <button>change state</button>
        <input oninput={e => app.run('input', e)} />
      </div>
    );
  };

  update = {
    '#Home': state => state,
    input: (state, e) => e.target.value
  };
}

const element = document.getElementById('my-app');
const Home = new homeComponent();
app.start(element, Home.model, Home.view, Home.update);
