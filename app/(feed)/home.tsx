import MainPageContainer from '@/components/layout/MainPageContainer'
import PostCard from '@/features/post/components/PostCard'

import { posts } from '@/features/post/api/mockData';
import { users } from '@/features/user/api/mockData';

const Home = () => {
  const loggedInUserId = "1001";
  const post = posts.find(p => p.postId === loggedInUserId)
  
  return (
        <MainPageContainer withHeader>
      {posts.map((post) => {
        const user = users.find(u => u.userId === post.userId);
        if (!user) return null; // Optionally handle missing user case

     
        const isSelfPost = post.userId === loggedInUserId;

        return (
          <PostCard
            key={post.postId}
            user={user}
            post={post}
            isSelfPost={isSelfPost}
            handleEdit={() => console.log("Editing post:", post.postId)}
            handleDelete={() => console.log("Deleting post:", post.postId)}
          />
        );
      })}
    </MainPageContainer>
  )
}

export default Home;
