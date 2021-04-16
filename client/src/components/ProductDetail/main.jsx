import React from 'react'
import ProductInfo from './components/ProductInfo/productInfo.jsx';
import StyleSelector from './components/StyleSelector/styleSelector.jsx';
import AddCart from './components/AddCart/addCart.jsx';
import ImgGallery from './components/ImgGallery/imgGallery.jsx';
import ProductOverview from './components/ProductInfo/components/productOverview.jsx';

const ProductDetail = (props) => (
  <div>
    <ProductInfo product={props.product}/>
    <StyleSelector product={props.product}/>
    <AddCart product={props.product}/>
    <ImgGallery product={props.product}/>
    <ProductOverview product={props.product}/>
  </div>
)

export default ProductDetail;