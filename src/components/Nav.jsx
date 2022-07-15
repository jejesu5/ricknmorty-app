import React from "react";
import Logo from "../images/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
import { Center, Box, Image, Heading, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <Center h='auto' color='white' flex={1} flexDirection='column'>
  <Box w='350px' h='auto' p={0} color='white'>
  <Image src={Logo} />
</Box>
{/* <Stack direction={['column', 'row']} spacing='150px' color='black' fontSize='20px'>
  <Box w='100px' h='auto' bg='yellow.200' >
    <Text>Personajes</Text>
  </Box>
  <Box w='100px' h='auto' bg='tomato'>
    <Text>Favoritos</Text>
  </Box>
</Stack> */}
</Center>
<Flex justify='space-evenly' wrap='wrap' direction='row'>
  <Box p='4' bg='red.400' borderRadius={15} w={[180, 200, 300]}>
  <Heading as='h4' size='md' >
    Personajes
  </Heading>
  </Box>
  <Link to={'/favorites'}>
  <Box p='4' bg='green.400' borderRadius={15} w={[180, 200, 300]}>
  <Heading as='h4' size='md'>
    Favoritos
  </Heading>
  </Box>
  </Link>
</Flex>
{/* <Center>
<Stack direction={['column', 'row']} spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    <Text>Personajes</Text>
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    <Text>Favoritos</Text>
  </Box>
</Stack>
</Center> */}
</>
  )
}