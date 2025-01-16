import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { AiOutlineBarChart, AiOutlineUser, AiOutlineFileText } from 'react-icons/ai'; // Novos ícones
import { useRouter } from 'next/router';

export default function Sidebar() {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <Box
            sx={{
                width: '200px', // Ajuste a largura conforme necessário
                height: '100vh',
                backgroundColor: '#333',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '1rem',
               
                zIndex: 1000, // Garantir que a sidebar fique sobre outros componentes
            }}
        >

            <List sx={{ flexGrow: 1, marginTop: '2rem' }}>
                <ListItem
                    button
                    sx={{
                        marginBottom: '0.5rem', // Ajuste o espaçamento conforme necessário
                        paddingLeft: '0.5rem', // Reduza o padding
                    }}
                    onClick={() => handleNavigation('/estatisticas')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineBarChart color="#FFFFFF" size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Estatísticas" sx={{ color: '#FFFFFF' }} />
                </ListItem>

                <ListItem
                    button
                    sx={{
                        marginBottom: '0.5rem',
                        paddingLeft: '0.5rem',
                    }}
                    onClick={() => handleNavigation('/perfil')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineUser color="#FFFFFF" size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Perfil" sx={{ color: '#FFFFFF' }} />
                </ListItem>

                <ListItem
                    button
                    sx={{
                        marginBottom: '0.5rem',
                        paddingLeft: '0.5rem',
                    }}
                    onClick={() => handleNavigation('/resumo')}
                >
                    <ListItemIcon sx={{ marginTop: '10px' }}>
                        <AiOutlineFileText color="#FFFFFF" size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Resumo" sx={{ color: '#FFFFFF' }} />
                </ListItem>
            </List>
        </Box>
    );
}
