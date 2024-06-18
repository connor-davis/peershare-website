import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/root.layout";
import DownloadPage from "./pages/download/download.page";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Route>
    </Routes>
  );
}

export default App;
