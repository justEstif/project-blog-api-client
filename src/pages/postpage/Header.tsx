import { nanoid } from 'nanoid'
import getFormattedDate from '../../utils/getFormattedDate'
import IPost from '../../interface/IPost'
import classNames from '../../components/ui'

interface IProps {
  post: IPost | undefined
}
const Header = ({ post }: IProps) => {
  const postPubDate = post?.publicationDate
    ? getFormattedDate(new Date(post?.publicationDate))
    : 'Not Published'

  const postTags = post?.tags.map((tag) => (
    <p key={nanoid()} className="text-red-700 text-md">
      #{tag}
    </p>
  ))

  return (
    <header className={classNames.header}>
      <p className="text-5xl capitalize">{post?.title}</p>
      <p className="uppercase text-md">{postPubDate}</p>
      <div className="flex gap-3 justify-center content-center">{postTags}</div>
    </header>
  )
}

export default Header
