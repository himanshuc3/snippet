import React from 'react';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { theme } from '../../styles';

// import 'brace/mode/javascript';
// import 'brace/theme/monokai';

// CSS starts---
const Wrapper = styled.div`
	width: 80%;
	margin: 20px auto;

	// background: red;
`;

const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: yellow;
	border-radius: 5px;
`;

const TopBar = styled.div`
	width: 100%;
	height: 40px;
	background: white;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	display: flex;
	align-items: center;

	& span {
		display: inline-block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: blue;
		margin-right: 10px;
	}

	& span:nth-child(1) {
		margin-left: 10px;
		background: #ee5f59;
	}
	& span:nth-child(2) {
		background: #f7ba44;
	}
	& span:nth-child(3) {
		background: #5dc94a;
	}
`;

const WrapperWindow = styled.div`
	width: 100%;
	padding: 40px;
	padding-bottom: 34px;
`;

// const WrapperEditor = styled.div`
// 	padding: 0 20px;
// 	background: white;
// `

// CSS ends---

class EditorDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: `
// Set variables
var output = "";

// Outer loop
for (i = 1; i <= 10; i++) {

	output += "<h1>" + i + " times table</h1>";
	output += "<ul>";

	// Inner loop
	for (j = 1; j <= 10; j++) {
		output += "<li>" + j + " x " + i + " = " + j * i;
	}

	output += "</ul>";

}

// Output results to the above HTML element
document.getElementById("msg").innerHTML = output;
        `
		};
	}

	onLoad = editor => {
		editor.renderer.setPadding(20);
	};

	render() {
		var styles = {
			display: 'inline-block',
			width: '100%',
			fontSize: this.props.editor_options.fontSize,
			borderRadius: '5px'
		};

		var imageStyle = {
			background: this.props.editor_options.background
		};

		return (
			<Wrapper style={{ ...this.props.style }}>
				<ImageContainer style={imageStyle} className="editor-display-wrapper">
					<WrapperWindow>
						<TopBar>
							<span />
							<span />
							<span />
						</TopBar>
						{/* <WrapperEditor> */}
						<AceEditor
							mode={this.props.editor_options.language}
							theme={this.props.editor_options.theme}
							name="editor"
							value={this.state.code}
							editorProps={{ $blockScrolling: true }}
							style={styles}
							className="editor-display"
							showGutter={false}
							showPrintMargin={false}
							wrapEnabled={true}
							onLoad={this.onLoad}
							maxLines={Infinity}
						/>
						{/* </WrapperEditor> */}
					</WrapperWindow>
				</ImageContainer>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		editor_options: state.editor
	};
};

export default connect(
	mapStateToProps,
	null
)(EditorDisplay);
