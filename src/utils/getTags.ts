const getTags = (tags: string) =>
  tags
    .trim()
    .split(',')
    .map((element) => element.trim())
export default getTags
