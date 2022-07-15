import Cards from "./Cards";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/actions/actions";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Flex, Button } from "@chakra-ui/react";

export default function Home() {
    const characters = useSelector((state) => state.characters);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
    dispatch(getAllCharacters(page))
    },[dispatch, page])

   function handlePage(e) {
    e.preventDefault()
    if(e.target.value === 'next'){
        setPage(page + 1)
    }
    if(e.target.value === 'prev' && page !== 1){
        setPage(page - 1)
    }
   }
console.log(page)
   return (
    <>
    <div className="cards-container">
        <Cards characters={characters}/>
        </div>
        <div>
        <Flex justify="center" direction='row' spacing={4} wrap='wrap' mt={30}>
  <Button onClick={(e) => handlePage(e)} value="prev" leftIcon={<BsFillArrowLeftCircleFill />} colorScheme='blue' variant='outline' mr={20}>
    Previous
  </Button>
  <Button onClick={(e) => handlePage(e)} value="next" rightIcon={<BsFillArrowRightCircleFill/>} colorScheme='blue' variant='outline'>
    Next
  </Button>
</Flex>
</div>
        </>
   )
    
}
