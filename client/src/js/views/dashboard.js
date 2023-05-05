import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoveDownIcon from '@mui/icons-material/MoveDown';


import '../../styles/sidebar.css'


import { Context } from "../store/appContext";
import Chart from "../components/charts";
import { Typography } from "@mui/material";


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
    <div className="my-5" >




      <Box sx={{ flexGrow: 1, p: 1, mb: 0 }}>
        <Grid container justifyContent="flex-start"
          alignItems="stretch" rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

          {/* For four boxes */}
          <Grid container justifyContent="center"
            alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Paper
              elevation={6}
              sx={{
                p: 1,
                // margin: 'auto',
                mx: 4,
                my: 4,
                maxWidth: 225,
                minHeight: 175,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item alignItems="center" justifyContent="center" p={1}>
                <Grid item sx={{ width: '85%', mb: 1, p: 0, display: 'inline-flex' }} >
                  <CreditCardIcon sx={{ fontSize: "40px" }} />
                </Grid>
                <Grid item sx={{ width: '15%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <MoreVertIcon sx={{ fontSize: "35px" }} />
                </Grid>
                <Grid item sx={{ my: 1, py: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Transfers via Cards
                  </Typography>
                </Grid>
                <Grid item sx={{ my: 0, py: 0 }}>
                  <Typography sx={{ fontSize: "18px" }} pl={1}>
                    $ {(store.user[0]["transfers"][0]["Cards"]["amount"].toLocaleString())}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>


            <Paper
              elevation={6}
              sx={{
                p: 1,
                // margin: 'auto',
                mx: 4,
                my: 4,
                maxWidth: 225,
                minHeight: 175,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item alignItems="center" justifyContent="center" p={1}>
                <Grid sx={{ width: '85%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <SyncAltIcon sx={{ fontSize: "40px" }} />
                </Grid>
                <Grid item sx={{ width: '15%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <MoreVertIcon sx={{ fontSize: "35px" }} />
                </Grid>
                <Grid item sx={{ my: 1, py: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Transfers via Banks Accounts
                  </Typography>
                </Grid>
                <Grid item sx={{ my: 0, py: 0 }}>
                  <Typography sx={{ fontSize: "18px" }} pl={1}>
                    $ {(store.user[0]["transfers"][0]["Accounts"]["amount"].toLocaleString())}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper
              elevation={6}
              sx={{
                p: 1,
                // margin: 'auto',
                mx: 4,
                my: 4,
                maxWidth: 225,
                minHeight: 175,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item alignItems="center" justifyContent="center" p={1}>
                <Grid sx={{ width: '85%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <AccountBalanceIcon sx={{ fontSize: "40px" }} />
                </Grid>
                <Grid item sx={{ width: '15%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <MoreVertIcon sx={{ fontSize: "35px" }} />
                </Grid>
                <Grid item sx={{ my: 1, py: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Transfers to Same Banks
                  </Typography>
                </Grid>
                <Grid item sx={{ my: 0, py: 0 }}>
                  <Typography sx={{ fontSize: "18px" }} pl={1}>
                    $ {(store.user[0]["transfers"][0]["Same Banks"]["amount"].toLocaleString())}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper
              elevation={6}
              sx={{
                p: 1,
                // margin: 'auto',
                mx: 4,
                my: 4,
                maxWidth: 225,
                minHeight: 175,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid item alignItems="center" justifyContent="center" p={1}>
                <Grid sx={{ width: '85%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <MoveDownIcon sx={{ fontSize: "38px" }} />
                </Grid>
                <Grid item sx={{ width: '15%', mb: 1, p: 0, display: 'inline-flex' }}>
                  <MoreVertIcon sx={{ fontSize: "35px" }} />
                </Grid>
                <Grid item sx={{ my: 1, py: 1 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Transfers to Other Banks
                  </Typography>
                </Grid>
                <Grid item sx={{ my: 0, py: 0 }}>
                  <Typography sx={{ fontSize: "18px" }} pl={1}>
                    $ {(store.user[0]["transfers"][0]["Other Banks"]["amount"].toLocaleString())}
                  </Typography>
                </Grid>
              </Grid>


            </Paper>

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
