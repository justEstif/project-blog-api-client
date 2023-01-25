import Header from './Header'
import Post from './Post'
import { nanoid } from 'nanoid'
import useGetPosts from '../../hooks/useGetPosts'

const HomePage = () => {
  const posts = useGetPosts()
  // TODO: Add a posts container and style the page
  return (
    <section>
      <Header />
      {/* TODO Add Create post page */}
      {posts.length === 0 ? (
        // TODO :add React framer when loading posts
        <p>No posts</p>
      ) : (
        posts.map((post) => <Post key={nanoid()} post={post} />)
      )}
    </section>
  )
}

export default HomePage
