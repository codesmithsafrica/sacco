'use client'
import Image from "next/image";
import {
    Box,
    Flex,
    HStack,
    Heading,
    Container,
    Text,
    useDisclosure,
    Link,
    Stack,
} from "@chakra-ui/react";
import { useColorModeValue } from './ui/color-mode'

import { BsArrowUpRight } from "react-icons/bs";
import logo from "../public/vercel.svg"


const Links = ["Dashboard", "Projects", "Team"];
// eslint-disable-next-line
const NavLink = (props:any) => {
    const { children } = props;
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
                 //@ts-expect-error:fix
            href={"#"}
        >
            {children}
        </Box>
    );
};
 // eslint-disable-next-line
export default function LandingPage({ session }:any) {

    const { open } = useDisclosure();
 

    return (
        <Box

          backgroundSize={'cover'}
          backgroundPosition={'center center'}
            backgroundColor={'black'}
            h={"100vh"}
            overflowY={"hidden"}>
            <Box
                pt={8}
            >
                <Flex
                    // paddingX={["unset", 10, 10, 80]}
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <HStack
                    //@ts-expect-error:fix
                     spacing={8} alignItems={"center"}>
                        <Flex
                            borderRadius={"10px"}
                            h={[24, 34, 34, 40]}
                            w={[28, 38, 38, 44]}
                            paddingX={4}
                        >
                        

                            <Image alt={"Login Image"} objectFit={"cover"} height={50} src={logo} />
                         
                        </Flex>
                        <HStack
                            as={"nav"}
                                 //@ts-expect-error:fix
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        ></HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        {session ? (<Link
                            _hover={{ bg: "#ffffff40", color: "#fff" }}
                            borderRadius={"10px"}
                            href={"/dashboard"}
                            bg={"white"}
                            px={4}
                            py={2}
                            color={"black"}
                                 //@ts-expect-error:fix
                            size={"sm"}
                            mr={4}
                           
                            righticon={<BsArrowUpRight />}
                        >
                            Dashboard
                        </Link>) : (<Link
                            _hover={{ bg: "#ffffff40", color: "#fff" }}
                            borderRadius={"10px"}
                            href={"/api/auth/signin"}
                            bg={"#fff"}
                            px={4}
                            py={2}
                            color={"rgb(0, 0, 0)"}
                                 //@ts-expect-error:fix
                            size={"sm"}
                            mr={4}
                           
                            righticon={<BsArrowUpRight />}
                        >
                            Login
                        </Link>)}

                    </Flex>
                </Flex>

                {open ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"}
                             //@ts-expect-error:fix
                         spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box  mt={'25vh'} p={6}>
               
                <Container  maxW={"3xl"}>
                    <Stack
                        as={Box}
                        textAlign={"center"}
                             //@ts-expect-error:fix
                        spacing={{ base: 8, md: 14 }}
                        py={{ base: 10, md: 18 }}
                    >
                        <Heading
                            fontWeight={600}
                            color={"orange"}
                            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                            lineHeight={"110%"}
                        >
                            <Text color={"orange"} as={"span"}>
                            Sacco
                            </Text>
                        </Heading>
                        <Text color={"#BABABA"}>

                            {/* Learn to make a difference */}
                        </Text>
                    

                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
