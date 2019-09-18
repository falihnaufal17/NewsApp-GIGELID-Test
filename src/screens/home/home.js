import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import NewsList from '../../components/newsList';

export class Home extends Component {
    render() {
        return (
            <View>
                <View style={styles.AppBar}>
                    <View style={styles.header}>
                        <Image source={{ uri: `https://gigel.id/images/logo-gigel-beta.png` }} alt='gigel logo' style={styles.logo} />
                        <Text style={styles.title}>News</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <NewsList />
                </View>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    content: {
        margin: 20
    },
    title: {
        position: 'absolute',
        color: 'white',
        left: 80,
        top: 15,
        fontWeight: 'bold',
        fontSize: 20,
    },
    header: {
        margin: 15
    },
    logo: {
        width: 75,
        height: 39,
    },
    AppBar: {
        width: '100%',
        height: 60,
        backgroundColor: '#03a4df',
        elevation: 5
    }
})