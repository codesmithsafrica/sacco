import { Stack, Text, Flex } from "@chakra-ui/react";

import React from "react";

const EmptySearch = () => {

  return (
    <Flex justify="center" textAlign="center" mb={8} py={12}>
      <Stack align="center">
        {/* <Icon as={Search2Icon} name="search"
        //@ts-expect-error:size prop
         size="64px" color="gray.500" /> */}
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          No Items Found
        </Text>
       
      </Stack>
    </Flex>
  );
};

export default EmptySearch;