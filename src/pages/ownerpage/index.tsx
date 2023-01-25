import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import useGetPosts from '../../hooks/useGetPosts'
import tw from 'tailwind-styled-components'
import { AddIcon, DeleteIcon, EditIcon } from './OwnerIcons'
import SHeader from '../../components/SHeader'

const STable = tw.table`
  table-fixed
`
const STh = tw.th`
  text-sm
  font-medium
  text-gray-900
  px-6
  py-4
  text-left
`

const STr = tw.tr`
  bg-white
  border-b
  transition
  duration-300
  ease-in-out
  hover:bg-gray-100
`

const STd = tw.td`
  text-sm
  text-gray-900
  font-light
  px-6
  py-4
  max-w-[200px]
  overflow-hidden
  whitespace-nowrap
`

const OwnerPage = () => {
  const posts = useGetPosts()
  return (
    <>
      <SHeader>
        <p className="text-5xl capitalize">Owner Page</p>
      </SHeader>

      <div className='flex justify-center content-center'>
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
        <STable>
          <thead>
            <STr>
              <STh>Title</STh>
              <STh>Published</STh>
              <STh>Publication Date</STh>
              <STh>Edit</STh>
              <STh>Delete</STh>
            </STr>
          </thead>

          <tbody>
            {posts.map((post) => {
              const postTitle = post.title.replaceAll(' ', '_').toLowerCase()
              const postID = post._id
              const postPubDate = post.publicationDate
                ? post.publicationDate.toString()
                : 'N/A'
              return (
                <STr key={nanoid()}>
                  <STd>{post.title}</STd>
                  <STd>{post.published ? 'true' : 'false'}</STd>
                  <STd>{postPubDate}</STd>
                  <STd>
                    <Link to={`/owner/edit/${postTitle}`} state={postID}>
                      <EditIcon />
                    </Link>
                  </STd>
                  <STd>
                    <Link to={`/owner/delete/${postTitle}`} state={postID}>
                      <DeleteIcon />
                    </Link>
                  </STd>
                </STr>
              )
            })}
          </tbody>
        </STable>
      )}
    </>
  )
}

export default OwnerPage
