import { parseCookies } from "@/helpers/index"
import { API_URL } from "@/config/index"

export default async (req, res) => {
  const {token} = parseCookies(req)
  const {values} = req.body

  const response = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values)
    })
    const evt = await response.json()

    if (!response.ok) {
      if (response.status === 403 || response.status === 401) {
        res.json({error: 'no token provided'})
      }
      res.json({error: response.statusText})
    } else {
      res.status(201).json(evt)
    }

  
}
