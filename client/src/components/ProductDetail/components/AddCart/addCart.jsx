import React from 'react';

class AddCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'SELECT SIZE',
      qty: '-',
    }
    this.handleSize = this.handleSize.bind(this);
  }

  handleSize(e) {
    if (e.target.value === 'SELECT SIZE') {
      this.setState({
        size: e.target.value,
        qty: '-',
      })
    }

    var skus = Object.values(this.props.selected.skus);
    for (var i = 0; i < skus.length; i++) {
      if (skus[i].size === e.target.value) {
        this.setState({
          size: e.target.value,
          qty: skus[i].quantity,
        })
      }
    }
  }

  render() {
    var skus;
    this.props.selected.skus !== undefined ? skus = Object.values(this.props.selected.skus) : null

    var qtyList;
    this.state.qty > 15 ? qtyList = new Array(15).fill(0) : qtyList = new Array(this.state.qty).fill(0);

    return (
      <form>
        <select className='size_selection' onChange={this.handleSize}>
          <option value='SELECT SIZE'>SELECT SIZE</option>
          {skus !== undefined ? skus.map((size, i) =>
            <option key={i} value={size.size}>
              {size.size}
            </option>
          ) : null}
        </select>
        <select className='qty_selection'>
          {this.state.size !== 'SELECT SIZE' ? qtyList.map((qty, i) =>
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ) : <option value='-'>-</option>}
        </select>
      </form>
    )
  }
}

export default AddCart;