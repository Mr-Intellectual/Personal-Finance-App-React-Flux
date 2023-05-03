import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material";
import CardHeader from "@mui/material";
import CardContent from "@mui/material";
import '../../styles/sidebar.css'
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

import { Context } from "../store/appContext";
import Chart from "../component/charts";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="w-100 h-100" id="">





      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>



      {/* <Chart/> */}










      {/* <Grid container>
        <Grid Item>

        </Grid>
      </Grid> */}
      {/* <section className="page-content"> 
      
        <div>
          <section className="grid">
            <article>kdhgbnldfjkvb</article>
            <article>kdhgbnldfjkvb</article>

          </section>
        </div>
      </section> */}

    </div>
  );
}
