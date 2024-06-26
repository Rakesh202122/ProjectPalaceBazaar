import { Box, Button, Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from '../../assets/docs/termsAndCondition'
import myprofile from "../../assets/images/myprofile.png"

const VideoPlayer = () => (
  <Box>
    <video 
        autoPlay
        muted
        loop
        controls
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
        >
          
        </video>
  </Box>
)

const TandC = ({termsAndCondition}) => (
  <Box>
    <Heading size={'md'} children='Terms & Condition' textAlign={['center', 'left']} my='4' />
    <Box h='sm' p='4' overflowY={'scroll'}>
      <Text letterSpacing={'widest'} fontFamily={'heading'} textAlign={['center','left']}>
        {termsAndCondition}
      </Text>
      <Heading  my='4' size={'xs'} children="Refund only applicable for cancellation within 7 days." />
    </Box>
  </Box>
)

const About = () => {
  return (
  <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
    <Heading children="About Us" textAlign={['center', 'left']} />
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
    <VStack>
      {/* <Avatar src="https://res.cloudinary.com/dxuhhf0sy/image/upload/v1698762996/kd5czc4yc0uibpgzvb2a.png" boxSize={['40', '48']} /> */}
      <Image boxSize={['40', '48']} src={myprofile} objectFit='contain'/>
      <Text children='CEO & Co-Founder' opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children='Rakesh Kumar' size={['md', 'xl']} />
      <Text textAlign={['center', 'left']} children={`Hi, I am a full-stack developer.
      Our mission is to provide quality content at reasonable price.`} />
    </VStack>
  </Stack>
    <Stack m='8' direction={['column','row']} alignItems='center'>
      <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}>
        We are a video streaming platform with some premium courses available only for premium users.
      </Text>

      <Link to='/subscribe' >
        <Button variant={'ghost'} colorScheme='yellow'>
          Checkout Our Plan
        </Button>
      </Link>
    </Stack>
    <VideoPlayer />

    <TandC termsAndCondition={termsAndCondition} />

    <HStack m='4' p={'4'}>
      <RiSecurePaymentFill />
      <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'} children={"Payment is secured by Razorepay"} />
    </HStack>
  </Container>
  )
}

export default About

