import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator, Button } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import moment from 'moment'

import { getNews } from '../publics/actions/news'

export class NewsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        await this.makeRequest()
    }

    makeRequest = async () => {
        await this.props.dispatch(getNews())
            .then(() => {
                this.setState({
                    news: this.props.newsState,
                    isLoading: false
                })
            })
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.urlToImage }} alt={item.content} style={styles.cardImage} resizeMode='stretch' />
                <View style={styles.cardBody}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.txtLeft}>Author: {item.author}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.txtRight}>{moment(item.publishedAt).format('DD MMM YYYY')}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{item.description}</Text>
                    <Button title="Read" onPress={() => this.props.navigation.navigate('Detail')} />
                </View>
            </View>
        )
    }

    render() {
        console.warn('data news: ', this.state.news)
        return (
            <>
                {
                    this.state.isLoading ?
                        <ActivityIndicator size='large' color='#03a4df' />
                        :
                        <FlatList
                            data={this.state.news}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.url}
                        />
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsState: state.news.newsList
    }
}

export default withNavigation(connect(mapStateToProps)(NewsList))

const styles = StyleSheet.create({
    txtRight: {
        textAlign: 'right',
        alignContent: 'flex-end',
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: 'teal'
    },
    txtLeft: {
        textAlign: 'left',
        alignContent: 'flex-start',
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: 'teal'
    },
    col: {
        flexDirection: 'column',
        width: '50%'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 5
    },
    description: {
        fontSize: 14,
        marginVertical: 10,
        textAlign: 'justify'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    cardBody: {
        margin: 10
    },
    cardImage: {
        width: '100%',
        height: 150
    },
    card: {
        backgroundColor: 'white',
        elevation: 5,
        width: '100%',
        marginBottom: 30
    }
})