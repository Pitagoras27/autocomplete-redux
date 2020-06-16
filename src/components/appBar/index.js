import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionSuggestions } from '../../redux/actions/actionSuggestions';
import { actionResults } from '../../redux/actions/actionResults';
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

    onChangeSelection = text => {
        const { actionResults } = this.props;
        actionResults(text);
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
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = store => ({
    suggestions: store.suggestions,
});

const mapDispatchToProps = {
    actionSuggestions,
    actionResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(IAppBar);
