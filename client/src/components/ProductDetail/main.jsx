import React from 'react'
import ProductInfo from './components/ProductInfo/productInfo.jsx';
import StyleSelector from './components/StyleSelector/styleSelector.jsx';
import AddCart from './components/AddCart/addCart.jsx';
import ImgGallery from './components/ImgGallery/imgGallery.jsx';

const Main = (props) => (
  <div>
    <ProductInfo products={props.products}/>
    <StyleSelector products={props.products}/>
    <AddCart products={props.products}/>
    <ImgGallery products={props.products}/>
  </div>
)

export default Main;