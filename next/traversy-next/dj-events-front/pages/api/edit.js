import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/config/index'

export default async (req, res) => {

  const {token} = parseCookies(req)
  const {values} = req.body
  
  const response = await fetch(`${API_URL}/events/${values.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values)
  })
  
  const evt = await response.json()
  
  if (!response.ok) {
    res.status(response.status).json({error: response.statusText})
  } else {
    res.status(201).json(evt)
  }
}