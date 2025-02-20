import React from 'react'; 
import { Box, List, ListItem, ListItemIcon, ListItemText, TextField, Typography, Divider } from '@mui/material';
import { AiOutlineUser, AiOutlineAppstoreAdd, AiOutlineDollarCircle, AiOutlineAppstore, AiOutlineBarChart, AiOutlineFileSearch, AiOutlineTeam, AiOutlineDesktop, AiOutlineLogout } from 'react-icons/ai'; // Ícones
import { useRouter } from 'next/router';

export default function Sidebar() {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <Box
            sx={{
                width: '300px',
                height: '100vh',
                backgroundColor: '#333',
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
            <Typography variant="h6" sx={{ marginTop: '5rem', fontSize: '30px', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex', color: 'white' }}>
                Bem-vindo:User1!
            </Typography>
            {/* Barra de pesquisa substituindo a logo */}
            <Box sx={{ marginBottom: '2rem', marginTop: '4rem' }}>
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
                {/* Alterado o ícone de Fornecedores para Funcionários */}
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('../../fornecedores/fornecedores_tabela')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineTeam color="white" size={32} /> {/* Ícone de Funcionários */}
                    </ListItemIcon>
                    <ListItemText primary="Funcionários" sx={{ color: 'white' }} />
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

                {/* Alterado o ícone de Lote para Equipamentos */}
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('../../lotes/lotes_geral')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineDesktop color="white" size={32} /> {/* Ícone de Equipamentos */}
                    </ListItemIcon>
                    <ListItemText primary="Equipamentos" sx={{ color: 'white' }} />
                </ListItem>

                {/* Novo ícone e link para Relatório */}
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('/Relatorio')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineBarChart color="white" size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Relatório" sx={{ color: 'white' }} />
                </ListItem>

                {/* Novo ícone e link para Pesquisa */}
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('/Pesquisa')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineFileSearch color="white" size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Pesquisa" sx={{ color: 'white' }} />
                </ListItem>

                {/* Novo ícone e link para Aplicativos */}
                <ListItem
                    button
                    sx={{
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                    }}
                    onClick={() => handleNavigation('/Aplicativos')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineAppstore color="white" size={32} /> {/* Ícone de Aplicativos */}
                    </ListItemIcon>
                    <ListItemText primary="Aplicativos" sx={{ color: 'white' }} />
                </ListItem>
            </List>

            {/* Linha separadora */}
            <Divider sx={{ marginTop:'-40px', backgroundColor: 'WHITE' }} />

            {/* Ícone de logout */}
            <ListItem
                button
                sx={{
                    marginBottom: '1rem',
                    paddingLeft: '1rem',
                }}
                onClick={() => handleNavigation('/logout')}
            >
                <ListItemIcon sx={{ marginTop: '10px' }}>
                    <AiOutlineLogout color="white" size={32} /> {/* Ícone de Logout */}
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: 'white' }} />
            </ListItem>
        </Box>
    );
}
