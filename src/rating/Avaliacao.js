import * as React from "react";
import "./Avaliacao.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function Avaliacao() {
  return (
    <div className="Avaliacao">
      <h1>Avaliacao</h1>
      <p>Insira sua avaliação sobre o perfil do Ayron Brhenno</p>
      <BasicRating />
    </div>
  );
}

function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

    </Box>
  );
}
export default Avaliacao;
