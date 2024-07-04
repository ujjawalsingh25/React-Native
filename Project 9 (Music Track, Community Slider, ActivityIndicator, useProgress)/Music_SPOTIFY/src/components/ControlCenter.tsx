
// usePlaybackState -> HOOK by "react-native-track-player" -->> Use to keep track of all states like play, pause, next
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import TrackPlayer, {State ,usePlaybackState} from "react-native-track-player";
import Icon from "react-native-vector-icons/MaterialIcons";
import { playbackService } from "../../musicPlayerServices";

const ControlCenter = () => {

    const playBackState = usePlaybackState()
    
    const skipToNext = async () => {                // Next Button
        await TrackPlayer.skipToNext();
    }
    const skipToPrevious = async () => {           // Previous Button
        await TrackPlayer.skipToPrevious();
    }
    const togglePlayback = async (playback : State) => {        // State from "react-native-track-player"
        // const currentTrack = await TrackPlayer.getCurrentTrack()
        // if(currentTrack != null){
        //     if(playback === State.Paused || playback === State.Ready) {
        //         await TrackPlayer.play();
        //     } else {
        //         await TrackPlayer.pause();
        //     }
        // }
        await TrackPlayer.play()
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            {/* <Pressable onPress={() => togglePlayback(playBackState)}>
                <Icon 
                    style={styles.icon} 
                    name={playBackState === State.Playing ? "pause" : "play-arrow"} 
                    size={75} 
                />
            </Pressable> */}
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter