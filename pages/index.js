import Name from './Name'
import AboutPast from './AboutPast'
import TreeImage from './TreeImage'
import AboutFuture from './AboutFuture'
import Contact from './Contact'
import AboutPresent from './AboutPresent'
import Urbanature from './Urbanature'

import { Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex>
        <Name/>
        <Contact />
      </Flex>
      <Flex>
        <AboutPast />
        <Spacer />
        <TreeImage />
        <Spacer />
        <AboutPresent />
      </Flex>
      <AboutFuture />
      <Urbanature />
    </>
  )
}
