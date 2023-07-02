import * as React from "react";
import { useState } from "react";
import "./Registro.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Registro() {
  return (
    <div className="Registro">
      <h1>Registrar</h1>
      <Inputs />
    </div>
  );
}
function Inputs() {
  const [textInputNome, setTextInputNome] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputTelefone, setTextInputTelefone] = useState("");

  const handleTextInputChangeNome = (event) => {
    setTextInputNome(event.target.value);
  };
  const handleTextInputChangeEmail = (event) => {
    setTextInputEmail(event.target.value);
  };
  const handleTextInputChangeTelefone = (event) => {
    setTextInputTelefone(event.target.value);
  };
  return (
    <div className="Inputs">
      <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="NomeField"
            label="Nome"
            value={textInputNome}
            fullWidth
            onChange={handleTextInputChangeNome}
          />
          <br></br>
          <br></br>
          <TextField
            id="EmailField"
            label="Email"
            fullWidth
            value={textInputEmail}
            onChange={handleTextInputChangeEmail}
          />
          <br></br>
          <br></br>
          <TextField
            id="TelefoneField"
            label="Telefone"
            fullWidth
            value={textInputTelefone}
            onChange={handleTextInputChangeTelefone}
          />
          <br></br>
          <br></br>
        </div>
      </Box>
      <div className="Buttons">
        <Button
          variant="contained"
          href="info"
          onClick={Enviar(textInputNome, textInputEmail, textInputTelefone)}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}

function Enviar(nome, email, telefone) {
  
}
export default Registro;
