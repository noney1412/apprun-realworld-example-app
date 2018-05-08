import home from './home';
import app from 'apprun';

app.on('#', _ => app.run('#Home'));

app.on('//', route => {
  const menus = document.querySelectorAll('#navbar');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('--active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('--active');
});

const view = state => (
  <div id="main-container">
    <nav id="navbar">
      <a className="navbar__brand" href="#">
        Project Name
      </a>
      <a className="navbar__home" href="#Home">
        Home
      </a>
      <a className="navbar__topic" href="#Contact">
        Topic
      </a>
    </nav>
    <div className="container" id="my-app" />
  </div>
);

app.start('main', {}, view, {});

import Home from './Home';
import About from './About';
import Contact from './Contact';
const element = 'my-app';
new Home().mount(element);
new About().mount(element);
new Contact().mount(element);
