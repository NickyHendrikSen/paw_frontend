import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NotFound from '@/components/404/NotFound'
import Header from '@/components/Template/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RegisterPage() {
  return (
    <>
      <Header />
      <NotFound />
    </>
  )
}
