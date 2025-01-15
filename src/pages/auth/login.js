import Head from 'next/head';   
import { Box, TextField, Button, Typography } from '@mui/material';
import Image from 'next/image'; // Importando o componente de imagem do Next.js

const ResetPassword = () => {
    return (
        <>
            <Head>
                <title>login</title>
            </Head>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'url(/imagens/BACKMONEY.jpg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        minHeight: '100vh',
                    }}
                />
                <Box 
                    sx={{
                        display: 'flex',
                        width: '70%',
                        height: '70vh',
                        zIndex: 1,
                        border: '1px solid rgba(0, 0, 0, 0.1)', 
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
                    }}
                >
                   
                    <Box
                        sx={{
                            backgroundColor: 'black',
                            flex: 1,
                            borderRadius: '12px 0 0 12px', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            paddingTop: '4rem', 
                        }}
                    >

                        <Box sx={{ marginBottom: '1rem' }}>
                            <Image 
                                src="/imagens/moneylogo2.png" 
                                alt="Logo"
                                width={250} 
                                height={250} // Ajuste o tamanho conforme necessário
                            />
                        </Box>

                     
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '16px',
                                textAlign: 'center',
                                color: 'white',
                                marginTop: '1rem', // Ajuste no espaçamento
                                margin: '1.5rem',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                lineHeight: 1.8, // Melhorando a legibilidade
                            }}
                        >
                            O Money Vault pode te ajudar a ter um maior controle do seu dinheiro através de análises detalhadas,
                            te ajudando a entender seus gastos, planejar suas finanças .
                        </Typography>
                    </Box>
              
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            flex: 1,
                            borderRadius: '0 12px 12px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingTop: '9rem', 
                        }}
                    >
                   
                       

                      
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: '2rem', 
                                color: '#1DB954',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 'bold',
                                fontSize: '35px',
                            }}
                        >
                            Virtual Money Vault
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: '1rem', 
                                color: 'black',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: '14px',
                            }}
                        >
                            Entre seu email e senha
                        </Typography>

                     
                        <TextField
                            label="E-mail"
                            type="email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                                marginBottom: '1.5rem', 
                                width: '85%',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '25px',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
                                },
                            }}
                        />

                      
                        <TextField
                            label="Senha"
                            type="password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                                marginBottom: '1.5rem', 
                                width: '85%',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '25px',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
                                },
                            }}
                        />

                     
                        <Button
                            variant="contained"
                            sx={{
                                width: '20%',
                                padding: '0.2rem 1rem', 
                                height: '40px', 
                                color: 'white',
                                backgroundColor: 'black',
                                fontSize: '14px',
                                borderRadius: '25px',
                                '&:hover': {
                                    backgroundColor: '#333',
                                },
                            }}
                        >
                            Entrar
                        </Button>

                       
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '1rem',
                                color: 'black',
                                marginTop: '0.9rem', 
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'gray',
                                },
                            }}
                        >
                           Cadastrar-se
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ResetPassword;
