import Header from './Header';
import Main from './Main'
import Nav from './Nav'
import '../sass/main.scss'

export default function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Nav />
        <Main />
      </div>
    </div>
  );
}


