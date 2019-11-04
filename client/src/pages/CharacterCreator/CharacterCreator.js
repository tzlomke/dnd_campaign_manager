import React, { Component } from "react";
import "./style.css";

class CharacterCreator extends Component {
	
	state = {
		name: "",
		race: "",
		subRace: "",
		class: "",
		hitPoints: "",
		proficiencies: "",
		alignment: "",
		lifestyle: "",
		hair: "",
		skin: "",
		eyes: "",
		height: "",
		weight: "",
		age: "",
		gender: "",
		personalityTraits: "",
		ideals: "",
		bonds: "",
		flaws: "",
		backstory: ""
	};

	render () {
		return (
			<div><p>Character Creator</p></div>
		);
	}
}

export default CharacterCreator;