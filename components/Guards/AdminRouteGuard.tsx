import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../store/AuthContext'

export type AdminRouteGuardProps = {
  children: any
}

const AdminRouteGuard = (props: AdminRouteGuardProps) => {
    
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    const isAdmin = authContext?.isAdmin();
    if(!isAdmin) {
      router.push("/")
    }

  })

  if(!authContext?.isAdmin()) return null;

  return (
    <>
      {props.children}
    </>
  )
}

export default AdminRouteGuard
