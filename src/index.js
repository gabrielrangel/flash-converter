import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/index.scss';

import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from "./Components/Footer";
import {BrandToggleProvider} from "./Hooks/useBrandToggler";
import Converter from "./Components/Converter";

ReactDOM.render((
    <React.StrictMode>
        <BrandToggleProvider>
            <Header/>

            <Main title={"FreshConverter"}>
                <Converter/>
            </Main>
        </BrandToggleProvider>

        <Footer/>
    </React.StrictMode>
), document.getElementById('root') );