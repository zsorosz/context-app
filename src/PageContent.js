import React, { Component } from 'react'

export default class PageContent extends Component {
    render() {
        const styles = {
            width: "100vw",
            height: "100vh",
            backgroundColor: "white"
        }
        return (
            <div style={styles}>{this.props.children}</div>
        )
    }
};

