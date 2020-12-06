import './App.css';
import Flock from "./components/flock";

import React from "react"


import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SimpleMenu from "./components/SimpleMenu";
import BirdProvider from "./components/BirdProvider";






function App() {
  return (
      <BirdProvider>
          <Container maxWidth="lg" className="App">
                  <SimpleMenu>

                  </SimpleMenu>
                  <Grid container direction="row" justify="space-between" alignItems="center">
                      <Flock>

                      </Flock>
                  </Grid>

        </Container>
      </BirdProvider>
  );
}

export default App;
