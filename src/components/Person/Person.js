import React from 'react';

const Person = (props) => {
	return (
		<div>
			<p>My name is {props.name} and I'm {props.age} years old.</p>
			<button onClick={props.click}>delete {props.name}</button>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default Person;