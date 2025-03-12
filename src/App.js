import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact Component={AboutUs} />
          <Route path="aboutus" Component={AboutUs} />
          <Route path="contactus" exact Component={ContactUs} />
          <Route path="ourwork" exact Component={OurWork} />
          <Route path="/ourwork/:id" Component={MovieDetail}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
