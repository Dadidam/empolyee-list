import React from 'react';
import Editor from './Editor';

export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showMenu: false
      };
	  
	  this.handleClick = this.handleClick.bind(this);
    }
	handleClick(e) {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}
    render() {
		return (
			<div style={{ margin: '0px auto', width: '750px' }}>
				<h2>Employee list</h2>
				<div style={{ float: 'left', width: '450px' }}>
					<button value={this.state.showMenu} onClick={this.handleClick}>Show list editor</button>
				</div>
				<Editor show={this.state.showMenu}/>
			</div>
		)
    }
}
