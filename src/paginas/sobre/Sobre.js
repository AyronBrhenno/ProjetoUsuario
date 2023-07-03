import * as React from "react";
import "./Sobre.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function Sobre() {
    return (
        <div className="Sobre">
            <h1>Sobre mim</h1>
            <ImageAvatars />
            <Inputs />
        </div>
    );
}

function ImageAvatars() {
    return (
        <div className="Avatar">
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}
                />
            </Stack>
        </div>
    );
}
const txt = "Olá! Meu nome é Ayron Brhenno e tenho 18 anos. Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais incríveis. Com um amplo conhecimento em CSS, HTML e JavaScript, estou constantemente buscando aprimorar minhas habilidades para oferecer experiências de usuário cativantes e funcionais."
function Inputs() {

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
                        label="Sobre mim"
                        value={txt}
                        fullWidth
                        multiline
                    />
                </div>
            </Box>
            <div className="Buttons">
                <IconButton
                    className="BL"
                    variant="contained"
                >
                    <EditIcon />
                </IconButton>
            </div>
        </div>
    );
}
export default Sobre;
