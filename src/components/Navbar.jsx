import { Anchor, Avatar, Container, Flex, Group } from "@mantine/core";
import classes from "./Navbar.module.css";
import { useState } from "react";

export function Navbar() {
  const links = [
    { link: "/", label: "Leonardo Chen" },
    { link: "/Projects", label: "Projects" },
    { link: "/CV", label: "CV" },
  ];

  const [active, setActive] = useState(links[0].link);
  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      underline="never"
      mt={8}
      p={5}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Anchor>
  ));
  return (
    <Container className={classes.header}>
      <Flex h={"56px"} >
        <Avatar mt={4} radius={"xl"} size={"lg"} src="leonardodevicon.png" />
        <Group w={"100%"} justify="flex-end" mr={"100px"} gap="lg">
          {items}
        </Group>
      </Flex>
    </Container>
  );
}
