import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/index.scss';

import Main from "./Components/Main"
import Footer from "./Components/Footer";
import Converter from "./Components/Converter";

ReactDOM.render((
    <React.StrictMode>
        <Main title={"⚡️ FlashConverter ⚡"}>
            <Converter/>
        </Main>

        <Footer/>
    </React.StrictMode>
), document.getElementById('root') );