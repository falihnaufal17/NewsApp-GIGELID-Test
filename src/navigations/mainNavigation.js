import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home/home';
import Detail from '../screens/detail/detail';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(AppNavigator)