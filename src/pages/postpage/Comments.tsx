import { nanoid } from 'nanoid'
import IComment from '../../interface/IComment'
import Comment from './Comment'

interface IProps {
  postComments: IComment[] | undefined
  Form: JSX.Element
}

const Comments = ({ postComments, Form }: IProps) => {
  return (
    <div>
      <div className="text-2xl">Comments</div>
      {Form}
      {typeof postComments !== 'undefined' ? (
        postComments.map((postComment) => (
          <Comment key={nanoid()} comment={postComment} />
        ))
      ) : (
        <div>No Comments</div>
      )}
    </div>
  )
}

export default Comments
