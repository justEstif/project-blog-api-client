interface IPost {
  title: string
  body: string
  summary: string
  tags: string[]
  published: boolean
  publicationDate?: Date
  _id?: string
}

export default IPost
