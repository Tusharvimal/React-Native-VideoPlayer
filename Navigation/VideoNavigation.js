import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FilesScreen from "../Screens/FilesScreen";
import FoldersScreen from "../Screens/FoldersScreen";
import VideosScreen from "../Screens/VideosScreen";

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
};

const VideoNavigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#4d4dff'
                    },
                    headerTintColor: 'white'
                }}
            >
                <Stack.Screen name='Folders' component={FoldersScreen} />
                <Stack.Screen name='Files' component={FilesScreen}
                    options={({ route }) => ({
                        headerTitle: route.params.title
                    })}
                />
                <Stack.Screen name='Video' component={VideosScreen}
                    options={({ route }) => ({
                        headerTransparent: true,
                        headerTitle: route.params.title,
                        headerTintColor: 'white'
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default VideoNavigation;