import { Flex, Heading, Highlight  } from '@chakra-ui/react'

function App() {
  return (
    <Flex alignItems='center' justifyContent='center' m={2}>
      <Heading><Highlight
    query='zadań'
    styles={{ px: '3', py: '1', rounded: 'full', bg: 'blue.300' }}
  >Lista zadań</Highlight></Heading>
    </Flex>
  );
}

export default App;
