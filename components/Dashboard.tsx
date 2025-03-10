'use client'
import React from 'react'
import {
  Box,
} from '@chakra-ui/react'

import App from "./App";
import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()
  return (
    <App session={session}>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        Dashboard
      </Box>
    </App>
  );
}