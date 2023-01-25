import { useState, useEffect } from 'react'
import ICreatePostProp from '../../interface/ICreatePostProp'
import { createPost } from '../../services/api.owner'

const useCreatePost = () => {
  const [post, setPost] = useState<ICreatePostProp | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handleCreate = async () => {
      if (post) {
        try {
          await createPost(post)
          setSuccess(true)
        } catch (error) {
          throw error
        }
      }
    }
    handleCreate()
  }, [post])
  return { success, setPost }
}

export default useCreatePost
