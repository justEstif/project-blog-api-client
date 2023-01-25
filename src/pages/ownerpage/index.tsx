import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import useGetPosts from '../../hooks/useGetPosts'
import { AddIcon, DeleteIcon, EditIcon } from './OwnerIcons'
import cn from 'classnames'
import globalClasses from '../../components/ui'

const classNames = {
  table: cn('table-fixed'),
  th: cn(
    'text-sm',
    'font-medium',
    'text-gray-900',
    'px-6',
    'py-4',
    'text-left'
  ),
  tr: cn(
    'bg-white',
    'border-b',
    'transition',
    'duration-300',
    'ease-in-out',
    'hover:bg-gray-100'
  ),
  td: cn(
    'text-sm',
    'text-gray-900',
    'font-light',
    'px-6',
    'py-4',
    'max-w-[200px]',
    'overflow-hidden',
    'whitespace-nowrap'
  )
}

const OwnerPage = () => {
  const posts = useGetPosts()
  return (
    <>
      <header className={globalClasses.header}>
        <p className="text-5xl capitalize">Owner Page</p>
      </header>

      <div className="flex justify-center content-center">
        <button>
          <Link to={`/owner/create/`}>
            <AddIcon />
          </Link>
        </button>
      </div>

      {posts.length === 0 ? (
        // TODO :add React framer when loading posts
        <p>No Posts</p>
      ) : (
        <table className={classNames.table}>
          <thead>
            <tr className={classNames.tr}>
              <th className={classNames.th}>Title</th>
              <th className={classNames.th}>Published</th>
              <th className={classNames.th}>Publication Date</th>
              <th className={classNames.th}>Edit</th>
              <th className={classNames.th}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => {
              const postTitle = post.title.replaceAll(' ', '_').toLowerCase()
              const postID = post._id
              const postPubDate = post.publicationDate
                ? post.publicationDate.toString()
                : 'N/A'
              return (
                <table className={classNames.tr} key={nanoid()}>
                  <td className={classNames.td}>{post.title}</td>
                  <td className={classNames.td}>
                    {post.published ? 'true' : 'false'}
                  </td>
                  <td className={classNames.td}>{postPubDate}</td>
                  <td className={classNames.td}>
                    <Link to={`/owner/edit/${postTitle}`} state={postID}>
                      <EditIcon />
                    </Link>
                  </td>
                  <td className={classNames.td}>
                    <Link to={`/owner/delete/${postTitle}`} state={postID}>
                      <DeleteIcon />
                    </Link>
                  </td>
                </table>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}

export default OwnerPage
