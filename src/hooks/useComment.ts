import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useStore from '../store'
import { createComment } from '../services/api'

const useComment = () => {
  const store = useStore((state) => state)
  const token = store.user?.token.token || ''
  const user = store.user?.user._id || ''
  const postID = useLocation().state
  const [body, setBody] = useState('')

  useEffect(() => {
    const handleComment = async () => {
      try {
        await createComment(postID, token, body, user)
      } catch (error) {
        console.log(error)
      }
    }
    if (body) handleComment()
  }, [body])

  return { body, setBody }
}

export default useComment
