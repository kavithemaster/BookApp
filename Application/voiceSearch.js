import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import Voice from '@react-native-community/voice';
import Icon from "react-native-vector-icons/Feather"
import AppContext from '../Appcontext';


const VoiceRecognition = () => {

    // Setting up both voice search and normal search in a single Context
    const { setSearch } = useContext(AppContext)

    // useState for Voice Listening
    const [voiceListening, setVoiceListening] = useState(false)

    //It Handles Voice results and updated in setSearch Context
    const handleVoiceResults = (result) => {
        const res = result?.value[0]
        setSearch(res ?? '')
    }

    // Code for Start of Voice Scarch
    const startVoiceToText = async () => {
        setVoiceListening(true)
        try {
            await Voice.start('en-US')
        } catch (error) {
            console.error(error)
        }
    }
    // Code for Stop of Voice Search
    const stopVoiceToText = async () => {
        setVoiceListening(false)
        try {
            await Voice.stop()
        } catch (error) {
            console.error(error)
        }
    }
    Voice.onSpeechResults = handleVoiceResults

    //Main code of Execution
    return (
        <View>
            <Icon onPress={voiceListening ? stopVoiceToText : startVoiceToText} name={voiceListening ? "mic" : "mic-off"} size={30} color={"black"} />
        </View>
    )
}

export default VoiceRecognition;
