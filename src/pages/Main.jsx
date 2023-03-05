import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Header from "./Header";
import Test from "../components/Test";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box margin={[6, 6, 6, 6]} sx={{ width: "95%" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Header title="Test Image 1" subtitle="Test Image 1" />
          <Item>
            <Test />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Header title="Image2" subtitle="new image 2" />
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Header title="Image3" subtitle="new image 3" />
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Header title="Image4" subtitle="new image 4" />
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
