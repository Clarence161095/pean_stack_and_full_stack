import { Fragment } from 'react';
import './App.scss';
import Newsfeed from './pages/newsfeed';
import Navigator from './components/navigator';
import Footer from './components/footer';

function App() {
  return (
    <Fragment>
      <header>
        <Navigator />
      </header>
      <main>
        <Newsfeed />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
