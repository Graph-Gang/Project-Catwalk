import React from 'react';

class AddCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '',
      qty: '',
      qty_selected: 1,
      cart: [],
    }
    this.handleSize = this.handleSize.bind(this);
    this.handleQty = this.handleQty.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleSize(e) {
    if (e.target.value === '') {
      this.setState({
        size: '',
        qty: '',
        qty_selected: 1,
      })
    } else {
      this.setState({
        sku_id: e.target.value,
        size: this.props.selected.skus[e.target.value].size,
        qty: this.props.selected.skus[e.target.value].quantity,
        qty_selected: this.state.qty_selected > this.props.selected.skus[e.target.value].quantity ? 1 : this.state.qty_selected,
      })
    }
  }

  handleQty(e) {
    this.setState({
      qty_selected: Number(e.target.value),
    })
  }

  handleAdd(e) {
    e.preventDefault();
    this.state.cart.push({
      style_id: this.props.selected.style_id,
      sku_id: this.state.sku_id,
      size: this.state.size,
      quantity: this.state.qty_selected,
    })

    this.setState({
      cart: this.state.cart,
    })

    window.alert('Item Added!');
  }

  render() {
    var skusid;
    this.props.selected.skus !== undefined ? skusid = Object.keys(this.props.selected.skus) : null

    var qtyList;
    this.state.qty > 15 ? qtyList = new Array(15).fill(0) : qtyList = new Array(this.state.qty).fill(0);

    var outOfStock = true;
    if (this.props.selected.skus !== undefined) {
      for (var key in this.props.selected.skus) {
        if (this.props.selected.skus[key].quantity > 0) {
          outOfStock = false;
        }
      }
    }

    return (
      <form className='cart_form' onSubmit={this.handleAdd}>
        <select className='size_selection' onChange={this.handleSize} disabled={outOfStock ? true : false} required>
          {outOfStock ? <option value=''>OUT OF STOCK</option> : <option value=''>SELECT SIZE</option>}

          {skusid !== undefined ? skusid.map((sku, i) =>
            this.props.selected.skus[sku].quantity > 0 ?
            <option key={i} value={sku}>
              {this.props.selected.skus[sku].size}
            </option> : null
          ) : null}
        </select>

        <select className='qty_selection' onChange={this.handleQty} disabled={this.state.size === '' ? true : false}>
          {this.state.size !== '' ? qtyList.map((qty, i) =>
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ) : <option>-</option>}
        </select>
        <button className='addtocart_button' disabled={outOfStock ? true : false} type='submit'>
            ADD TO CART
        </button>
      </form>
    )
  }
}

export default AddCart;