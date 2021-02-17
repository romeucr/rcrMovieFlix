import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import MovieList from './pages/MovieList'

const Routes = () => (
   <BrowserRouter>
      <Header />  
      <Switch>
         <Route path="/" exact>
            <Home />
         </Route>
         <Route path="/movies" exact>
            <MovieList />
         </Route>
         <Route path="/movies/:movieId" exact>
            <MovieDetail />
         </Route>
      </Switch>
   </BrowserRouter>
)
export default Routes