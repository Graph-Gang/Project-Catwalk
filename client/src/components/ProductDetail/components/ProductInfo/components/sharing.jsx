import React from 'react';
import { Passers } from 'prop-passer';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

class Share extends React.Component {

  render() {

    const {
      url = String(window.location),
      title = 'Project Catwalk FEC',
      shareImage = 'https://www.pinterest.com/pin/348114246191348414/',
      size = '2rem',
    } = this.props;

    const ShareList = Passers({
      url,
      className: 'network__share-button',
    })({
      className: 'network cursor-pointer hover transition--default',
      title: `Share ${String(window.location)}`,
    })('li');

    return (
      <ShareList>
        <FacebookShareButton quote={title}>
          <FacebookIcon size={size}/>
        </FacebookShareButton>

        <TwitterShareButton title={title}>
          <TwitterIcon size={size}/>
        </TwitterShareButton>

        <PinterestShareButton url={`${url}`} media={`${shareImage}`} windowWidth={1000} windowHeight={730}>
          <PinterestIcon size={size}/>
        </PinterestShareButton>
      </ShareList>
    );
  }
}

export default Share;
