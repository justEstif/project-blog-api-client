import { useEffect, useState } from 'react'
import IPost from '../interface/IPost'
import { getPosts } from '../services/api'
import useStore from '../store'

const useGetPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const store = useStore((state) => state)
  const token = store.user?.token.token || ''

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(token)
        setPosts(() => data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }, [token])

  return posts
}

export default useGetPosts
