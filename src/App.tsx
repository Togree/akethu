
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Tracker from "./pages/tracker";

import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/trackers" element={<Tracker />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
