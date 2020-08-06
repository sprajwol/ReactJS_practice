import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import { uuid } from "uuidv4";

export default class Add extends Component {
	state = {
		id: uuid(),
		name: "a",
		username: "",
	};

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({ name: "", username: "" });
	};

	render() {
		const { name, username } = this.state;
		return (
			<Modal trigger={<Button>Add New User</Button>}>
				<Modal.Header>Add New User</Modal.Header>
				<Modal.Content>
					<Form onSubmit={this.onFormSubmit}>
						<Form.Input
							name="name"
							label="Full Name:"
							value={name}
							onChange={this.onInputChange}
						></Form.Input>
						<Form.Input
							name="username"
							label="User Name:"
							value={username}
							onChange={this.onInputChange}
						></Form.Input>
						<Button content="Submit" type="submit"></Button>
					</Form>
				</Modal.Content>
			</Modal>
		);
	}
}
