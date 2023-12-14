import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem1, WorkGridItem2, WorkGridItem3, WorkGridItem11, WorkGridItem12, WorkGridItem13, WorkGridItem4, WorkGridItem14, WorkGridItem5, WorkGridItem6 } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/cmder.jpg'
import thumbWalknote from '../public/images/works/nmap.jpeg'
import thumbFourPainters from '../public/images/works/GVA.jpeg'
import thumbMenkiki from '../public/images/works/quadrainspect.png'
import thumbMargelo from '../public/images/works/web.png'
import thumbModeTokyo from '../public/images/works/llama.png'
import thumbStyly from '../public/images/works/hackbot.jpg'
import thumbPichu2 from '../public/images/works/research.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title=" Explore">
    <Container>
      <Heading as="h3" fontSize={30} mb={5}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem1 title="Brute Hacking Framework"
            thumbnail={thumbInkdrop}
            href="https://github.com/morpheuslord/Brute-Hacking-Framework-SourceCode">
            A Hacking framework that is built to be portable and also carry essential tools for Red Teamers.
          </WorkGridItem1>
        </Section>
        <Section>
          <WorkGridItem2
            title="Nmap API"
            thumbnail={thumbWalknote}
            href="https://hub.docker.com/r/morpheuslord/nmap-api"
          >
            An Proof Of Concept API project to implement Nmap on a Web-API with better effeciency
          </WorkGridItem2>
        </Section>
        <Section>
          <WorkGridItem11
            title="QuadraInspect"
            thumbnail={thumbMenkiki}
            href="https://github.com/morpheuslord/QuadraInspect"
          >
            QuadraInspect is an Android framework that integrates AndroPass, APKUtil, RMS and MobFS, providing a powerful tool for analyzing the security of Android applications.
          </WorkGridItem11>
        </Section>
        <Section>
          <WorkGridItem12
            title="GPT_Vuln-analyzer"
            thumbnail={thumbFourPainters}
            href="https://github.com/morpheuslord/GPT_Vuln-analyzer"
          >
            This is a Proof Of Concept application that demostrates how AI can be used to generate accurate results for vulnerability analysis.
          </WorkGridItem12>
        </Section>
        <Section>
          <WorkGridItem13
            title="HackBot"
            thumbnail={thumbStyly}
            href="https://github.com/morpheuslord/HackBot"
          >
            An AI Chatbot implementation using llama2 7b model as its backend.
          </WorkGridItem13>
        </Section>
        <Section>
          <WorkGridItem14
            title="CVE_LLM_Dataset"
            thumbnail={thumbModeTokyo}
            href="https://github.com/morpheuslord/CVE-llm_dataset"
          >
            A Training dataset to train OpenAI GPT and llama 27b model for CVE analysis.
          </WorkGridItem14>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={30} mb={4}>
          Research Papers
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem3 thumbnail={thumbMargelo} title="AI based Enumeration and Exploit suggester">
            This research is intended to implement Artificial Intelligence with Cyber Security.
            Our main goal of this research is to make an AI that can gather information on a 
            specified target and search for the best possible exploits and all the vulnerabilities 
            on the target using tools that are used by a Cyber Sec professional during a Pentest.
          </WorkGridItem3>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem4 thumbnail={thumbPichu2} title="API-based network scanning">
            My research focuses on achieving stable and consistent results when scanning networks.
            The scan process can be automated by utilising APIs and containers, avoiding the risk of human error.
            The API-based approach has been fine-tuned through careful analysis and testing to deliver accurate and
            consistent results every time. This method s ensures that the network scan is thorough and reliable.
            Overall, the use of APIs in network scanning provides a reliable and efficient method for achieving consistent results.
            (ACCEPTED AND MULT BE PUBLISHED BY MAPANA)
          </WorkGridItem4>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem5 thumbnail={thumbPichu2} title="System for social engineering using AI">
            In our paper, "System for social engineering using AI",
            my co-authors and I present an innovative approach that utilizes Conversational AI,
            Text-to-Speech (TTS), and Advanced Speech Recognition to execute social engineering
            attacks with remarkable accuracy. We shed light on the potential risks associated
            with AI-driven social engineering, stressing the need for heightened awareness
            and strong defences against evolving cyber threats. Combining AI technologies to
            mimic human-like interactions demonstrates how malicious actors can exploit communication
            vulnerabilities to deceive and manipulate targets. Our work aims to raise awareness,
            promote robust security measures, and encourage ethical AI use for a safer digital environment.
            (ACCEPTED AND MULT BE PUBLISHED BY JETIR)
          </WorkGridItem5>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem6 thumbnail={thumbPichu2} title="XSS exploit generation using AI">
            Excited to share our latest paper, "XSS exploit generation using AI" Working alongside my co-authors,
            we developed an innovative approach to combat XSS vulnerabilities. By using Conversational AI and a
            specialized LLM model trained in XSS and payload generation, we successfully crafted real-world usable
            XSS payloads with advanced obfuscation. This breakthrough research strengthens cybersecurity, safeguarding
            web applications against malicious attacks. Let's build a more secure digital world together!
            (ACCEPTED AND MULT BE PUBLISHED BY JETIR)
          </WorkGridItem6>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
