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
  CircularProgress,
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
          width: '1000px',
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
   
  }}
>
 
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
          width: '540px',
          padding: '17px',
          height:'150px',
          backgroundColor: '#ADD8E6',
          boxShadow: 4,
          marginLeft: '9px',
          borderRadius: '50px',
          border: '2px solidrgb(255, 255, 255)',
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
            color: '#4682B4',  
            marginBottom: '30px',
          }}
        >
         Quantidade de Despesas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: '#4A6C89', 
            marginBottom: '15px',
          }}
        >
          470
        </Typography>
       
      </Card>

      <Card
        sx={{
          width: '540px',
          padding: '17px',
          height:'150px',
          backgroundColor: '#F7D0D0', 
          marginLeft: '9px',
          boxShadow: 4,
          borderRadius: '50px',
          border: '2px solidrgb(255, 255, 255)',
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
            color: '#7F3D3D',  
            marginBottom: '30px',
          }}
        >
          Valor Total de Despesas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: '#9F5B5B',  
            marginBottom: '15px',
          }}
        >
           27.500
        </Typography>
       
      </Card>
    </Box>

   
   
  </Box>
  <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',  
    top: '300px',  
    left: '1000px',
    boxShadow: 3,
    padding: '20px',
    width: '30%',
    borderRadius: '50px',
    border: '2px solid #E0E0E0',
    backgroundColor: 'white',
    height: '480px',
    textAlign: 'center', 
    justifyContent: 'flex-start',  
  }}
>
 
  <Typography
    variant="h6"
    sx={{
      fontSize: '38px',
      fontWeight: 'bold',
      color: 'grey',  
      marginBottom: '15px', 
    }}
  >
    Despesas a Pagar
  </Typography>
  <Box
  sx={{
    
    position: 'absolute',  
    top: '104px', 
    left: '50%',  
    transform: 'translateX(-50%)',  
  }}
>
  <CircularProgress
    variant="determinate"
    value={77} 
    size={270} 
    thickness={4}
    sx={{
      
      color: '#81C784',
        
    }}
  />
  <Typography
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#4682B4',  
      fontSize:'38px',
    }}
  >
    82%
  </Typography>
</Box>
<Box
  sx={{
    position: 'absolute',
    top: '400px',  
    left: '50%', 
    transform: 'translateX(-50%)',
    width: '80%', 
    textAlign: 'center', 
  }}
>
  
 

 
  <Typography
  sx={{
   
    fontSize: '17px',
    color: 'grey',  
    fontFamily: '"Roboto", sans-serif',  
    fontWeight: 'bold',  
    lineHeight: 1.6, 
    
  }}
>
  As despesas não pagas respresentam uma porcentagem de  <span style={{ color: '#81C784' }}>82%</span> do total, 
  o que equivale a <span style={{ color: '#D32F2F' }}>500</span> despesas. 
  Em termos financeiros, isso representa um valor de 
  <span style={{ color: '#9C27B0' }}>22.777</span>.
</Typography>
</Box>


</Box>
</Box>
        <Card
          sx={{
            padding: '20px',
            bgcolor: 'white',
            boxShadow: 3,
            borderRadius: '50px',
            width: '54%',
            marginRight: '100px',
            border: '2px solid #E0E0E0',
            marginTop: '80px',
            
          }}
        >
          <Typography variant="h5" sx={{color:'grey',marginTop: '20px',marginBottom: '40px', fontWeight: 'bold',fontSize:'38px',    textAlign: 'center',  }}>
            Controle de despesas
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
          width: '60%',
          marginLeft: '40px', 
          '& .MuiOutlinedInput-root': {
            borderRadius: '14px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            '& fieldset': {
              border: '2px solid #333', 
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
                width: '150px',
                height: '50px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
                marginRight: '30px',
              }}
          
            >
              Adicionar
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
    bgcolor: 'white',
    boxShadow: 3,
    position: 'absolute',
    borderRadius: '50px',
    width: '27%',
    height: '600px',
    marginLeft: '750px',
    border: '2px solid #E0E0E0',
    marginTop: '-670px',
  }}
>
  <Typography
    variant="h5"
    sx={{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '38px',
      marginTop: '20px',
      marginBottom: '4px',
      color:'grey',
    }}
  >
     Despesas por Categoria 
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '102px',
    }}
  >
   
    <Box
      sx={{
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#E0F7FA', 
        padding: '15px',
        borderRadius: '50px',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', color: '#00796B' }} 
      >
        40%
      </Typography>
      <Typography>Categoria 1</Typography>
    </Box>
    <Box
      sx={{
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#FFECB3', 
        padding: '15px',
        borderRadius: '50px',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', color: '#FF5722' }} 
      >
        30%
      </Typography>
      <Typography>Categoria 2</Typography>
    </Box>
    <Box
      sx={{
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#FFE0B2', 
        padding: '15px',
        borderRadius: '50px',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', color: '#FF9800' }} 
      >
        20%
      </Typography>
      <Typography>Categoria 3</Typography>
    </Box>
  </Box>
</Card>
        
        <Card
  sx={{
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: 3,
    width: '96%',
    height:'900px',
    marginRight: '100px',
    borderRadius: '30px',
    border: '2px solid #E0E0E0',
    marginTop: '50px',
  }}
>
  <Typography variant="h5" sx={{ marginTop: '20px', marginBottom: '40px', fontWeight: 'bold',fontSize:'38px',  color:'grey', }}>
    Gráfico de Despesas
  </Typography>
  <ExpenseChart />
</Card>
      </Box>
    </Box>
  );
};

export default FornecedoresPage;
