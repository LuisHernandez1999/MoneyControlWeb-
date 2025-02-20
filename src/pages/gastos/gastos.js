import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend,} from 'recharts';
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

import TabsComponent from '@/components/tabs';
import ExpenseChart from '../../components/grafico_despesas';


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
  const [isClient, setIsClient] = useState(false);
  
  

const data = [
  { name: 'Categoria 1', value: 15.500 },
  { name: 'Categoria 2', value: 5000 },
  { name: 'Categoria 3', value: 2500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Box sx={{  display: 'flex',
   
      minHeight: '100vh', 
      width: '100%',
      margin: 0,
      padding: 0, 
      overflow: 'hidden', }}>
      <Sidebar />
      <Box
        sx={{
          
          flex: 1,
          marginLeft: '290px',
          width: '500px',
          height:'2800px', 
          paddingTop: '3rem',
          overflowX: 'hidden',
          overflowY: 'hidden',
          flexDirection: 'row',
          
          
        }}
      >
        <Box sx={{ position: 'relative', marginTop: '10px', overflowX: 'hidden', marginBottom:'70px'  }}>
          <TabsComponent sx={{ backgroundColor:'#F5F5F5',}} />
        </Box>

        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    boxShadow: 3,
    padding: '20px',
    width: '85%',
    marginLeft: '90px',
    borderRadius: '25px',
    border: '2px solid #E0E0E0',
    backgroundColor: 'white',
    height: '800px',
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 'bold',
      fontSize: '38px',
      marginTop: '20px',
      marginBottom: '60px',
      color: 'black',
    }}
  >
    Visão Geral de Despesas
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row', 
      gap: '20px', 
    }}
  >
  
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '70px',
      }}
    >
      <Card
        sx={{
          width: '390px',
          height:'190px',
          padding: '17px',
          backgroundColor: 'white',
          boxShadow: 3,
          marginLeft: '99px',
          borderRadius: '35px',
          border: '2px solid #E0E0E0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '30px',
          }}
        >
          Maior Gasto
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: 'grey',
            marginBottom: '15px',
          }}
        >
          15.500
        </Typography>
       
      </Card>

      <Card
        sx={{
          width: '390px',
          padding: '17px',
          height:'190px',
          backgroundColor: 'white',
          marginLeft: '99px',
          boxShadow: 3,
          borderRadius: '35px',
          border: '2px solid #E0E0E0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '30px',
          }}
        >
          Total Gastos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: 'grey',
            marginBottom: '15px',
          }}
        >
          27.500
        </Typography>
       
      </Card>
    </Box>

    {/* Tabela com os 3 maiores gastos */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: 1,
        marginLeft:'180px',
        padding: '15px',
        width: '480px',
        height: '200px',
        border: '2px solid #E0E0E0',
        overflowY: 'auto',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'black',
          marginLeft:'150px',
          marginBottom: '15px',
        }}
      >
         Maiores Gastos
      </Typography>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr
            style={{
              backgroundColor: '#F5F5F5',
              borderBottom: '2px solid #E0E0E0',
            }}
          >
            <th
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                padding: '10px 0',
                color: '#003366',
              }}
            >
              Nome
            </th>
            <th
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                padding: '10px 0',
                color: '#003366',
              }}
            >
              Valor
            </th>
            <th
              style={{
                fontWeight: 'bold',
                textAlign: 'left',
                padding: '10px 0',
                color: '#003366',
              }}
            >
              Categoria
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              borderBottom: '1px solid #E0E0E0',
            }}
          >
            <td style={{ padding: '10px 0' }}>Gasto A</td>
            <td style={{ padding: '10px 0' }}>15.500</td>
            <td style={{ padding: '10px 0' }}>Categoria 1</td>
          </tr>
          <tr
            style={{
              borderBottom: '1px solid #E0E0E0',
            }}
          >
            <td style={{ padding: '10px 0' }}>Gasto B</td>
            <td style={{ padding: '10px 0' }}>5.000</td>
            <td style={{ padding: '10px 0' }}>Categoria 2</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0' }}>Gasto C</td>
            <td style={{ padding: '10px 0' }}>2.500</td>
            <td style={{ padding: '10px 0' }}>Categoria 3</td>
          </tr>
        </tbody>
      </table>
    </Box>
  </Box>
  <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-48px',
    boxShadow: 3,
    padding: '20px',
    width: '35%',
    marginLeft: '722px',
    borderRadius: '25px',
    border: '2px solid #E0E0E0',
    backgroundColor: 'white',
    height: '320px',
    marginTop: '-230px',
    textAlign: 'center', // Centraliza o título
    justifyContent: 'flex-start', // Ajuste para que o conteúdo ocupe o espaço necessário
  }}
>
  {/* Título */}
  <Typography
    variant="h6"
    sx={{
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '15px',
      marginTop: '15px', // Espaço superior
    }}
  >
    Porcentagem de Gastos
  </Typography>

  {/* Gráfico de Pizza */}
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center', // Centraliza o gráfico horizontalmente
      alignItems: 'center', // Centraliza o gráfico verticalmente
      height: '120px', // Altura ajustada para melhor centralização do gráfico
    }}
  >
    <PieChart width={200} height={230}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
      
        outerRadius={90} // Ajusta o tamanho
        fill="#8884d8"
        dataKey="value"
        labelLine={false} // Remove as linhas do gráfico
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        iconSize={12}
        layout="horizontal" // Alinha a legenda horizontalmente
        verticalAlign="top" // Coloca a legenda logo abaixo do gráfico
        align="center"
        wrapperStyle={{ paddingTop: '0px', marginTop: '238px' }} // Ajuste de margens para diminuir o espaço
      />
    </PieChart>
  </Box>
</Box>
</Box>
        <Card
          sx={{
            padding: '20px',
            bgcolor: 'white',
            boxShadow: 3,
            borderRadius: '25px',
            width: '85%',
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
            borderRadius: '14px',
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
            boxShadow: 3,
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
                boxShadow: 3,
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
    boxShadow: 3,
    width: '85%',
    marginLeft:'102px',
    
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
