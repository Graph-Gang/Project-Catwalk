import React from 'react';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail_index: 0,
      gallery_index: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
    this.upArrow = this.upArrow.bind(this);
    this.downArrow = this.downArrow.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      thumbnail_index: Number(e.target.alt),
    })
  }

  leftArrow(e) {
    e.preventDefault();
    var decrement = this.state.thumbnail_index - 1;
    this.setState({
      thumbnail_index: decrement,
    })
  }

  rightArrow(e) {
    e.preventDefault();
    var increment = this.state.thumbnail_index + 1;
    this.setState({
      thumbnail_index: increment,
    })
  }

  upArrow(e) {
    e.preventDefault();
    this.setState({
      gallery_index: this.state.gallery_index - 1,
    })
  }

  downArrow(e) {
    e.preventDefault();
    this.setState({
      gallery_index: this.state.gallery_index + 1,
    })
  }

  render() {
    var thumbnailsToRender = [];
    var upArrowStyle = 'hidden';
    var downArrowStyle = 'hidden';

    if (this.props.selected.photos !== undefined) {
      if (this.props.selected.photos.length - this.state.gallery_index >= 5) {
        for (var i = this.state.gallery_index; i < this.state.gallery_index + 5; i++) {
          thumbnailsToRender.push(<img key={i} src={this.props.selected.photos[i].thumbnail_url} onClick={this.handleClick} className='gallery_thumbnail' alt={i} style={{border: i === this.state.thumbnail_index ? '0.25vw solid black' : '0.1vw solid grey'}}/>)
        }
      } else {
        this.props.selected.photos.map((photo, i) =>
          thumbnailsToRender.push(<img key={i} src={photo.thumbnail_url} onClick={this.handleClick} className='gallery_thumbnail' alt={i} style={{border: i === this.state.thumbnail_index ? '0.25vw solid black' : '0.1vw solid grey'}}/>)
        )
      }

      this.state.gallery_index !== 0 ? upArrowStyle = 'visible' : upArrowStyle = 'hidden'
      this.props.selected.photos.length - this.state.gallery_index > 5 ? downArrowStyle = 'visible' : downArrowStyle = 'hidden'
    }

    return (
      <div className='gallery_grid'>
        <div className='vertical_flexbox'>
          <i className='arrow up' onClick={this.upArrow} style={{visibility: upArrowStyle}}></i>
          <div className='gallery'>
            {thumbnailsToRender.map((imgElement) =>
              imgElement
            )}
          </div>
          <i className='arrow down' onClick={this.downArrow} style={{visibility: downArrowStyle}}></i>
        </div>
        {this.props.selected.photos !== undefined ?
          <div className='horizontal_flexbox'>
            <i className='arrow left' onClick={this.leftArrow} style={{visibility: this.state.thumbnail_index !== 0 ? 'visible' : 'hidden'}}></i>
            <div className='main_image'>
              <img src={this.props.selected.photos[this.state.thumbnail_index].url} className='theIMG'/>
            </div>
            <i className='arrow right' onClick={this.rightArrow} style={{visibility: this.state.thumbnail_index !== this.props.selected.photos.length - 1 ? 'visible' : 'hidden'}}></i>
          </div>
        : <div></div>}
      </div>
    )
  }
}

export default ImgGallery;