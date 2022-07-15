import React from "react";
import Cards from "./Cards";
import {useDispatch, UseDispatch, useSelector} from 'react-redux';
import { Center, Heading, Image, Stack} from "@chakra-ui/react";
import notFound from '../images/empty.e54d7f8f.png'


export default function Favorites(){
const favorites = useSelector((state) => state.favorites);
if(favorites.length === 0){
    return (
        <Center>
            <Stack direction={'column'}>
           <Heading mt={10}
            color={'white'}>It seems you don't have any favorite yet</Heading>
           <Image src={notFound}/>
           </Stack>
        </Center>
    )
}
return (
    <Cards characters={favorites}/>
)
}