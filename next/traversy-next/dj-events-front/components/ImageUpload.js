import { useState, useContext } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import AuthContext from '@/context/AuthContext'

export default function ImageUpload({ evtId, imageUploaded, token}) {

  const [ image, setImage ] = useState(null)
  const { imageUpload } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData() 
    formData.append('files', image)
    formData.append('ref', 'events')
    formData.append('refId', evtId)
    formData.append('field', 'image')

    const result = await imageUpload({formData, token})

    if (result) {
      console.log('successfully uploaded')
      imageUploaded()
    } else {
      console.error(`image isn't uploaed`)
    }
  }

  const handleFileChange = e => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  return (
    <div className={styles.form}>
      <h1>Image upload ...</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type='file' onChange={handleFileChange} />
        </div>
        <input className='btn' type='submit' value='Upload'/>
      </form>
    </div>
  )
}
