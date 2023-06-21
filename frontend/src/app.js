import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import LandingPage from "./screens/landingPage/landingPage";
import { BrowserRouter, Route} from "react-router-dom";
import Mynotes from "./screens/Mynotes/Mynotes.js";
import LogInPage from "./screens/LoginPage/LogInPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/CreateNote/SingleNote";
import { useState } from "react";
const App = () => {
   const[search , setSearch]= useState("");
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />

      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/createnote" component={CreateNote} exact />
        <Route
          path="/mynotes"
          component={() => <Mynotes search={search} />}
          exact
        />
        <Route path="/note/:id" component={SingleNote} exact />
      </main>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
