import {Text} from '@chakra-ui/react'
import { Carousel } from '@/components/Carousel'
import { MySection } from '@/components/MySection'

export default function Home() {
  return (
    <>
      <Text>Hello, World! 👾</Text>
      <Carousel />
      <MySection />
    </>
  )
}
