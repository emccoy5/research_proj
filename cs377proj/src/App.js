

import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"
import Simon from "./simonSound1.mp3";
import cLong from "./CLong.mp3";
import eLong from "./ELong.mp3";
import gLong from "./GLong.mp3";
import bLong from "./B3.mp3";
import eShort from "./shortE.mp3";
import cShort from "./cShort.mp3";
import bShort from "./BShort.mp3";
import gShort from "./gShort.mp3";
import { StyleSheet, Text, View } from "react-native"


function onChange(newValue) {
  console.log("change", newValue);
}

function playAudio1(){
	var short = new Audio(cShort)
	short.play();
	var audio = new Audio(cLong);
	audio.volume = .5;
	audio.play();
	console.log("playing audio0")

}
function playAudio2(){
	var short = new Audio(eShort)
	short.play();
	var audio = new Audio(eLong);
	audio.volume = .5;
	audio.play();
	console.log("playing audio1")
}

function playAudio3(){
	var short = new Audio(gShort)
	short.play();
	var audio = new Audio(gLong);
	audio.volume = .5;
	audio.play();
	console.log("playing audio2")
}

function playAudio0(){
	var short = new Audio(bShort)
	short.play();
	var audio = new Audio(bLong);
	audio.play();
	audio.volume = .5;
	console.log("playing audio3")
}

function onCursorChange(selection) {
	const cursorPosition = selection.getCursor().row;
	console.log(cursorPosition)
	if (cursorPosition === 0){
		playAudio0()
	}
	if (cursorPosition === 1){
		playAudio1()
	}
	if (cursorPosition === 2){
		playAudio1()
	}
	if (cursorPosition === 3){
		playAudio2()
	}
	if (cursorPosition === 4){
		playAudio3()
	}
	if (cursorPosition === 5){
		playAudio1()
	}

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
				onCursorChange = {onCursorChange}
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



