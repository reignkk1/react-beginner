import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import MoviePage from "./routes/MoviePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
