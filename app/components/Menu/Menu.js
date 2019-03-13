import React, { Component } from 'react';
import { connect } from 'react-redux';
import heartLogo from '../../assets/heart.svg';
import downloadLogo from '../../assets/download.svg';
import { changeOption } from '../../store/actions/option';

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = option => {
		if (option != this.props.activeOption) this.props.newOption(option);
	};

	render() {
		let menuItems = Object.keys(this.props.options).map((item, index) => {
			return (
				<li key={item}>
					<button onClick={() => this.handleClick(item)}>{item}</button>
				</li>
			);
		});

		return (
			<div>
				<ul>{menuItems}</ul>
				<div>
					<img src={heartLogo} />
					<img src={downloadLogo} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		activeOption: state.option.activeOption,
		options: state.option.options
	};
};

const mapDispatchToProps = dispatch => {
	return {
		newOption: newOption => dispatch(changeOption(newOption))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);
