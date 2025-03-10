import React from "react";
import { Box, Heading, Flex, Spacer, Text } from "@chakra-ui/react";
// import ItemDetail from '@/components/ItemDetail'

export type ItemProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  hospital: string;
  guardianName: string;
  guardianPhone: string;

};
interface Props {
  item: ItemProps;
  myItem?: boolean;
}



const MemberSingle: React.FC<Props> = ({ item, }) => {

  return (
    <Box
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "dark-lg",
      }}
      borderWidth="1px"
      borderRadius={8}
      mb={2}
      p={8}
      shadow="md"
      margin={2}
    >
      <Flex justify="center" align="center" wrap="wrap" grow={1}>
        <Heading fontSize="md" mr={4}>
          {item.firstName}
        </Heading>
        <Heading fontSize="md" ml={4}>
          {item.lastName}
        </Heading>
        <Spacer />
        <Text>{item.email}</Text>

      </Flex>

    </Box>
  );
};

export default MemberSingle;