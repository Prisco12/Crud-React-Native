import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import UsersContext from "../context/UsersContext";

const UserForm = (props: any) => {

    const { state, dispatch } = useContext(UsersContext)
    const [user, setUser] = useState(props.route.params ? props.route.params : {}) 
    return (
        <View style={styles.form}>
            <Input
                label="Nome"
                placeholder="Informe o nome"
                value={user.name ? user.name : ''}
                leftIcon={{type: 'font-awesome', name: 'user'}}
                onChangeText={value => setUser({...user, name: value})}
            />
            <Input
                label="Email"
                placeholder="Informe o email"
                value={user.email ? user.email : ''}
                leftIcon={{type: 'font-awesome', name: 'envelope'}}
                onChangeText={value => setUser({...user, email: value})}
            />
            <Input
                label="Url do Avatar"
                placeholder="Informe a Url"
                value={user.avatarUrl ? user.avatarUrl : ''}
                leftIcon={{type: 'font-awesome', name: 'link'}}
                onChangeText={value => setUser({...user, avatarUrl: value})}
            />
            <Button
                title={"Salvar"}
                type="solid" 
                icon={{
                    name: 'save',
                    type: 'font-awesome',
                    size: 18,
                    color: 'white',
                  }}
                iconRight={false}
                iconContainerStyle={{ marginRight: 5 }}
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'addUser',
                        payload: user
                    })
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    form: {
        padding: 12
    }
})

export default UserForm;