import React, {useState} from "react";
import {ActivityIndicator, Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import WebView from "react-native-webview";
import {TextInput} from "react-native-paper";
import axios from "axios";

const StreamView = () => {

    const IP_ADDRESS = "sahan.local"
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        const requestBody = {
            text: message
        }
        try {
            setLoading(true)
            await axios.post(`http://${IP_ADDRESS}:8080`, requestBody)
                .then((response) => {
                    console.log(response.data)
                    setMessage("")
                })
                .catch((error) => {
                    console.error(error)
                    Alert.alert("Error!", "Couldn't send message. Please retry...")
                })
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={{flex: 1, padding: 10}}>
            <WebView
                style={styles.container}
                source={{uri: `http://${IP_ADDRESS}:8080/video_feed`}}
            />
            <View style={{flex: 0.3}}>
                <View style={{flex: 1}}>
                    <TextInput
                        style={{width: '100%', flex: 0.65}}
                        placeholder="Message"
                        mode='outlined'
                        activeOutlineColor={'#212121'}
                        multiline={true}
                        value={message}
                        onChangeText={(msg) => setMessage(msg)}
                    />
                    <TouchableOpacity
                        style={styles.btnSend}
                        onPress={() => sendMessage()}
                    >
                        {loading ? (
                            <ActivityIndicator color={'white'} size={'small'}/>
                        ) : (
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Send</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default StreamView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    btnSend: {
        flex: 0.35,
        backgroundColor: "#212121",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 4,
        elevation: 4
    }
})