'use client'
import React from 'react'
import {
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
// import SearchBar from "@/components/SearchBar";

import App from "./App";
import EmptySearch from "../components/EmptySearch";
import DoctorSingle from './DoctorSingle';
import { useSession } from "next-auth/react"

export default function Member() {
  const [loading, setLoading] = React.useState(false);
  // eslint-disable-next-line
  const [livestream, setLivestream] = React.useState<any>(null);
  const [search, setSearch] = React.useState("");
  const { data: session } = useSession()
  // const [loading, setLoading] = React.useState(false);

  // eslint-disable-next-line
  const onSearch = (e: any) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace("/", "");

    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };
 console.log('onserch',onSearch)
  // eslint-disable-next-line
  const matchesSearch = (item: any) =>
    item.firstName.toLowerCase().includes(search.toLowerCase()) || item.staffNumber.includes(search)

  const baseURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/members`;
  React.useEffect(() => {
    setLoading(true)
    axios.get(baseURL).then((response:any) => {
      setLivestream(response?.data);
      console.log('doctors', response)
    });
    setLoading(false)
  }, [livestream]);

  const filteredItems = livestream?.members
    .filter(matchesSearch)
  return (
    <App session={session}>

      <Text mb={2} fontSize="sm">
        {"Active "}
        <b>{"Members"}</b>
      </Text>
      {/* <SearchBar search={search} onSearch={onSearch} /> */}
      {loading ? (
        <Flex pt={24} align="center" justify="center">
          {/* <Spinner size="xl" /> */}loading...
        </Flex>
      ) : (
        <>
          {filteredItems?.length && !loading ? (
            // eslint-disable-next-line
            filteredItems?.map((item: any, index: any) => <DoctorSingle key={index} item={item} />)
          ) : loading && livestream?.members == undefined ? (
            <Flex pt={24} align="center" justify="center">
              {/* <Spinner size="xl"/> */}loading...
            </Flex>
          ) : <EmptySearch />}
          <Flex justify="flex-end" as="i" color="gray.500">
            {`Showing ${filteredItems?.length} out of ${livestream?.members?.length} members `}
          </Flex>

        </>
      )}
    </App>
  );
}