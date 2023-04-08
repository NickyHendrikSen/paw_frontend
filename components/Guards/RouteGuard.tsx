import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../store/AuthContext'

export type RouteGuardProps = {
  children: any
}

const RouteGuard = (props: RouteGuardProps) => {
    
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    const authenticated = authContext?.isAuthenticated();
    if(!authenticated) {
      router.push("/login")
    }

  })

  if(!authContext?.isAuthenticated()) return null;

  return (
    <>
      {props.children}
    </>
  )
}

export default RouteGuard
