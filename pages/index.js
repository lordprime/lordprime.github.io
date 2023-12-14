import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello Everyone !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           R Abhishek Reddy
          </Heading>
          <p>Red team operator | cybersec student | penetration tester | researcher | Forensic | SOC Analyst</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Welcome to my world of cybersecurity expertise! 
        I'm Abhishek Reddy, an IBM certified cybersecurity analyst with a passion for system network and web hacking. 
          My academic and professional journey has been deeply rooted in cybersecurity, showcased through various internships in penetration testing, digital forensics, information security administration, and networking. 
          At Jain University, I pursued a Bachelor of Computer Application, honing my skills further. My commitment to continuous learning and embracing challenges has kept me at the forefront of the latest security trends and technologies. 
          With publications in AI, network scanning, and integrating ChatGPT into WhatsApp, I bring a blend of theoretical knowledge and practical application. Join me in exploring the dynamic and ever-evolving field of cybersecurity.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Explore 
          </Button>
        </Box>
      </Section>
              
<Section delay={0.2}>
  <Heading as="h3" variant="section-title">
    Academic
  </Heading> 
  <BioSection>
    <BioYear>2021 - 2024</BioYear>
    Pursuing BCA- Bachelor of Computer Application - Major in Cybersecurity program integrated with EC-COUNCIL 
    JAIN ( Deemed-to-be) University - Current CGPA - 8.995/10 
  </BioSection>
  <BioSection>
    <BioYear>2019 - 2021</BioYear>
    Pre Univesity (11th and 12th ) - major in Physics, Chemistry, Mathematics, Biology 
    Studied In Vishwachethana PU College - Grade : 83.83%
  </BioSection>
  <BioSection>
    <BioYear>2009 - 2019</BioYear>
    Primary and Higher Secondary Education 
    Studied in Lincoln Memorial English School - Distinction : 90.6%
  </BioSection>
</Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I am intrested in
        </Heading>
        <Paragraph>
        Research & Development, Penetration Testing, Cloud Security, Blue teaming, and being updated with new technologies and tools. 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/lordprime" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
               @lordprime
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://x.com/RABHISHEKREDDY4?t=3vzDSC7yK7Kg4_RFzuZaNQ&s=09" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @RABHISHEKREDDY
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/r-abhishek-reddy-56b950215/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @RABHISHEKEDDY
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
