
import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image, FlatList } from "react-native";
import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents,
} from "react-native-track-player";

import { playListData } from "../Constants";
import SongInfo from "../components/SongInfo";
import SongSlider from "../components/SongSlider";
import ControlCenter from "../components/ControlCenter";

const {width} = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>()

    // lec 46 -> time 10:00
    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break;        
        }
    })

    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (            // if track is present and also the artwork
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}     
                                                // if track is present and also the artwork then convert to string
                        />
                    )}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()}
            />

            <SongInfo track={track}/>
            <SongSlider />
            <ControlCenter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
});
  

export default MusicPlayer;