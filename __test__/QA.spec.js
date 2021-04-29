import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionsAnswers from '../client/src/components/QuestionsAnswers/QuestionsAnswers.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Questions and Answers tests', () => {
  it('renders Questions and Answers component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuestionsAnswers questions={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);

  })
})
