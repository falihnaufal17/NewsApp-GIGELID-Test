import React, { Component } from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview';

export class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: this.props.navigation.getParam('newsUrl')
        }
    }
    render() {
        console.warn('url: ', this.state.url)
        return (
            <WebView
                source={{ uri: `${this.state.url}` }}
            />
        )
    }
}

export default Detail
