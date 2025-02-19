import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Button,
  TablePagination,
  InputAdornment,
} from '@mui/material';
import Sidebar from '../../components/sidebar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TabsComponent from '@/components/tabs';
import ExpenseChart from '../../components/grafico_despesas';
import FilterListIcon from '@mui/icons-material/FilterList';

import { useRouter } from 'next/router';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const BASE_URL = 'http://localhost:8080/api/fornecedoras';

const FornecedoresPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fornecedores, setFornecedores] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const router = useRouter();
  

  

  return (
    <Box sx={{  display: 'flex',
   
      minHeight: '100vh', // Garante que o contêiner ocupe no mínimo a altura da tela
      width: '100%', // Garante que ocupe a largura inteira
      margin: 0,
      padding: 0, // Remova qualquer padding ou margem
      overflow: 'hidden', }}>
      <Sidebar />
      <Box
        sx={{
          
          flex: 1,
          marginLeft: '290px',
          width: '500px',
          height:'2100px', 
          paddingTop: '3rem',
          overflowX: 'hidden',
          overflowY: 'hidden',
          flexDirection: 'row',
          
          
        }}
      >
        <Box sx={{ position: 'relative', marginTop: '10px', overflowX: 'hidden', marginBottom:'70px'  }}>
          <TabsComponent sx={{ backgroundColor:'#F5F5F5',}} />
        </Box>

      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', }}>
  <Card
    sx={{
      width: '40%',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: 1,
      borderRadius: '25px',
      border: '2px solid #E0E0E0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centralizando o conteúdo do card
      position: 'relative', // Para posicionar o ícone no canto direito
    }}
  >
    <Typography variant="h6" sx={{ fontSize: '40px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>
      Maior Gasto
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '40px', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
      15.500
    </Typography>
    <FilterListIcon sx={{ position: 'absolute', top: '20px', right: '20px', color: '#003366', fontSize: '50px' }} />
  </Card>

  <Card
    sx={{
      width: '40%',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: 1,
      borderRadius: '25px',
      border: '2px solid #E0E0E0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centralizando o conteúdo do card
      position: 'relative', // Para posicionar o ícone no canto direito
    }}
  >
    <Typography variant="h6" sx={{ fontSize: '40px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>
      Total Gastos
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '40px', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
      27.500
    </Typography>
    <FilterListIcon sx={{ position: 'absolute', top: '20px', right: '20px', color: '#003366', fontSize: '50px' }} />
  </Card>
</Box>

        <Card
          sx={{
            padding: '20px',
            bgcolor: 'white',
            boxShadow: 1,
            borderRadius: '25px',
            width: '97%',
            margin: '0 auto',
            border: '2px solid #E0E0E0',
            marginTop: '50px',
          }}
        >
          <Typography variant="h5" sx={{  marginTop: '20px',marginBottom: '40px', fontWeight: 'bold',fontSize:'38px' }}>
              Despesas
          </Typography>

          <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <TextField
        label="Pesquisar gasto"
        variant="outlined"
        size="small"
        value={search}
     
        sx={{
          width: '60%', // Diminuímos o comprimento da barra de pesquisa
          marginLeft: '100px', // Adicionamos o deslocamento para a direita
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            '& fieldset': {
              border: '2px solid #333',  // Borda preta
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
          '& .MuiInputBase-input': {
            color: '#000000',
          },
          '& .MuiInputLabel-root': {
            color: '#000000',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon sx={{ color: 'black' }} />
            </InputAdornment>
          ),
        }}
      />
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                border: '2px solid #333',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                fontWeight: 'normal',
                fontSize: '20px',
                borderRadius: '60px',
                padding: '10px 0',
                width: '300px',
                height: '50px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
                marginRight: '90px',
              }}
          
            >
              Cadastrar Despesas
            </Button>
          </Box>

          <TableContainer sx={{ maxHeight: 'calc(100vh - 250px)', width: '100%', }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell sx={{ padding: '12px 16px', textAlign: 'center', fontWeight: 'bold',  fontSize: '20px' }}>Categoria</TableCell>
        <TableCell sx={{ padding: '12px 16px', textAlign: 'center', fontWeight: 'bold',  fontSize: '20px' }}>Data</TableCell>
        <TableCell sx={{ padding: '12px 16px', textAlign: 'center', fontWeight: 'bold'  ,fontSize: '20px' }}>Valor</TableCell>
        <TableCell sx={{ padding: '12px 16px', textAlign: 'center', fontWeight: 'bold',  fontSize: '20px' }}>Ações</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {[
        { id: 1, nome: "Fornecedor A", contato: "1111-1111", endereco: "Rua 1, Cidade A", chavePix: "pix@a.com" },
        { id: 2, nome: "Fornecedor B", contato: "2222-2222", endereco: "Rua 2, Cidade B", chavePix: "pix@b.com" },
        { id: 3, nome: "Fornecedor C", contato: "3333-3333", endereco: "Rua 3, Cidade C", chavePix: "pix@c.com" },
        { id: 4, nome: "Fornecedor D", contato: "4444-4444", endereco: "Rua 4, Cidade D", chavePix: "pix@d.com" },
        { id: 5, nome: "Fornecedor E", contato: "5555-5555", endereco: "Rua 5, Cidade E", chavePix: "pix@e.com" },
        { id: 6, nome: "Fornecedor F", contato: "6666-6666", endereco: "Rua 6, Cidade F", chavePix: "pix@f.com" },
      ]
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((fornecedora) => (
          <TableRow key={fornecedora.id}>
            <TableCell sx={{ textAlign: 'center' }}>{fornecedora.nome}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{fornecedora.contato}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{fornecedora.endereco}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{fornecedora.chavePix}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <IconButton sx={{ marginRight: 1, color: "#00509E" }}>
                <VisibilityIcon />
              </IconButton>
              <IconButton onClick={() => handleEditNavigation(fornecedora.id)} sx={{ marginRight: 1, color: "#00509E" }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteFornecedora(fornecedora.id)} sx={{ color: "#00509E" }}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
</TableContainer>
          <TablePagination
            component="div"
         
            page={page}
          
            rowsPerPage={rowsPerPage}
          
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Card>
        <Card
  sx={{
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: 1,
    
    borderRadius: '25px',
    border: '2px solid #E0E0E0',
    marginTop: '50px',
  }}
>
  <Typography variant="h5" sx={{ marginTop: '20px', marginBottom: '40px', fontWeight: 'bold',fontSize:'38px', }}>
    Gráfico de Despesas
  </Typography>
  <ExpenseChart />
</Card>
      </Box>
    </Box>
  );
};

export default FornecedoresPage;
