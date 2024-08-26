import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Screen1 from "./pages/screen1";
import Screen2 from "./pages/screen2";
import Screen4 from "./pages/screen4";
import Screen3 from "./pages/screen3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/screen-02":
        title = "";
        metaDescription = "";
        break;
      case "/screen-04":
        title = "";
        metaDescription = "";
        break;
      case "/screen-03":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Screen1 />} />
      <Route path="/screen-02" element={<Screen2 />} />
      <Route path="/screen-04" element={<Screen4 />} />
      <Route path="/screen-03" element={<Screen3 />} />
    </Routes>
  );
}
export default App;
