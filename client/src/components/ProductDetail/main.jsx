import React from 'react'
import ProductInfo from './components/productInfo.jsx';
import StyleSelector from './components/styleSelector.jsx';
import AddCart from './components/addCart.jsx';
import ImgGallery from './components/imgGallery.jsx';

const Main = (props) => (
  <div>
    <ProductInfo products={props.products}/>
    <StyleSelector products={props.products}/>
    <AddCart products={props.products}/>
    <ImgGallery products={props.products}/>
  </div>
)

export default Main;