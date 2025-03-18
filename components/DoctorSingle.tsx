import React from "react";
import { Box, Heading, Flex, Spacer, Text ,IconButton} from "@chakra-ui/react";
// import {  DeleteIcon } from "@chakra-ui/icons";
import EditItem from "../components/EditItem"
// import ItemDetail from '@/components/ItemDetail'
import { toaster,Toaster } from "@/components/ui/toaster"

export type ItemProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  code: string;
  school: string;
  hospital: string;
  guardianName: string;
  guardianPhone: string;

};
interface Props {
  item: ItemProps;
  key:string;
  myItem?: boolean;
}



const MemberSingle: React.FC<Props> = ({ item,key }) => {
 
  async function deleteSession(id: number) {
    console.log('id', id)
    const response = await fetch('/api/user/delete', {
      method: 'POST',
      body: JSON.stringify({ id }),
    })
    const _data = await response.json()
    console.log('data', _data)
toaster.create({
  description: "Member deleted successfully",
  type: "success",
})
  }

  return (
    <>
     <Toaster      />
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
        <Text mr={4}>{item.email}</Text>
        <Text>{item.phone}</Text>
        <Spacer />
      
        <EditItem
          index={key}
          item={item} />
          <IconButton
            colorScheme='red'
            onClick={() => deleteSession(item?.id)}
            aria-label='Delete student'
         
          />
      </Flex>

    </Box>
    </>

  );
};

export default MemberSingle;