import axios from 'axios'
import IPost from '../interface/IPost'
import ICreatePostProp from '../interface/ICreatePostProp'
import getTags from '../utils/getTags'
import IUpdatePostProps from '../interface/IUpdatePostProp'
import IDeletePostProps from '../interface/IDeletePostProps'

export const createPost = async ({
  title,
  body,
  summary,
  tags,
  published,
  token
}: ICreatePostProp) => {
  // NOTE The backend might have a bug that doesn't let it take a published boolean

  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/posts/`

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const newPost: IPost = {
    published,
    title,
    tags: getTags(tags),
    summary,
    body
  }

  await axios.post(apiUrl, { ...newPost }, config)
}

export const updatePost = async ({
  postId,
  title,
  body,
  summary,
  tags,
  published,
  token
}: IUpdatePostProps) => {
  // NOTE The backend might have a bug that doesn't let it take a published boolean

  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/posts/${postId}`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const newPost: IPost = {
    published,
    title,
    tags: getTags(tags),
    summary,
    body
  }

  const response = await axios.put(apiUrl, { ...newPost }, config)
  return response.data
}

export const deletePost = async ({ postId, token }: IDeletePostProps) => {
  const urlwithProxy = `${import.meta.env.VITE_API_BASE_URL}/posts/${postId}`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  await axios.delete(urlwithProxy, config)
}
