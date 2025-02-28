import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View } from 'react-native';

// const source =
//   'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

interface VideoScreenProps {
  source: string;
}

const VideoScreen = ({source}:VideoScreenProps) => {

  const player = useVideoPlayer(source, player => {
    player.loop = true;
    // player.play();
  });
  

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <View style={styles.controlsContainer}>
       
      </View>
    </View>
  );
}

export default VideoScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
