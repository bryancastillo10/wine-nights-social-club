import MainPageContainer from '@/components/layout/MainPageContainer'
import PostCard from '@/features/post/components/PostCard'

import { posts } from '@/features/post/api/mockData';
import { users } from '@/features/user/api/mockData';
import { postLikes } from '@/features/postActions/api/likeMockData';
import { comments } from '@/features/postActions/api/commentMockData';
import { postShares } from '@/features/postActions/api/shareMockData';

const Home = () => {
  const loggedInUserId = "1001";
  
  return (
    <MainPageContainer withHeader>
      {posts.map((post) => {
        const user = users.find(u => u.userId === post.userId);
        if (!user) return null;
        
        // Calculating like,comment, & share counts per post
        const likesCount = postLikes.filter(like => like.postId === post.postId).length;
        const commentsCount = comments.filter(comment => comment.postId === post.postId).length;
        const sharesCount = postShares.filter(share => share.postId === post.postId).length;
     
        // Validating if the post is by authUser
        const isSelfPost = post.userId === loggedInUserId;

        return (
          <PostCard
            key={post.postId}
            user={user}
            post={post}
            isSelfPost={isSelfPost}
            likesCount={likesCount}
            commentsCount={commentsCount}
            sharesCount={sharesCount}
            handleEdit={() => console.log("Editing post:", post.postId)}
            handleDelete={() => console.log("Deleting post:", post.postId)}
          />
        );
      })}      
    </MainPageContainer>
  )
}

export default Home;
