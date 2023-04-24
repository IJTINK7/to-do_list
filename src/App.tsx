import React from 'react';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<h3>What to learn</h3>
			<div>
				<input type="text"/>
				<button>+</button>
			</div>
			<ul>
				<li> <input type="checkbox" checked={true}/>HTML&CSS</li>
				<li> <input type="checkbox" checked={true}/>JS</li>
				<li> <input type="checkbox" checked={false}/>React</li>
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Complete</button>
			</div>
		</div>
	);
}

export default App;
