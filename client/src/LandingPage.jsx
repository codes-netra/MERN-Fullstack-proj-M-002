import React from 'react';
import { Link } from 'react-router';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <>
         <section class="hero" id="home">
        <h1>Fruits and vegitable for you to your home.</h1>
        <p>There are no ways fruit and vegitable get a way away in your home without having to  go for it.</p>
        {/*<a href="#products" class="btn-cta">Explore Fresh Stock</a>*/}
        <Link to="/dashboard" class="btn-cta">Explore Fresh Stock</Link>
    </section>





    <div class="product-info">
        <span class="product-category">Fruits</span>
        <h3 class="product-name">Bananas</h3>
        <div class="product-price">A cheaper side. Now</div>
        <Link to="/dashboard">
        <button class="btn-add">Select IT</button>
        </Link>
    </div>

    <div class="product-info">
        <span class="product-category">Vegetables</span>
        <h3 class="product-name">Carrot</h3>
        <div class="product-price">A cheaper side. Now</div>
        <Link to="/dashboard">
        <button class="btn-add">Select IT</button>
        </Link>
    </div>
    </>
    );
};

export default LandingPage;