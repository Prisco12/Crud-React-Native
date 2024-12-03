import { NavigationContainer } from "@react-navigation/native";
import UserForm from "./view/UserForm";
import UserList from "./view/UserList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./context/UsersContext";



const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    animation: "fade_from_bottom"
                }}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({navigation}) => {
                            return {
                                title: 'Lista de Usuários',
                                headerRight: () => (
                                    <Button
                                        type='clear'
                                        icon={<Icon name="add" size={25} color='white' />}
                                        onPress={() => {
                                            navigation.navigate('UserForm')
                                        }}

                                    />
                                ),
                            };
                        }}
                     
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{ title: 'Formulário de Usuários' }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: 'orange',
    }
    
}

export default App;