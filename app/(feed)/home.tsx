import { ScrollView, ImageBackground } from 'react-native';

import ScreenWrapper from '@/components/layout/ScreenWrapper';

import FeedHeader from '@/features/post/components/FeedHeader';
import PostCard from '@/features/post/components/PostCard';

import { homeStyle } from '@/style/home/home.style';

const Home = () => {
  const feedBg = "../../assets/images/feed-bg.png";
  return (
      <ScreenWrapper>
      <FeedHeader />
      <ImageBackground
          style={homeStyle.container}
          source={require(feedBg)}
          resizeMethod="resize"
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
            <PostCard/>
        </ScrollView>
      </ImageBackground>
      </ScreenWrapper>
  )
}

export default Home

