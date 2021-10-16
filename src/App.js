import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserLoggedIn from './components/UserLoggedIn';
import Header from './components/Header';
import HomeMain from './components/HomeMain';
import Detail from './components/Detail';
function App() {
  return (
    <>
      <section className='App'>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <UserLoggedIn />
            </Route>
            <Route path='/home'>
              <HomeMain />
            </Route>
            <Route path='/detail/:id'>
              <Detail />
            </Route>
          </Switch>
        </Router>
      </section>
    </>
  );
}
export default App;
