import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Products } from '../components/Products';
import { Banners } from '../components/Banners';
import { Payments } from '../components/Payments';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PopupBasket } from '../components/PopupBasket';
import { PopupPayments } from '../components/PopupPayments';
import { Article } from '../components/Article';
import { Preloader } from '../components/Preloader';

export const Home = ({ showPayments, setShowPayments }) => {
  const [article, setArticle] = useState(false);

  return (
    <div className="bg-main-bg bg-fixed bg-no-repeat bg-cover p-2 sm:p-10 min-h-full">
      <div className="max-w-7xl w-full m-auto">
        <div className="flex-col lg:flex-row flex items-start gap-10">
          <Sidebar />
          <div className="w-full lg:w-3/4">
            <Header />
            <div className="bg-white shadow-sm p-4 rounded-md">
              <Banners />
              <Payments />
              <Products
                article={article}
                setArticle={setArticle}
                showPayments={showPayments}
                setShowPayments={setShowPayments}
              />
              <Footer />
            </div>
          </div>
        </div>
      </div>
        <PopupPayments
          showPayments={showPayments}
          setShowPayments={setShowPayments}
        />
      <PopupBasket
      article={article}
        showPayments={showPayments}
        setShowPayments={setShowPayments}
      />
      <Article article={article} />
      <Preloader />
    </div>
  );
};
