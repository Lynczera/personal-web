import { Flex, Image, Text, Grid, Container, Anchor } from "@mantine/core";

import { Navbar } from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <Navbar />
        <Grid className="homeGrid">
          <Grid.Col span={4}>
            <Image
              maw={240}
              mx="auto"
              radius="md"
              src="leonardochenpic.png"
              alt="Random image"
            />
          </Grid.Col>

          <Grid.Col span={8}>
            <Flex
              mih={50}
              gap="sm"
              justify="flex-start"
              align="flex-start"
              direction="column"
              wrap="wrap"
            >
              <Flex
                mih={50}
                gap="sm"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
              >
                <Container size="xs" px="xs">
                  <Text
                    c="#74C0FC"
                    sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                    ta="left"
                    fz="xl"
                    fw={700}
                  >
                    Hi, my name is Leonardo Chen, and I am a Computer Science
                    student at{" "}
                    {
                      <Anchor
                        inherit={true}
                        underline="never"
                        href="https://www.utah.edu/"
                        c="#4263EB"
                      >
                        The University Of Utah.
                      </Anchor>
                    }{" "}
                    This is my personal website where I show my projects and
                    share professional informations.
                  </Text>
                </Container>
              </Flex>

              <Flex
                mih={50}
                bg="rgba(0, 0, 0, 0)"
                gap="sm"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
              >
                <a href="https://github.com/Lynczera" className="gitLink">
                  {" "}
                  <FaGithub size={56} color="#1864AB" />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-chen-492582230/"
                  className="linkedinLink"
                >
                  {" "}
                  <FaLinkedin size={56} color="#1864AB" />
                </a>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
    </>
  );
};
