import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
