import {useState, useEffect, useContext} from 'react'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import DashboardEvent from '@/components/DashboardEvent'
import styles from '@/styles/Dashboard.module.css'
import AuthContext from '@/context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DashboardPage({ events }) {
  const [evts, setEvts] = useState(events)

  const {deleteEvent, error} = useContext(AuthContext)
  useEffect(() => error && toast.error(error))

  const deleteEvt = async id => {
    console.log('delete')
    if (confirm('Are you sure?')) {
      deleteEvent({id})

      const newEvts = evts.filter(evt => evt.id !== id)
      setEvts(newEvts)
    }
  }

  return (
    <Layout title='User Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
        <ToastContainer />
        {evts.map(evt => (
          <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvt} />
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({req}) {
  const {token} = parseCookies(req)

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const events = await res.json()

  return {
    props: {
      events
    }
  }
}