import {Text} from '@chakra-ui/react'
import { Carousel } from '@/components/Carousel'
import { MySection } from '@/components/MySection'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <MySection />
    </>
  )
}
