import React from 'react';
import AceEditor from 'react-ace';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// import 'brace/mode/javascript';
// import 'brace/theme/monokai';

const DIV = styled.div`
	width: 60%;
	height: 400px;
	margin: 0 auto;
	margin-top: 100px;
	text-align: center;
`;

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

	render() {
		var styles = {
			display: 'inline-block'
		};

		return (
			<DIV>
				<AceEditor
					mode="javascript"
					theme="monokai"
					name="UNIQUE_ID_OF_DIV"
					editorProps={{ $blockScrolling: true }}
					style={styles}
					className="editor-display"
				/>
				<div id="showcanvas" />
			</DIV>
		);
	}
}

export default EditorDisplay;
