import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: {
				feature1: {},
				feature2: {}
			}
		};
	}

	render() {
		let menuItems = Object.keys(this.state.list).map((item, index) => {
			return <li key={item}>{item}</li>;
		});

		return <ul />;
	}
}

export default Menu;
