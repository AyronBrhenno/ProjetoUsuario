import * as React from "react";
import "./Atividades.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Atividades() {
    return (
        <div className="Atividades">
            <h1>Insirir novas Atividades</h1>
            <Inputs />
            <DenseTable />
        </div>
    );
}

function Inputs() {
    const [textInputAtividade, setTextInputAtividade] = useState("");
    const [textInputDataInicio, setTextInputDataInicio] = useState("");
    const [textInputDataFinal, setTextInputDataFinal] = useState("");


    const handleTextInputChangeAtividade = (event) => {
        setTextInputAtividade(event.target.value);
    };
    const handleTextInputChangeDataInicio = (event) => {
        setTextInputDataInicio(event.target.value);
    };
    const handleTextInputChangeDataFinal = (event) => {
        setTextInputDataFinal(event.target.value);
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
                        id="AtividadeField"
                        label="Atividade"
                        value={textInputAtividade}
                        fullWidth
                        onChange={handleTextInputChangeAtividade}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                        id="DataInicioField"
                        label="Data de início"
                        fullWidth
                        value={textInputDataInicio}
                        onChange={handleTextInputChangeDataInicio}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                        id="DataFinalField"
                        label="Data de finalização"
                        fullWidth
                        value={textInputDataFinal}
                        onChange={handleTextInputChangeDataFinal}
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
                    onClick={Enviar(textInputAtividade, textInputDataInicio, textInputDataFinal)}
                >
                    Enviar
                </Button>
            </div>
        </div>
    );
}

function Enviar(atividade, dataInicio, dataFinalizacao) {
    console.log(atividade, dataInicio, dataFinalizacao)
}

//Aqui começa as tabelas
function createData(atividades, dataInicio, dataFinalizacao) {
    return { atividades, dataInicio, dataFinalizacao };
}

const rows = [
    createData("Entregar relátorio", "2023-03-16", "2023-03-25"),
    createData("Corrigir bug", "2023-05-14", "2023-05-15"),
    createData("Enviar convite", "2023-07-01", "2023-07-05"),
    createData("Reunião de equipe", "2023-07-10", "2023-07-11"),
    createData("Preparar apresentação", "2023-07-15", "2023-07-20"),
    createData("Realizar testes", "2023-07-25", "2023-07-28"),
    createData("Atualizar documentação", "2023-08-02", "2023-08-05"),
    createData("Treinamento de novos funcionários", "2023-08-10", "2023-08-12"),
    createData("Finalizar projeto", "2023-08-15", "2023-08-20"),
];

function DenseTable() {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 500,
                bgcolor: "background.paper",
            }}
        >
            <Divider variant="inset">Atividades</Divider>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Atividades</TableCell>
                            <TableCell align="right">Data de início</TableCell>
                            <TableCell align="right">Data de finalização</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.atividades}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.atividades}
                                </TableCell>
                                <TableCell align="right">{row.dataInicio}</TableCell>
                                <TableCell align="right">{row.dataFinalizacao}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </List>
    );
}
export default Atividades;
