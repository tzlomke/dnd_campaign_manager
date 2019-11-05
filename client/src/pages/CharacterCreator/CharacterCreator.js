import React, { Component } from "react";
import "./style.css";

class CharacterCreator extends Component {
	
	state = {
		name: "",
		race: "",
		subRace: "",
		class: "",
		hitPoints: 0,
		proficiencies: "",
		alignment: "",
		lifestyle: "",
		hair: "",
		skin: "",
		eyes: "",
		height: 0,
		weight: 0,
		age: 0,
		gender: "",
		personalityTraits: "",
		ideals: "",
		bonds: "",
		flaws: "",
		backstory: ""
	};

	render () {
		return (
			<div>
				
			</div>
		);
	}
}

export default CharacterCreator;