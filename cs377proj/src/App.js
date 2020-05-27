

import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"
import { StyleSheet, Text, View } from "react-native"


function onChange(newValue) {
  console.log("change", newValue);
}

class App extends React.Component {
	render() {
		return (
			<div>
			<View>
				<Text style={styles.text}>Editor with Tonal Indentation</Text>
			</View>
			<AceEditor
				mode="python"
				theme="textmate"
				onChange={onChange}
				value={"def remove_duplicates(str): \n	unique = []\n	for char in str:\n		if char not in unique:\n			unique.append(char)\n	print(unique)"}
				name="UNIQUE_ID_OF_DIV"
				editorProps={{ $blockScrolling: true }}
				
			/>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		fontWeight: "bold",
		fontSize: 30
	}
})

export default App



