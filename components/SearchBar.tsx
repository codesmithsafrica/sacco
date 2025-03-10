import React from "react";
import { Input,Flex} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group"
import { LuUser } from "react-icons/lu"

 // eslint-disable-next-line
const SearchBar = ({search, onSearch}:any) => {
  return (
    <Flex align={"center"}>
            <InputGroup        display={["block", "block", "block"]}
        width="100%"
        ml={16}
        mr={16} startElement={<LuUser />}>
            <Input
          placeholder="search ..."
          color="teal"
          borderColor="gray"
          variant="outline"
          size="md"
      
          key="random1"
          value={search}
          onChange={onSearch}
        />
      </InputGroup>

    </Flex>
  );
};

export default SearchBar;