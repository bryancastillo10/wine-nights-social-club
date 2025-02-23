import MainPageContainer from '@/components/layout/MainPageContainer'
import PostCard from '@/features/post/components/PostCard'

const Home = () => {
  return (
    <MainPageContainer withHeader>
      <PostCard />
    </MainPageContainer>
  )
}

export default Home;
