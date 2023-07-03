import * as React from "react";
import "./Login.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
    return (
        <div className="Login">
            <h1>Login</h1>
            <Inputs />
        </div>
    );
}

function Inputs() {
    const [textInputNome, setTextInputNome] = useState("");
    const [textInputSenha, setTextInputSenha] = useState("");


    const handleTextInputChangeNome = (event) => {
        setTextInputNome(event.target.value);
    };
    const handleTextInputChangeSenha = (event) => {
        setTextInputSenha(event.target.value);
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
                        id="SenhaField"
                        label="Senha"
                        fullWidth
                        value={textInputSenha}
                        onChange={handleTextInputChangeSenha}
                    />
                    <br></br>
                    <br></br>
                </div>
            </Box>
            <div className="Buttonsa">
                <Button
                    className="BL"
                    variant="contained"
                    href="info"
                    onClick={Enviar(textInputNome, textInputSenha)}
                >
                    Enviar
                </Button>
            </div>
        </div>
    );
}

function Enviar(nome, senha) {
    console.log(nome, senha)
}
export default Login;
