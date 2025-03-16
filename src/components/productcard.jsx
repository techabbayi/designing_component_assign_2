// write product card here
import React from 'react';
import ViewProductButton from '../components/button';

const ProductCard = () => {
  const productImage = 'https://imgs.search.brave.com/tE2GoISrq_htf7qicudVLNloDams5ZuS94kLjLelSfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXku/Z2F6ZWxsZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvaVBob25lX1NF/XzJuZF9HZW5fLV93/aGl0ZS1fT3Zlcmxh/cF9UcmFucy1jcm9w/cGVkLmpwZz92PTE3/NDEyOTExODAmd2lk/dGg9MTQ0NQ';
  const productName = 'Iphone SE';
  const productPrice = 'Rs. 68,000';

  return (
    <div className="product_card">
      <img src={productImage} alt={productName} className="product_image" />

      <h3 className="product_name">{productName}</h3>

      <p className="product_price">{productPrice}</p>

      <ViewProductButton />
    </div>
  );
};

export default ProductCard;
