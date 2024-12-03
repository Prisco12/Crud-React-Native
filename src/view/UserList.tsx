import { Alert, FlatList, Text, View } from "react-native";
import users from "../data/users";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import { useContext } from "react";
import UsersContext from "../context/UsersContext";


const UserList = (props: any) => {

    const { state, dispatch } = useContext(UsersContext)
    console.warn(Object.keys(state))

    function confirmUserDeletion(user: any) { 
        return Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress: () => {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({item: user}: any) {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar
                rounded
                source={{uri: user.avatarUrl}}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button 
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
                <Button 
                    type="clear"
                    icon={<Icon name="delete" size={25} color="orange"/>}
                    onPress={() => confirmUserDeletion(user)}
                />
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                // keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

export default UserList;