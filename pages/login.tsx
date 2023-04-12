import { useEffect, useContext } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Login from "../components/Auth/Login"
import { AuthContext } from '@/store/AuthContext';
import { useRouter } from 'next/router';
import SEO from '@/components/SEO/SEO';

export default function LoginPage() {
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
      <SEO siteTitle="Login" description="Paw login page"/>
      <Login />
    </>
  )
}
