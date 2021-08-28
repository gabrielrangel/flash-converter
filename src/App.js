import {StrictMode} from "react";

import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from "./Components/Footer";

export default function App() {
  return (
    <StrictMode>
        <Header/>

        <Main/>

        <Footer/>
    </StrictMode>
  );
}