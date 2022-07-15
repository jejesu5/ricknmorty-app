import {React, useState, useEffect}from "react";
import { useDispatch, useSelector} from "react-redux";
import { addFavorite,removeFavorite } from "../redux/actions/actions";
import { useDisclosure } from "@chakra-ui/react";
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack, Text,
    useColorModeValue, Modal, ModalContent, ModalOverlay, ModalCloseButton, ModalBody, ModalFooter
  } from '@chakra-ui/react';
  
  export default function Card(props) {
        const dispatch = useDispatch();
        const favorites = useSelector((state) => state.favorites)
        const [favorite, setFavorite] = useState([])
        const {onClose, isOpen, onOpen} = useDisclosure();

      /*   useEffect(() => {
        if(favorites?.find)
        },[favorites]) */

        function handleFavorite(props) {
        const find = favorites?.find((el) => el.id === props.id)
        if(find) {
          dispatch(removeFavorite(props.id))
        } else {
          dispatch(addFavorite(props))
          setFavorite([...favorite, props.id])
        }
        }
         function changeColor(props){
            const find = favorites?.find((el) => el.id === props.id);
            if(find){
              return 'yellow.500'
            } else {
              return 'gray'
            }
         }
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={props.image}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {props.name}
            </Heading>
            <Stack align={'center'} justify={'center'} direction={'column'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                Status : {props.status}
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                Specie: {props.species}
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                Gender: {props.gender}
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button onClick={(e) => handleFavorite(props)}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: props.color,
                }}>
                Favorite
              </Button>
              <Button
                onClick={onOpen}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                More Detail
              </Button>
              <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Flex mt={10}>
          <Image
            rounded={'lg'}
            height={250}
            width={282}
            objectFit={'cover'}
            src={props.image}
          />
        <Stack pt={2}  ml={0}>
        <Text
                px={2}
                py={1}
                fontWeight={'600'} fontSize='md'>
                Status : {props.status}</Text>
              <Text
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'} fontSize='md'>
                Species : {props.species}
              </Text>
              <Text
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'} fontSize='md'>
                Gender : {props.gender}
              </Text>
              <Text
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'} fontSize='md'>
                Origin : {props.origin}
              </Text>
              <Text
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'} fontSize='md'>
                Location : {props.location}
              </Text>
          </Stack>
        </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }