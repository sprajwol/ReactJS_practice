import React from "react";

function Profile(props) {
	const { profileprops } = props;
	console.log(profileprops);
	return (
		<div className="ui list">
			<div className="item">
				<img className="ui avatar image" src={profileprops.img} alt="/" />
				<div className="content">
					<a className="header" href="/">
						{profileprops.name}
					</a>
					<div className="description">{profileprops.description}</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
