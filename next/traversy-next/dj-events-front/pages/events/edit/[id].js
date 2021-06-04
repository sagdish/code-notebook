import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaImage } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ImageUpload from '@/components/ImageUpload'
import Modal from '@/components/Modal'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import formatDate from '@/utils/formatDate'
import styles from '@/styles/Form.module.css'
import Layout from '@/components/Layout'

export default function EditEventPage({ evt, token }) {
  const [values, setValues] = useState({
    name: evt.name,
    performers: evt.performers,
    venue: evt.performers,
    address: evt.address,
    date: formatDate(evt.date),
    time: evt.time,
    description: evt.description,
  })

  const [imagePreview, setImagePreview] = useState(
    evt.image ? evt.image.formats.thumbnail.url : null
  )

  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    // console.log(values)

    // Validation:
    const hasEmptyFields = Object.values(values).some(
      field => field === ''
    )
    if (hasEmptyFields) {
      console.error('Please fill in all fields')
      toast.error('Please fill in all fields')
      return
    }

    const res = await fetch(`${API_URL}/events/${evt.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values)
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Unauthorized')
        return;
      }
      toast.error('Something Went Wrong')
    } else {
      const evt = await res.json()
      router.push(`/events/${evt.slug}`)
    }
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({ ...values, [name]: value })
  }

  const imageUploaded = async e => {
    const res = await fetch(`${API_URL}/events/${evt.id}`)
    const data = await res.json()
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
  }

  return (
    <Layout title='Add New Event'>
      <Link href='/events'>Go Back</Link>
      <h1>Edit Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Performers</label>
            <input
              type='text'
              id='performers'
              name='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Venue</label>
            <input
              type='text'
              id='venue'
              name='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Time</label>
            <input
              type='text'
              id='time'
              name='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>Event Description</label>
          <textarea 
            type='text'
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          />
        </div>

        <input type='submit' value='Update Event' className='btn' />
      </form>

      <h2>Event Image</h2>
      {imagePreview ?
        <Image 
          src={imagePreview}
          height={100}
          width={170}
        /> 
        :
        <div>
          <p>No image was uploaded</p>
        </div>
      }
      
      <div>
        <button className='btn-secondary' onClick={() => setShowModal(true)}>
          <FaImage /> Set image
        </button>
      </div>

      <Modal show={showModal} title={'my title'} onClose={() => setShowModal(false)}>
        <ImageUpload
          evtId={evt.id} 
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  )
}

export async function getServerSideProps({params : {id}, req}) {
  const res = await fetch(`${API_URL}/events/${id}`)
  const evt = await res.json()
  const { token } = parseCookies(req)
  return {
    props: {
      evt,
      token,
    }
  }
}