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
		query: "",
		results: [],
	};

	onSearchChange = (event) => {
		const value = event.target.value;
		const { users } = this.state;
		this.setState({ query: value });
		const results = users.filter((user) => {
			const regex = new RegExp(value, "gi");
			return user.name.match(regex);
		});
		this.setState({ results });
		console.log("OUTPUT: App -> onSearchChange -> results", results);
	};

	onFormSubmit = (user) => {
		console.log(user);
		const { users } = this.state;
		this.setState({ users: [...users, user] });
	};

	onUserDelete = (id) => {
		const { users } = this.state;
		this.setState({
			users: users.filter((user) => user.id !== id),
		});
	};

	render() {
		const { users, results, query } = this.state;
		const data = results.length === 0 && !query ? users : results;

		return (
			<Container>
				<div>
					<Add onSubmit={this.onFormSubmit}></Add>
					<Input
						icon="search"
						placeholder="search"
						onChange={this.onSearchChange}
					></Input>
					<View data={data} onDeleteClick={this.onUserDelete}></View>
				</div>
			</Container>
		);
	}
}
