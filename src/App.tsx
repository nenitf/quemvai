import React, { useState, useEffect } from "react";
import { Grommet, Box, Button, Heading, Paragraph } from "grommet";
import { grommet } from "grommet";
import { StatusUnknown } from 'grommet-icons';

import criteriosJson from './criterios.json'

const App = () => {
  const [ criterios, setCriterios ] = useState([] as string[])
  const [ criterio, setCriterio ] = useState("")

  useEffect(() => {
    setCriterios(criteriosJson)
  }, [criterios])

  function handleMudaCriterio(){
    const i = Math.floor(Math.random() * (criterios.length - 1 - 0 + 1)) + 0
    setCriterio(criterios[i])
  }

  return (
    <Grommet full theme={grommet} themeMode="light">
      <Box pad="large" basis="full" fill={true}>
        <Heading level="1">Quem vai?</Heading>

        <Paragraph margin="none">{criterio}</Paragraph>

        <Button
          primary
          label={ <StatusUnknown color='plain' size='xlarge' /> }
          alignSelf="end"
          margin="large"
          style={{position: 'absolute', right: 0, bottom: 0}}
          onClick={handleMudaCriterio}
        />
      </Box>
    </Grommet>
  );
};

export default App;
