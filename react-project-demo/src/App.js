import React, { Component } from "react";
import { Container, Input } from "semantic-ui-react";

import Add from "./components/Add";
import View from "./components/View";

import users from "./api/users";

export default class App extends Component {
	state = {
		users: [],
		query: "",
		results: [],
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		const Response = await users.get("/users");
		this.setState({ users: Response.data });
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

	onFormSubmit = async (user) => {
		// console.log(user);
		// const { users } = this.state;
		// this.setState({ users: [...users, user] });
		await users.post("/users", user);
		this.fetchData();
	};

	onUserDelete = async (id) => {
		// const { users } = this.state;
		// this.setState({
		// 	users: users.filter((user) => user.id !== id),
		// });
		await users.delete(`/users/${id}`);
		this.fetchData();
	};

	getUserById = (id) => {
		const { users } = this.state;
		const user = users.filter((user) => user.id === id);
		return user[0];
	};

	onEdit = async (id, updatedUser) => {
		// const { users } = this.state;
		// this.setState({
		// 	users: users.map((user) => (user.id === id ? updatedUser : user)),
		// });
		await users.patch(`/users/${id}`, updatedUser);
		this.fetchData();
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
					<View
						data={data}
						onDeleteClick={this.onUserDelete}
						getUserById={this.getUserById}
						onEdit={this.onEdit}
					></View>
				</div>
			</Container>
		);
	}
}
