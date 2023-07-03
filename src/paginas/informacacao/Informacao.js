import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Informacao.css";
import Button from "@mui/material/Button";

function Informacao() {

  return (
    <div className="Informacao">
      <ImageAvatars />
      <InformacaoPessoal />
      <DenseTable />
      <Buttons />
    </div>
  );
}

//Imagem de avatar
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

//Campo de informações
function InformacaoPessoal() {

  return (
    <div className="InformacaoPessoal">
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
        }}
      >
        <Divider variant="inset">Informações Pessoais</Divider>
        <ListItem>
          <ListItemText
            primary="Nome"
            secondary="Ayron Brhenno Silva Figueiredo"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Email" secondary="ayronbrhennoo@gmail.com" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Telefone" secondary="66 99967-5618" />
        </ListItem>
      </List>
    </div>
  );
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

function Buttons() {
  return (
    <div className="Buttons">
      <Stack spacing={2} direction="row">
        <Button variant="contained" href="ProjetoUsuario">
          Home
        </Button>
        <Button variant="contained" href="atividades">
          Atividades
        </Button>
        <Button variant="contained" href="sobremim">
          Sobre mim
        </Button>
      </Stack>
    </div>
  );
}

export default Informacao;
