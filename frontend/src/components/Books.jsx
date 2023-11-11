import { Box, Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        key={id}
        my={4}
        p={4}
        cursor="pointer"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"
      >
        <VStack>
          <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
          <Heading size="md" textAlign="center">
            {title} ({year})
          </Heading>
          <Text textAlign="center">{author}</Text>
          <Box textAlign="center">
            <span>Publisher: </span>
            {publisher}
          </Box>
        </VStack>
      </Card>
    </Link>
  );
}
