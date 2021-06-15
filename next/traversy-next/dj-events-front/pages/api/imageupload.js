import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/config/index'

export default async (req, res) => {
  const {token} = parseCookies(req)
  const {formData} = req.body

  // console.log(formData)
  // console.log('server get method', formData.get('files'))
  
  
  const response = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    },
    body: formData
  })
  console.log('response: ',response)

  const final = await response.json()

  console.log('final', final)

  if (response.ok) {
    res.status(200).json({message: 'success'})
    console.log('response from image', response)
  } else {
    res.status(response.status).json('error uploading')
  }
}