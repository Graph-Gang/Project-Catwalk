import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {},
      price: null,
      sale_price: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_styles !== prevProps.product_styles) {
      this.setState({
        selected: this.props.product_styles[0],
        price: this.props.product_styles[0].original_price,
        sale_price: this.props.product_styles[0].sale_price,
      })
    }
  }

  handleClick(e) {
    for (var i = 0; i < this.props.product_styles.length; i++) {
      if (this.props.product_styles[i].name === e.target.title) {
        this.setState({
          selected: this.props.product_styles[i],
          price: this.props.product_styles[i].original_price,
          sale_price: this.props.product_styles[i].sale_price,
        })
      }
    }
  }

  render() {
    var priceStyle = {
      textDecorationLine: this.state.sale_price ? 'line-through' : 'none',
    }

    var salePriceStyle = {
      color: this.state.sale_price ? 'red' : 'black',
    }

    return (
      <div>
        <h4 className='product_price'>
          <div style={salePriceStyle} className='sale_price'>{this.state.sale_price ? '$' + this.state.sale_price : this.state.sale_price}</div>
          <div style={priceStyle} className='original_price'>${this.state.price}</div>
        </h4>
        <h3 className='style_name'>
          STYLE > {this.state.selected.name}
        </h3>
        <div className='style_grid'>
          {this.props.product_styles.map((style, i) =>
            <img key={i} src={style.photos[0].thumbnail_url} alt='Style' className='roundedThumbnail' onClick={this.handleClick} title={style.name}/>
          )}
        </div>
      </div>
    )
  }
}

export default StyleSelector;