import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import LandingPage from "./screens/landingPage/landingPage";
import { BrowserRouter, Route} from "react-router-dom";
import Mynotes from "./screens/Mynotes/Mynotes.js";
import LogInPage from "./screens/LoginPage/LogInPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main>
        {/* <LandingPage /> */}

        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={ LogInPage} exact />
        <Route path="/register" component={RegisterPage} exact />

        <Route path="/mynotes" component={() => <Mynotes />} />
      </main>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
