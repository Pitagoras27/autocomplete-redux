import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionSuggestions } from '../../redux/actions/actionSuggestions';
import Page from './page';
import './styles.css';

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onChangeText = text => {
        const { actionSuggestions } = this.props;
        this.setState({ text });
        actionSuggestions(text);
    }

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

const mapStateToProps = store => ({
    suggestions: store.suggestions,
});

const mapDispatchToProps = {
    actionSuggestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(IAppBar);
