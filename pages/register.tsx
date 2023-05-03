import { useEffect, useContext } from 'react';
import { Inter } from 'next/font/google'
import Register from '@/components/Auth/Register'
import { AuthContext } from '@/store/AuthContext';
import { useRouter } from 'next/router';
import SEO from '@/components/SEO/SEO';

const inter = Inter({ subsets: ['latin'] })

export default function RegisterPage() {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    if(authContext?.isAuthenticated()) {
      router.push("/")
    }
  })
  if(authContext?.isAuthenticated()) return null;
  
  return (
    <>
      <SEO siteTitle="Register" description="Paw register page"/>
      <Register />
    </>
  )
}
