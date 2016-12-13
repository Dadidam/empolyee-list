import React from 'react';

export default class Editor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //showMenu: false
      };
    }
    render() {
		if (!this.props.show) {
			return null;
		}
		
		return (
			<div style={{ backgroundColor: '#eee', float: 'left', width: '300px' }}>Editor</div>
		)
    }
}
