import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'
import zalo from '../assets/images/zalo.png'

import Routes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                    <div class="hotline-fixed">
                    <a href="tel:(037)9031479" class="phone_span">
                    <i class='bx bxs-phone-call'></i>                        <span class="number">0379.031.479</span>
                    </a>
                    </div>

                    <div className="zalo-fixed">
                        <a>
                            <img src={zalo} />
                        </a>
                    </div>
                    <ProductViewModal/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
