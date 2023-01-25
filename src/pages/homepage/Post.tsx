import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import IPost from '../../interface/IPost'
import getFormattedDate from '../../utils/getFormattedDate'

interface Props {
  post: IPost
}

const Post = ({ post }: Props) => {
  const postID = post._id
  const postUrl = `posts/${postID}`

  return (
    <div className="flex flex-col gap-3 my-8">
      <p className="text-3xl text-red-700 underline">
        <Link to={postUrl} state={postID}>
          {post.title}
        </Link>
      </p>

      {typeof post.publicationDate === 'undefined' ? (
        <p className="italic text-blue-500">Not Yet Published</p>
      ) : (
        <p>{getFormattedDate(post.publicationDate)}</p>
      )}

      {post.tags.map((tag) => (
        <p key={nanoid()} className="text-red-700 text-md">
          #{tag}{' '}
        </p>
      ))}
      <p>{post.summary}</p>

      <p className="text-red-700 underline text-md">
        <Link to={postUrl} state={postID}>
          Read more
        </Link>
      </p>
    </div>
  )
}

export default Post
