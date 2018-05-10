import app, { Component } from 'apprun';
import { name } from './store/_store__Name';
import * as store from 'store';

export default class ContactComponent extends Component {
  model = name;

  view = state => {
    return (
      <div>
        <h1>{state}</h1>
      </div>
    );
  };

  update = {
    '#Contact': state => state
  };
}

const element = document.getElementById('my-app');
const Contact = new ContactComponent();
app.start(element, Contact.model, Contact.view, Contact.update);
