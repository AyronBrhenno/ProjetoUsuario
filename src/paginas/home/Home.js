import * as React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Home() {
  return (
    <div className="Home">
      <Buttons />
    </div>
  );
}

function Buttons() {
  return (
    <div className="Buttons">
      <Stack spacing={2} direction="row">
        <Button variant="contained" href="login">
          Login
        </Button>
        <Button variant="contained" href="registro">
          Registrar
        </Button>
        <Button variant="contained" href="rating">
          Rating
        </Button>
      </Stack>
    </div>
  );
}
export default Home;
