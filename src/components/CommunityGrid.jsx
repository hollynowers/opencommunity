import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CommunityCard from "./CommunityCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CommunityGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 8, marginTop: -5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <CommunityCard
            communityName={"Drinking Club"}
            communityDescription={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            handleJoin={() => {}}
            handleView={() => {}}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CommunityCard
            communityName={"Drinking Club"}
            communityDescription={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            handleJoin={() => {}}
            handleView={() => {}}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CommunityCard
            communityName={"Drinking Club"}
            communityDescription={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            handleJoin={() => {}}
            handleView={() => {}}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CommunityCard
            communityName={"Drinking Club"}
            communityDescription={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            handleJoin={() => {}}
            handleView={() => {}}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CommunityCard
            communityName={"Drinking Club"}
            communityDescription={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            handleJoin={() => {}}
            handleView={() => {}}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CommunityCard
            communityName={"Drinking Club"}
            communityDescription={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            handleJoin={() => {}}
            handleView={() => {}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
