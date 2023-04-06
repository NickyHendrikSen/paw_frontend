import { useEffect, useContext } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from "../components/auth/Login"
import { AuthContext } from '@/store/AuthContext';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

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
