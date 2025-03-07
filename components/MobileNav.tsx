import React from "react";
import Image from "next/image";
import {
    IconButton,
 
    Box,
    Flex,
    Button,
    HStack,
    VStack,
    useColorModeValue,
    MenuButton,
    Text,
    FlexProps,
    Menu,
 
    MenuItem,
    MenuList,

} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { signOut } from "next-auth/react"
import logo from "../app/logo_new.png"



interface MobileProps extends FlexProps {
    onOpen: () => void;
     // eslint-disable-next-line
    session:any
}

const MobileNav: React.FC<MobileProps> = ({ onOpen, session }) => {

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
        //   {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
                 <Box
                display={{ base: "flex", md: "none" }}
                fontSize="xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
             
           
             <Text> Mekaela</Text>
            </Box>
            <Box
                display={{ base: "none", md: "none" }}
                fontSize="xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
             
           
            <Image    alt={"Login Image"} objectFit={"cover"} src={logo} />
            </Box>
            <HStack spacing={{ base: "0", md: "6" }}>
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                        >
                            <HStack>
          

                                <VStack
                                    display={{ base: "flex", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                  
                                    <Text fontSize="sm">{session?.user?.email}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        {session?.user?.role}
                                    </Text>
                                </VStack>
                                <Box display={{ base: "flex", md: "flex" }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue("white", "gray.900")}
                            borderColor={useColorModeValue("gray.200", "gray.700")}
                        >

                            <Button
                                style={{ textDecoration: "none" }}
                                onClick={() => signOut({ callbackUrl: '/', redirect:true })}
                            >
                                <MenuItem>Sign out</MenuItem>
                            </Button>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default MobileNav;