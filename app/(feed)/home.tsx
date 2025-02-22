import { Text, View, ScrollView } from 'react-native';

import ScreenWrapper from '@/components/layout/ScreenWrapper';

import FeedHeader from '@/features/post/components/FeedHeader';
import { homeStyle } from '@/style/home/home.style';

const Home = () => {
  return (
      <ScreenWrapper>
          <FeedHeader/>
          <ScrollView style={homeStyle.container}>
            <Text>Some posts should be here</Text>
          </ScrollView>
      </ScreenWrapper>
  )
}

export default Home

