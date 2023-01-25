import { useState, useEffect } from 'react'
import IDeletePostProps from '../../interface/IDeletePostProps'
import { deletePost } from '../../services/api.owner'

const useDeletePost = () => {
  const initialValue = {
    postId: '',
    token: ''
  }
  const [deleteData, setDeleteData] = useState<IDeletePostProps | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handlePost = async () => {
      if (deleteData) {
        try {
          await deletePost({
            postId: deleteData.postId,
            token: deleteData.token
          })
          setSuccess(true)
        } catch (error) {
          console.log(error)
        }
      }
    }
    !Object.is(initialValue, deleteData) && handlePost()
  }, [deleteData])

  return { success,setDeleteData }
}

export default useDeletePost
