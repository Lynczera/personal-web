import { Anchor, Avatar, Flex, Group } from "@mantine/core";
import classes from "./Navbar.module.css";
import { useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";

export function Navbar() {
  const links = [
    { link: "/", label: "Leonardo Chen" },
    { link: "/Projects", label: "Projects" },
    { link: "/CV", label: "CV" },
  ];

  const nav = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const items = links.map((link) => (
    link.label !=="CV"?
    (
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
        nav(link.link);
      }}
    >
      {link.label}
    </Anchor>
    ):
    <Anchor
      key={link.label}
      href={"Leonardo_Chen_Resume.pdf"}
      className={classes.link}
      data-active={active === link.link || undefined}
      underline="never"
      mt={8}
      p={5}
      onClick={(event) => {
          close();
      }}
    >
      {link.label}
    </Anchor>
  ));
  return (
    <Flex h={"65px"} className={classes.inner}>
      <Avatar
        mt={4}
        ml={30}
        radius={"xl"}
        size={"lg"}
        src="leonardodevicon.png"
      />
      <Group w={"100%"} justify="flex-end" mr={"100px"} gap="lg">
        {items}
      </Group>
    </Flex>
  );
}
