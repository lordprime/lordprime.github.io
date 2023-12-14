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
        Hello There
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
          Welcome to my LinkedIn profile! I'm R Abhishek Reddy, a dedicated cybersecurity student & researcher specialising in red team operations and security testing. My career is driven by an insatiable curiosity and a relentless pursuit of excellence in the ever-evolving cybersecurity landscape.
          My professional journey is underpinned by a fervent commitment to staying at the forefront of industry advancements. I'm continually honing my skills and expanding my knowledge base to remain a formidable force in the field. Proficient in programming languages like C++, C, and Python, I bring a solid foundation to my work. I excel in the art of website hacking and application testing, leveraging this expertise to safeguard digital landscapes.
          I firmly believe that learning is an ongoing endeavour, and I'm passionate about acquiring new skills to maintain a competitive edge in cybersecurity. Beyond my technical prowess, I actively contribute to the community as an avid blogger. Through my thought-provoking articles and blog posts, I strive to raise awareness and provide valuable insights into the realm of cybersecurity.        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Works
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019 - 2021</BioYear>
          Studied In Vishwachethana PU College - Physics, Chemistry, Mathematics, Biology
        </BioSection>
        <BioSection>
          <BioYear>2021 - 2024</BioYear>
          Currently Pursuing BCA (Bachelors in Computer Application) major in Cybersecurity
          in JAIN(Deemed-to-be) University
        </BioSection>
        <BioSection>
          <BioYear>May 2023 - Jul 2023</BioYear>
          <BioSection>
            <Box><b>Position:</b> Cyber Security Engineer <b>(INTER)</b></Box>
            <Box><b>Role:</b> Automate Blackbox recon, research product improvements.</Box>
            <Box><b>Company:</b> AverCyber Technologies</Box>
          </BioSection>
        </BioSection>
        <BioSection>
          <BioYear>Aug 2023 - Present</BioYear>
          <BioSection>
            <Box><b>Position:</b> Offensive security engineer <b>(INTER)</b></Box>
            <Box><b>Role:</b> Work with AWS misconfigurations, SBOM tools, and misconfig testing automation.</Box>
            <Box><b>Company:</b> AverCyber Technologies</Box>
          </BioSection>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I am intrested in
        </Heading>
        <Paragraph>
          Blogging, Researching , programming automated tools for hacking, and also learning new skills
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Other Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/morpheuslord" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @morpheuslord
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @morpheuslord2
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://hackernoon.com/u/morpheuslord" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @hackernoon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/Abhishek Reddy-g-98b013233/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          1:1 Call
        </Heading>
        <List>
          <ListItem>
            <Link href="https://superpeer.com/Abhishek Reddy/-/have-a-chat?s=d" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Have a 1:1 conversation with me using SuperPeer.
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
