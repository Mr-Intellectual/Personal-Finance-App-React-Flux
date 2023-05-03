import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



import '../../styles/sidebar.css'


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
    <div className="my-5" id="">




      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="flex-start"
          alignItems="stretch" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container justifyContent="center"
          alignItems="baseline" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={2}>
              <Item>Transfer via Banks Accounts</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Transfer via Cards</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Transfer Same Banks</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Transfers to Other Banks</Item>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Item><Chart /> </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              Recent Transactions
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Net Worth</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Upcoming Payments</Item>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}
