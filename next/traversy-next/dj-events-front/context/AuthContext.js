import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'
import { API_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const router = useRouter()

  useEffect(() => checkUserLoggedIn(), [])

  //register
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await res.json()
    // console.log(data)
    
    if (res.ok) {
      setUser(data.user)
      router.push('/account/dashboard')
    } else {
      setError(data.message)
      setError(null)
    }
  }

  //login
  const login = async ({email:identifier, password}) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    })
    const data = await res.json()
    // console.log(data)
    
    if (res.ok) {
      setUser(data.user)
      router.push('/account/dashboard')
    } else {
      setError(data.message)
      setError(null)
    }

  }

  // edit
  const edit = async ({values}) => {
    const res = await fetch(`${NEXT_URL}/api/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       values
      })
    })
    const data = await res.json()
    // console.log(data)
    
    if (res.ok) {
      router.push(`/events/${data.slug}`)
    } else {
      setError(data.error)
      setError(null)
    }
  }

  // create 
  const create = async ({values}) => {
    const res = await fetch(`${NEXT_URL}/api/addevent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       values
      })
    })
    const data = await res.json()
    // console.log(data)
    
    if (res.ok) {
      router.push(`/events/${data.slug}`)
    } else {
      setError(data.error)
      setError(null)
    }
  }

  // delete
  const deleteEvent = async ({id}) => {
    
    const res = await fetch(`${NEXT_URL}/api/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
    
    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
      setError(null)
    } else {
      return 'deleted'
    }
  }

  // upload image:
  const imageUpload = async ({formData, token}) => {
    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })

    return res.ok ? true : false
  }

  //logout
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST'
    })

    if (res.ok) {
      setUser(null)
      router.push('/')
    }
  }

  //check if logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      error,
      register,
      login,
      edit,
      create,
      imageUpload,
      logout,
      checkUserLoggedIn,
      deleteEvent
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext