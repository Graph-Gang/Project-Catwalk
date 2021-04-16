import React from 'react'
import ProductInfo from './components/ProductInfo/productInfo.jsx';
import StyleSelector from './components/StyleSelector/styleSelector.jsx';
import AddCart from './components/AddCart/addCart.jsx';
import ImgGallery from './components/ImgGallery/imgGallery.jsx';
import Description from './components/ProductInfo/components/description.jsx';
import Features from './components/ProductInfo/components/features.jsx';

const ProductDetail = (props) => (
  <div>
    <div className='pd_grid'>
      <div className='pd_item1'>
        {/* LeftSideOfMainImage */}
      </div>
      <div className='pd_item2'>
        {/* MainImage */}
        <ImgGallery product={props.product}/>
      </div>
      <div className='pd_item3'>
        <ProductInfo product={props.product}/>
        <StyleSelector product={props.product}/>
        <AddCart product={props.product}/>
      </div>
      <div className='pd_item4'>
        {/* EmptyDiv */}
      </div>
      <div className='pd_item5'>
        <Description product={props.product}/>
      </div>
      <div className='pd_item6'>
        <Features product={props.product}/>
      </div>
    </div>
  </div>
)

export default ProductDetail;