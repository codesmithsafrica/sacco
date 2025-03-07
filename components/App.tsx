import React, { ReactNode } from "react";
import {
  Box,

  useDisclosure,

} from "@chakra-ui/react";
import { useColorModeValue } from './ui/color-mode'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,

} from "@/components/ui/drawer"
import SidebarContent from "@/components/SidebarContent";
import MobileNav from "@/components/MobileNav";
type Iprops = {
  children: ReactNode;
   // eslint-disable-next-line
  session:any
};

  const App: React.FC<Iprops> = ({children,session}) => {
  const { open, onOpen, onClose } = useDisclosure();


  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        session={session}
      />
   
      <DrawerRoot open={open}  placement={'start'}>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerBody>
            <SidebarContent   session={session} onClose={onClose} />
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      {/* mobilenav */}
      <MobileNav  session={session} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default App;