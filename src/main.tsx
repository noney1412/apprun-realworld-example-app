import app from 'apprun';

const model = 'Hello world - AppRun !';

const view = state => (
  <div>
    <h1>{state}</h1>
    <input oninput={e => app.run('input', e)} />
  </div>
);

const update = {
  input: (state, e)
};

app.start('my-app', model, view, update);
