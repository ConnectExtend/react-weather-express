import React from "react";

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        // Main App State
        this.state = {
            appName: "Weather Express"
        };
    }

    render() {
        // creates a new component with these props being passed in
        // mutates the state and passes it to the child
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { ...this.state });
        });
    }
}