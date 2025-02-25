import MainPageContainer from '@/components/layout/MainPageContainer'
import { View } from 'react-native';

import { BackButton } from '@/components/ui'

import ViewProfile from '@/features/user/components/ViewProfile';

const profile = () => {
  return (
      <MainPageContainer withHeader={false}>
        <BackButton />
        <View style={{marginTop: 24}}>
            <ViewProfile />
        </View>
      </MainPageContainer>
  )
}

export default profile;
