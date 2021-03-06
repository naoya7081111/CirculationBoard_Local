import { VFC, memo, ReactNode } from "react"
import { Flex, Heading, Divider, Box } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
}

export const EntryContainer: VFC<Props> = memo((props)=> {

    const { children } = props;

    return (
        <>
            <Flex w={{base: "480px", md: "720px"}} h="auto" mt={{base: 6, md: 8}} mb={{base: 6, md: 8}} p={{base: 2, md: 4}}  align="center" direction="column" bg="orange.50" borderRadius="xl" shadow="md" >
                <Heading mx="auto" fontSize="24" >
                    コミュニティを探す
                </Heading>
                <Divider  mt={{base: 2, md: 4}} mb={8} borderWidth="lg" borderColor="gray.500" />
                <Box w={{base: "md", md: "lg"}} p={4} borderRadius="lg">
                {children}
                </Box>
            </Flex>
        </>
    )
})