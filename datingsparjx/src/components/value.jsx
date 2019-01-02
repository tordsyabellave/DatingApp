import React, { Component } from 'react';

class Values extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/values').then(response => response.json()).then(data => this.setState({ values: data }));
    }
    render() {
        return (
            <React.Fragment>
                {this.state.values.map(value => <p key={value.id}>{value.id}, {value.name}</p>)}
            </React.Fragment>

        );
    }
}

export default Values;