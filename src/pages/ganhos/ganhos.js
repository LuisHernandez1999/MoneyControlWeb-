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

  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setFornecedores(response.data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error.message);
      }
    };
    fetchFornecedores();
  }, []);

  const deleteFornecedora = async (id, values) => {
    try {
      const formData = new FormData();
      formData.append(
        "fornecedora",
        JSON.stringify({
          id,
          nome: values.nome,
          contato: values.contato,
          endereco: values.endereco,
          chavePix: values.chavePix,
        })
      );
      const response = await axios.post(`${BASE_URL}/delete`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log('Fornecedor deletado com sucesso:', response.data);
      setFornecedores((prev) => prev.filter((fornecedora) => fornecedora.id !== id));
      alert('Fornecedor deletado com sucesso!');
    } catch (error) {
      console.error("Erro ao deletar fornecedor:", error);
      alert('Erro ao deletar fornecedor.');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNavigateToRegister = () => {
    if (router) {
      router.push('./cadastro_fornecedores');
    }
  };

  const handleEditNavigation = (id) => {
    router.push(`./editar_fornecedores?id=${id}`);
  };

  const handleNavigation = () => {
    router.push('./visualizar_fornecedor');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleExportToExcel = () => {
    console.log('Exportando fornecedores:', fornecedores);

    const headers = ['Nome', 'Contato', 'Endereço', 'Chave Pix'];

    const dataForExport = fornecedores.length > 0
      ? fornecedores.map((fornecedora) => ({
          Nome: fornecedora.nome || 'N/A',
          Contato: fornecedora.contato || 'N/A',
          Endereço: fornecedora.endereco || 'N/A',
          'Chave Pix': fornecedora.chavePix || 'N/A',
        }))
      : [{ Nome: 'N/A', Contato: 'N/A', Endereço: 'N/A', 'Chave Pix': 'N/A' }];

    const sheetData = [headers, ...dataForExport.map(item => Object.values(item))];

    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Fornecedores');
    XLSX.writeFile(workbook, 'fornecedores.xlsx');
  };

  const filteredFornecedores = fornecedores.filter((fornecedora) => {
    return fornecedora.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          marginLeft: '290px',
          maxHeight: '200vh',
          height:'2200px', 
          backgroundColor: '#f9f9f9',
          paddingTop: '3rem',
          
        }}
      >
        <Box sx={{ position: 'relative', top: '-38px', marginBottom: '0.1px',backgroundColor: '#f9f9f9', }}>
          <TabsComponent />
        </Box>

        {/* Adicionando os cards espaçados abaixo das abas */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px',backgroundColor: '#f9f9f9', }}>
          <Card
            sx={{
              width: '44%',
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: 1,
              borderRadius: '25px',
              border: '2px solid #E0E0E0'
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: '20px', }}>
              Card 1
            </Typography>
            <Typography variant="body1">
              Conteúdo do Card 1
            </Typography>
          </Card>
          <Card
            sx={{
              width: '44%',
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: 1,
              borderRadius: '25px',
              border: '2px solid #E0E0E0'
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
              Card 2
            </Typography>
            <Typography variant="body1">
              Conteúdo do Card 2
            </Typography>
          </Card>
        </Box>

        <Card
          sx={{
            padding: '20px',
            bgcolor: 'white',
            boxShadow: 1,
            borderRadius: '25px',
            width: '95%',
            margin: '0 auto',
            border: '2px solid #E0E0E0',
            marginTop: '50px',
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '40px', fontWeight: 'bold',fontSize:'25px' }}>
            Minhas Despesas
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', }}>
            <TextField
              label="Pesquisar fornecedor"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                width: '50%',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '25px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  '& fieldset': {
                    borderColor: '#CCCCCC',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00509E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00509E',
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
                  color: '#00509E',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlinedIcon sx={{ color: 'green' }} />
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
                fontSize: '15px',
                borderRadius: '60px',
                padding: '10px 0',
                width: '170px',
                height: '40px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
              }}
              onClick={handleNavigateToRegister}
            >
              Cadastrar Despesas
            </Button>
          </Box>

          <TableContainer sx={{ maxHeight: 'calc(100vh - 250px)', width: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ padding: '12px 16px', textAlign: 'center' }}>
                    <strong>Categoria</strong>
                  </TableCell>
                  <TableCell sx={{ padding: '12px 16px', textAlign: 'center' }}>
                    <strong>Data</strong>
                  </TableCell>
                  <TableCell sx={{ padding: '12px 16px', textAlign: 'center' }}>
                    <strong>Valor</strong>
                  </TableCell>
                  <TableCell sx={{ padding: '12px 16px', textAlign: 'center' }}>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFornecedores
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((fornecedora) => (
                    <TableRow key={fornecedora.id}>
                      <TableCell>{fornecedora.nome}</TableCell>
                      <TableCell>{fornecedora.contato}</TableCell>
                      <TableCell>{fornecedora.endereco}</TableCell>
                      <TableCell>{fornecedora.chavePix}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={handleNavigation}
                          sx={{ marginRight: 1, color: '#00509E' }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleEditNavigation(fornecedora.id)}
                          sx={{ marginRight: 1, color: '#00509E' }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => deleteFornecedora(fornecedora.id)}
                          sx={{ color: '#00509E' }}
                        >
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
            count={filteredFornecedores.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
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
  <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold',fontSize:'25px' }}>
    Gráfico de Despesas
  </Typography>
  <ExpenseChart />
</Card>
      </Box>
    </Box>
  );
};

export default FornecedoresPage;
