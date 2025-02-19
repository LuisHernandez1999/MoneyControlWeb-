import React from 'react'; 
import { Box, List, ListItem, ListItemIcon, ListItemText, TextField,Typography } from '@mui/material';
import { AiOutlineUser, AiOutlineAppstoreAdd, AiOutlineDollarCircle, AiOutlineAppstore } from 'react-icons/ai'; // Ícones
import { useRouter } from 'next/router';

export default function Sidebar() {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <Box
            sx={{
                width: '250px',
                height: '100vh',
                backgroundColor: 'black',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '1rem',
                zIndex: 1000, 
            }}
        >
              <Typography variant="h6" sx={{  marginTop: '5rem',fontSize:'30px',fontWeight: 'bold',alignItems: 'center', justifyContent: 'center', display: 'flex', color:'white'}}>
              Bem vindo!
            </Typography>
            {/* Barra de pesquisa substituindo a logo */}
            <Box sx={{ marginBottom: '2rem' ,marginTop: '4rem'}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Pesquisar..."
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        '& .MuiInputBase-root': {
                            height: '40px',
                        },
                    }}
                />
            </Box>

            <List sx={{ flexGrow: 1 }}> 
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('../../fornecedores/fornecedores_tabela')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineUser color="white" size={32} /> 
                    </ListItemIcon>
                    <ListItemText primary="Fornecedores" sx={{ color: 'white' }} />
                </ListItem>

               
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('/Caixa')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineDollarCircle color="white" size={32} /> 
                    </ListItemIcon>
                    <ListItemText primary="Caixa" sx={{ color: 'white' }} />
                </ListItem>

                {/* Ícone e texto para Lote */}
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('../../lotes/lotes_geral')}
                >
                   
                </ListItem>
            </List>
        </Box>
    );
}
