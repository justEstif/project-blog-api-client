import axios from 'axios'
import IComment from '../interface/IComment'
import IPost from '../interface/IPost'

// DONE: Check if there is an active user -> user token
export const getPosts = async (token: string): Promise<IPost[] | []> => {
  const urlwithProxy = '/api/posts'
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(urlwithProxy, config)
    const data: IPost[] = response.data
    return data
  } catch (error) {
    throw error
  }
}

export const getPost = async (postID: string, token: string) => {
  interface IGetPostResponse {
    post: IPost[]
    comments: IComment[]
  }
  const urlwithProxy = `/api/posts/${postID}`
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(urlwithProxy, config)
    const data: IGetPostResponse = response.data
    return {
      post: data.post[0],
      comment: data.comments
    }
  } catch (error) {
    throw error
  }
}

export const createComment = async (
  postID: string,
  token: string,
  body: string,
  user: string
) => {
  const urlwithProxy = `/api/posts/${postID}/comment`

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const newComment: IComment = {
      postId: postID,
      body,
      user
    }

    const response = await axios.post(urlwithProxy, { ...newComment }, config)
    const data = response.data
    return {
      data
    }
  } catch (error) {
    throw error
  }
}
