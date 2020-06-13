import React, { Component } from 'react';

import Page from './page';
import './styles.css';

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onChangeText = text => this.setState({ text });

    render() {
        const {
            text,
        } = this.state;

        const {
            suggestions,
        } = this.props;

        return (
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={() => { }}
            />
        );
    }
}

export default IAppBar;
