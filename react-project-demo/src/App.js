import React, { Component } from "react";
import { Container, Input } from "semantic-ui-react";

import Add from "./components/Add";
import View from "./components/View";

export default class App extends Component {
	state = {
		users: [
			{ id: 1, name: "Ram Shrestha", username: "ramestha" },
			{ id: 2, name: "Shyam Khatri", username: "shyamkhatri" },
			{ id: 3, name: "Hari Gopal", username: "harigopal" },
		],
	};

	onSearchChange = (event) => {
		console.log(event.target.value);
	};

	onFormSubmit = (user) => {
		console.log(user);
		const { users } = this.state;
		this.setState({ users: [...users, user] });
	};

	render() {
		const { users } = this.state;

		return (
			<Container>
				<div>
					<Add onSubmit={this.onFormSubmit}></Add>
					<Input
						icon="search"
						placeholder="search"
						onChange={this.onSearchChange}
					></Input>
					<View data={users}></View>
				</div>
			</Container>
		);
	}
}
