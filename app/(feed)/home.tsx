import { Text, View, ScrollView } from 'react-native';

import ScreenWrapper from '@/components/layout/ScreenWrapper';

import FeedHeader from '@/features/post/components/FeedHeader';

const Home = () => {
  return (
      <ScreenWrapper>
          <FeedHeader/>
          <ScrollView>
            <Text>Some posts should be here</Text>
          </ScrollView>
      </ScreenWrapper>
  )
}

export default Home

