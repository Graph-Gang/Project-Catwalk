import React, { useContext, useEffect } from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductDetail from '../client/src/components/ProductDetail/main.jsx';
import ProductInfo from '../client/src/components/ProductDetail/components/ProductInfo/productInfo.jsx';
import Description from '../client/src/components/ProductDetail/components/ProductInfo/components/description.jsx';
import Features from '../client/src/components/ProductDetail/components/ProductInfo/components/features.jsx';
import Share from '../client/src/components/ProductDetail/components/ProductInfo/components/sharing.jsx';
import StarRating from '../client/src/components/ProductDetail/components/ProductInfo/components/starRating.jsx';
import StyleSelector from '../client/src/components/ProductDetail/components/StyleSelector/styleSelector.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Product Detail Tests', () => {
  it('renders ProductInfo Component', () => {
    const props = {
      product: {
        id:17067,campus:'hr-rfp',name:'Camo Onesie',slogan:'Blend in to your crowd',description:'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',category:'Jackets',default_price:'140.00',created_at:'2021-02-23T04:22:44.728Z',updated_at:'2021-02-23T04:22:44.728Z',features:[{feature:'Fabric',value:'Canvas'},{feature:'Buttons',value:'Brass'}]
      },
      product_styles: {
        product_id:'17067',results:[{style_id:90250,name:'Forest Green & Black',original_price:'140.00',sale_price:null,'default?':true,photos:[Array],skus:[Object]},{style_id:90251,name:'Desert Brown & Tan',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]},{style_id:90252,name:'Ocean Blue & Grey',original_price:'140.00',sale_price:'100.00','default?':false,photos:[Array],skus:[Object]},{style_id:90253,name:'Digital Red & Black',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}, {style_id: 90254, name: 'Sky Blue & White', original_price: '140.00', sale_price: '100.00', 'default?': false,photos:[Array],skus:[Object]},{style_id:90255,name:'Dark Grey & Black',original_price:'170.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}]
      },
    };
    const wrapper = shallow(<ProductDetail product={props.product} product_styles={props.product_styles}/>);
    expect(wrapper.find(ProductInfo)).toHaveLength(1);
  })

  it('renders Description Component', () => {
    const props = {
      product: {
        id:17067,campus:'hr-rfp',name:'Camo Onesie',slogan:'Blend in to your crowd',description:'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',category:'Jackets',default_price:'140.00',created_at:'2021-02-23T04:22:44.728Z',updated_at:'2021-02-23T04:22:44.728Z',features:[{feature:'Fabric',value:'Canvas'},{feature:'Buttons',value:'Brass'}]
      },
      product_styles: {
        product_id:'17067',results:[{style_id:90250,name:'Forest Green & Black',original_price:'140.00',sale_price:null,'default?':true,photos:[Array],skus:[Object]},{style_id:90251,name:'Desert Brown & Tan',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]},{style_id:90252,name:'Ocean Blue & Grey',original_price:'140.00',sale_price:'100.00','default?':false,photos:[Array],skus:[Object]},{style_id:90253,name:'Digital Red & Black',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}, {style_id: 90254, name: 'Sky Blue & White', original_price: '140.00', sale_price: '100.00', 'default?': false,photos:[Array],skus:[Object]},{style_id:90255,name:'Dark Grey & Black',original_price:'170.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}]
      },
    };
    const wrapper = shallow(<ProductDetail product={props.product} product_styles={props.product_styles}/>);
    expect(wrapper.find(Description)).toHaveLength(1);
  })

  it('renders Features Component', () => {
    const props = {
      product: {
        id:17067,campus:'hr-rfp',name:'Camo Onesie',slogan:'Blend in to your crowd',description:'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',category:'Jackets',default_price:'140.00',created_at:'2021-02-23T04:22:44.728Z',updated_at:'2021-02-23T04:22:44.728Z',features:[{feature:'Fabric',value:'Canvas'},{feature:'Buttons',value:'Brass'}]
      },
      product_styles: {
        product_id:'17067',results:[{style_id:90250,name:'Forest Green & Black',original_price:'140.00',sale_price:null,'default?':true,photos:[Array],skus:[Object]},{style_id:90251,name:'Desert Brown & Tan',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]},{style_id:90252,name:'Ocean Blue & Grey',original_price:'140.00',sale_price:'100.00','default?':false,photos:[Array],skus:[Object]},{style_id:90253,name:'Digital Red & Black',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}, {style_id: 90254, name: 'Sky Blue & White', original_price: '140.00', sale_price: '100.00', 'default?': false,photos:[Array],skus:[Object]},{style_id:90255,name:'Dark Grey & Black',original_price:'170.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}]
      },
    };
    const wrapper = shallow(<ProductDetail product={props.product} product_styles={props.product_styles}/>);
    expect(wrapper.find(Features)).toHaveLength(1);
  })

  it('renders Share Component', () => {
    const props = {
      product: {
        id:17067,campus:'hr-rfp',name:'Camo Onesie',slogan:'Blend in to your crowd',description:'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',category:'Jackets',default_price:'140.00',created_at:'2021-02-23T04:22:44.728Z',updated_at:'2021-02-23T04:22:44.728Z',features:[{feature:'Fabric',value:'Canvas'},{feature:'Buttons',value:'Brass'}]
      },
      product_styles: {
        product_id:'17067',results:[{style_id:90250,name:'Forest Green & Black',original_price:'140.00',sale_price:null,'default?':true,photos:[Array],skus:[Object]},{style_id:90251,name:'Desert Brown & Tan',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]},{style_id:90252,name:'Ocean Blue & Grey',original_price:'140.00',sale_price:'100.00','default?':false,photos:[Array],skus:[Object]},{style_id:90253,name:'Digital Red & Black',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}, {style_id: 90254, name: 'Sky Blue & White', original_price: '140.00', sale_price: '100.00', 'default?': false,photos:[Array],skus:[Object]},{style_id:90255,name:'Dark Grey & Black',original_price:'170.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}]
      },
    };
    const wrapper = shallow(<ProductDetail product={props.product} product_styles={props.product_styles}/>);
    expect(wrapper.find(Share)).toHaveLength(1);
  })

  it('renders Star Rating Component', () => {
    const props = {
      product: {
        id:17067,campus:'hr-rfp',name:'Camo Onesie',slogan:'Blend in to your crowd',description:'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',category:'Jackets',default_price:'140.00',created_at:'2021-02-23T04:22:44.728Z',updated_at:'2021-02-23T04:22:44.728Z',features:[{feature:'Fabric',value:'Canvas'},{feature:'Buttons',value:'Brass'}]
      },
    };
    const wrapper = shallow(<ProductInfo product={props.product}/>);
    expect(wrapper.find(StarRating)).toHaveLength(1);
  })

  it('renders Style Selector Component', () => {
    const props = {
      product: {
        id:17067,campus:'hr-rfp',name:'Camo Onesie',slogan:'Blend in to your crowd',description:'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',category:'Jackets',default_price:'140.00',created_at:'2021-02-23T04:22:44.728Z',updated_at:'2021-02-23T04:22:44.728Z',features:[{feature:'Fabric',value:'Canvas'},{feature:'Buttons',value:'Brass'}]
      },
      product_styles: {
        product_id:'17067',results:[{style_id:90250,name:'Forest Green & Black',original_price:'140.00',sale_price:null,'default?':true,photos:[Array],skus:[Object]},{style_id:90251,name:'Desert Brown & Tan',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]},{style_id:90252,name:'Ocean Blue & Grey',original_price:'140.00',sale_price:'100.00','default?':false,photos:[Array],skus:[Object]},{style_id:90253,name:'Digital Red & Black',original_price:'140.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}, {style_id: 90254, name: 'Sky Blue & White', original_price: '140.00', sale_price: '100.00', 'default?': false,photos:[Array],skus:[Object]},{style_id:90255,name:'Dark Grey & Black',original_price:'170.00',sale_price:null,'default?':false,photos:[Array],skus:[Object]}]
      },
    };
    const wrapper = shallow(<ProductDetail product={props.product} product_styles={props.product_styles}/>);
    expect(wrapper.find(StyleSelector)).toHaveLength(1);
  })
})