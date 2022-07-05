import { Box, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Side from './components/Side';
import Stories from './components/Stories';

function App() {

  return (
    <div className="App">
      <Header />

      <div className="main-page-grid">


      <Box>
        <Grid container>
          <Grid item xs={6}   md={6}>
            <Stories />
            <Main />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Side />
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
}

export default App;
