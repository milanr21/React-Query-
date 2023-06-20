import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Router>
          <div>
            <div className='nav-bar'>
              <h1>React Query</h1>
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/super-heroes'>Super Heroes</Link>
                  </li>
                  <li>
                    <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Routes>
              <Route path='/super-heroes' element={<SuperHeroesPage />} />
              <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
              <Route path='/' element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
};

export default App;
