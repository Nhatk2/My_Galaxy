import { Routes, Route, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import Video_bg from "./components/bg__video"
//Components
import Main from "./components/Main";
import Neptune from "./components/Neptune";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import Uranus from "./components/Uranus";
import SoundBar from "./subComponents/SoundBar";
import Jupiter from "./components/Jupiter";

function App() {
  const location = useLocation();
  return (
    <>
      <Video_bg/>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

      
        <AnimatePresence mode='wait'>
 

          <Routes key={location.pathname} location={location} >


              <Route path="/" element={<Main />} />

              <Route path="/jupiter" element={<Jupiter />} />

              <Route path="/neptune" element={<Neptune />} />

              <Route path="/blog" element={<BlogPage />} />

              <Route path="/work" element={<WorkPage />} />

              <Route path="/skills" element={<Uranus />} />
      
              <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
