
import { Fragment } from 'react';
import './App.scss';
import Footer from './components/footer';
import Navigator from './components/navigator';
import NewsFeed from './pages/news-feed';

function App() {
  return (
    <Fragment>
      <header>
        <Navigator />
      </header>
      <main>
        <NewsFeed />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
