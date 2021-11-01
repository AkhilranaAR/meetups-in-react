import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/allMeetups.js";
import FavouritesPage from "./pages/favourites.js";
import NewMeetupsPage from "./pages/newMeetups.js";
import Layout from "./components/layout/layout.js";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
