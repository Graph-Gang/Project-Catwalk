import React from 'react'
import ProductInfo from './components/ProductInfo/productInfo.jsx';
import StyleSelector from './components/StyleSelector/styleSelector.jsx';
import AddCart from './components/AddCart/addCart.jsx';
import ImgGallery from './components/ImgGallery/imgGallery.jsx';
import Description from './components/ProductInfo/components/description.jsx';
import Features from './components/ProductInfo/components/features.jsx';
import Share from './components/ProductInfo/components/sharing.jsx';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    }
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_styles !== prevProps.product_styles) {
      this.setState({
        selected: this.props.product_styles[0],
      })
    }
  }

  handleStyleSelect(selected) {
    this.setState({
      selected: selected,
    })
  }

  render() {
    return (
      <div>
        <div className='pd_grid'>
          <div className='pd_item1'>
            <ImgGallery selected={this.state.selected}/>
          </div>
          <div className='pd_item3'>
            <ProductInfo product={this.props.product}/>
            <StyleSelector product_styles={this.props.product_styles} selectStyle={this.handleStyleSelect}/>
            <div>
              <AddCart selected={this.state.selected}/>
            </div>
          </div>
          <div className='pd_item4'>
            <div className='social_media'>
              <Share />
            </div>
          </div>
          <div className='pd_item5'>
            <Description product={this.props.product}/>
          </div>
          <div className='pd_item6'>
            <Features product={this.props.product}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail;