import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Text} from '@chakra-ui/react'
import { Carousel } from '@/components/Carousel'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Text>Hello, World! 👾</Text>
      <Carousel />
    </>
  )
}
