export default function getFormattedDate(date: Date) {
  let passedDate = new Date(date.toString())
  let year = passedDate.getFullYear()
  let day = passedDate.getDate().toString().padStart(2, '0')
  let month = passedDate.toLocaleString('default', {
    month: 'short'
  })
  return `${month} ${day}, ${year}`
}
