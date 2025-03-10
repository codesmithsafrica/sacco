import React from "react";
import {
  IconButton,
  Box,
  Flex,
  Button,
  HStack,
  VStack,
  Text,
  FlexProps,

} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { signOut } from "next-auth/react";

import { useColorModeValue } from "./ui/color-mode";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  // eslint-disable-next-line
  session: any;
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
        //@ts-expect-error:fix
        icon={<FiMenu />}
      />
      <Box
        display={{ base: "flex", md: "none" }}
        fontSize="xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Text> Sacco</Text>
      </Box>
     
      <HStack
      //@ts-expect-error:fix
       spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
       

          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="ghost"  size="sm">
                <HStack>
                  <VStack
                    display={{ base: "flex", md: "flex" }}
                    alignItems="flex-start"
                    //@ts-expect-error:fix
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
              </Button>
            </MenuTrigger>
            <MenuContent>
              <Button
                style={{ textDecoration: "none" }}
                onClick={() => signOut({ callbackUrl: "/", redirect: true })}
              >
                <MenuItem value="new-txt">Logout</MenuItem>
              </Button>
            </MenuContent>
          </MenuRoot>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
