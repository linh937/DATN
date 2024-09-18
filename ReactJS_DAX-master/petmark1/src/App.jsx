import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './helo1/header.jsx';
import Footer from './helo1/footer.jsx';
import './App.css';

// Lazy loading components
const Login = lazy(() => import('./helo1/login.jsx'));
const Nav = lazy(() => import('./helo1/nav.jsx'));
const Cart = lazy(() => import('./helo1/cart.jsx'));
const Checkout = lazy(() => import('./helo1/checkout.jsx'));
const About = lazy(() => import('./helo1/about_us.jsx'));
const Contact = lazy(() => import('./helo1/contact.jsx'));
const Service = lazy(() => import('./helo1/service-2.jsx'));
const Faq = lazy(() => import('./helo1/faq.jsx'));
const Loi = lazy(() => import('./helo1/404.jsx'));
const Wishlist = lazy(() => import('./helo1/wishlist.jsx'));
const Compare = lazy(() => import('./helo1/compare.jsx'));
const My_account = lazy(() => import('./helo1/my-account.jsx'));
const Portfolio = lazy(() => import('./helo1/portfolio.jsx'));
const Product_details = lazy(() => import('./helo1/product-details.jsx'));
const Shop_left_sideber = lazy(() => import('./helo1/shopleftsidebar.jsx'));
const Blog = lazy(() => import('./helo1/blog.jsx'));
const Blog_details = lazy(() => import('./helo1/blog_details.jsx'));
const ResetPassword = lazy(() => import('./helo1/reset-password.jsx'));

function App() {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');

    return (
        <Router>
            <Header username={username} />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Nav />} />
                    <Route path="/login" element={<Login setUsername={setUsername} />} />
                    <Route path="/shop-left-sidebar" element={<Shop_left_sideber />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog_details" element={<Blog_details />} />
                    <Route path="/404" element={<Loi />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/product-details" element={<Product_details />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/my-account" element={<My_account />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="*" element={<Loi />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    );
}

export default App;
