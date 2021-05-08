export default function formatDate(date) {
  const formated = new Date(date).toISOString().slice(0, 10)
  return formated
}