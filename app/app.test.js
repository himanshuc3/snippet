import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// TEST passes if no error is thrown
// inside of test callback.
// A GOOD TEST tests behaviour instead of
// implementation details
test('renders without error', () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find("[data-test='component-app']");
	console.log(appComponent.debug());
	expect(appComponent.length).toBe(0);
});
