import { useState, useEffect } from 'react'
import IUpdatePostProps from '../../interface/IUpdatePostProp'
import { updatePost } from '../../services/api.owner'

const useUpdatePost = () => {
  const [post, setPost] = useState<IUpdatePostProps | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handleUpdate = async () => {
      if (post) {
        await updatePost(post)
        setSuccess(true)
      }
    }
    handleUpdate()
  }, [post])
  return { success, setSuccess, setPost }
}

export default useUpdatePost
