import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {},
      price: null,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_styles !== prevProps.product_styles) {
      this.setState({
        selected: this.props.product_styles[0],
        price: this.props.product_styles[0].sale_price === null ? `$${this.props.product_styles[0].original_price}` : `$${this.props.product_styles[0].sale_price}`,
      })
    }
  }

  render() {
    return (
      <div>
        <div className='product_price'>
          {this.state.price}
        </div>
        <h3 className='style_name'>
          STYLE > {this.state.selected.name}
        </h3>
        <div className='style_grid'>
          {this.props.product_styles.map((style, i) =>
            <img key={i} src={style.photos[0].thumbnail_url} alt='Style' className='roundedThumbnail'/>
          )}
        </div>
      </div>
    )
  }
}

export default StyleSelector;