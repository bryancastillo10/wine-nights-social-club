import { StyleSheet} from 'react-native'
import MainPageContainer from '@/components/layout/MainPageContainer'
import PostCard from '@/features/post/components/PostCard'

const home = () => {
  return (
    <MainPageContainer withHeader>
      <PostCard />
    </MainPageContainer>
  )
}

export default home

const styles = StyleSheet.create({})