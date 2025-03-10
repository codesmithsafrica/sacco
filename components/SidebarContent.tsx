import React from "react";
import {
    Box,
    CloseButton,
    Flex,

    BoxProps,
    Text,
    Link,
    Icon,
} from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from './ui/color-mode'

import { FiHome } from "react-icons/fi";
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";
// import { FaUserTie } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

// import { ReactText } from "react";
import { IconType } from "react-icons";
import AddItemModal from "@/components/AddUserModal"



interface NavItemProps {
    icon: IconType;
    path: string;
    // eslint-disable-next-line
    children: any;
}
interface LinkItemProps {
    name: string;
    path: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Dashboard", path: "/dashboard", icon: FiHome },
    { name: "My Contributions", path: "/dashboard", icon: FaSchool },
    { name: "Loans", path: "/contributions", icon: PiStudentFill },


];

const LinkItemsAdmin: Array<LinkItemProps> = [
    { name: "Dashboard", path: "/dashboard", icon: FiHome },
    { name: "Members", path: "/members", icon: PiStudentFill },
    { name: "Contributions", path: "/contributions", icon: FaChalkboardTeacher },

];


interface SidebarProps extends BoxProps {
    onClose: () => void;
    // eslint-disable-next-line
    session: any
}
const SidebarContent = ({ onClose, session, display }: SidebarProps) => {
    return (
        <Box

            // display={{ base: "none", md: "flex" }} 
            display={display}
            // transition="3s ease"
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            overflow={{ base: "scroll", md: "auto" }}
        //   {...rest}
        >
            <Flex
                h={{ base: 100, md: 150 }}
                alignItems="center"
                mx="10"
                mb={6}
                justifyContent="space-between"
            >
                <Box
                >
                    <Box
                        display={{ base: "flex", md: "flex" }}
                        fontSize="xl"
                        fontFamily="monospace"
                        fontWeight="bold"
                    >
                        <Text> Sacco</Text>
                    </Box>

                </Box>
                <Box
                    display={{ base: "flex", md: "none" }}
                >
                    <CloseButton onClick={onClose} />
                </Box>
            </Flex>

            {session?.user?.role == 'SUPERADMIN' ? (<>      {LinkItemsAdmin.map((link) => (
                <NavItem key={link.name} path={link.path} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}</>) : (<>      {LinkItems.map((link) => (
                <NavItem key={link.name} path={link.path} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}</>)
            }
            {session?.user?.role == 'SUPERADMIN' ? (<>

                <AddItemModal />
            </>) : null}


        </Box>
    );
};

const NavItem = ({ icon, children, path }: NavItemProps) => {
    const { colorMode } = useColorMode();
    const pathname = usePathname()
    const hoverColor = { light: "gray.900", dark: "whiteAlpha.900" };
    const activeColor = { light: "teal.800", dark: "teal.200" };
    const activeBg = { light: "teal.500", dark: "gray.700" };
    const router = useRouter();

    const style = {
        marginRight: 10,

        bg: activeBg[colorMode],
        rounded: "sm",
        borderRadius: 4,
        // color: 'gray',

        color: pathname === path ? activeColor[colorMode] : "gray",
        textDecoration: "none",
    };
    // eslint-disable-next-line
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(path);
    };

    return (
        <Link href={path} onClick={handleClick} style={style}>
            <Flex
                align="center"
                p="2"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{

                    color: hoverColor[colorMode],
                    transform: "translateX(2px)",
                }}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{

                            color: hoverColor[colorMode],
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
export default SidebarContent;