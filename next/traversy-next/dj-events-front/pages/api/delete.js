import { parseCookies } from "@/helpers/index"
import { API_URL } from "@/config/index"

export default async (req, res) => {
  const {token} = parseCookies(req)
  const {id} = req.body

  const response = await fetch(`${API_URL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()

  if (!response.ok) {
    res.status(response.status).json({error: `${data.message}`})
  } else {
    res.status(response.status).json({message: `event deleted`})
  }
}