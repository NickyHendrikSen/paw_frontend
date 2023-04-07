import { useEffect, useContext } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Login from "../components/Auth/Login"
import { AuthContext } from '@/store/AuthContext';
import { useRouter } from 'next/router';

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
      <Head>
      <title>Login</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}
