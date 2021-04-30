// import {useRouter} from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function EventPage({evt}) {
  // const router = useRouter();
  console.log(evt)
  return (
    <Layout>
      <h1>{evt.name}</h1>



      {/* <h3>you typed {router.query.slug} query</h3>
      <button onClick={() => {
        router.push('/')
      }}>Go Home</button> */}
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()
  console.log('res', events)

  return {
    props: {
      evt: events[0]
    }
  }
}