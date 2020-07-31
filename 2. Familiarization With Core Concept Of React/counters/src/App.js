import React, { Component } from "react";
import Profile from "./components/Profile";

export default class AppOne extends Component {
	state = [
		{
			id: 1,
			name: "Sita",
			img: "https://semantic-ui.com/images/avatar2/small/rachel.png",
			description: "Last seen watching The Godfather yesterday.",
		},
		{
			id: 2,
			name: "Ram",
			img: "https://semantic-ui.com/images/avatar2/small/matthew.png",
			description: "Last seen watching The Godfather yesterday.",
		},
		{
			id: 3,
			name: "Sam",
			img: "https://semantic-ui.com/images/avatar/small/jenny.jpg",
			description: "Last seen watching The Godfather yesterday.",
		},
		{
			id: 4,
			name: "Tam",
			img: "https://semantic-ui.com/images/avatar/small/veronika.jpg",
			description: "Last seen watching The Godfather yesterday.",
		},
	];
	render() {
		return (
			<div>
				{this.state.map((profile) => {
					return <Profile profileprops={profile} key={profile.id} />;
				})}
			</div>
		);
	}
}
