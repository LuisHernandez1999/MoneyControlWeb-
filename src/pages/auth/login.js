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
                        backgroundColor: '#f0f0f0', // Fundo cinza claro
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
                        borderRadius: '24px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
                    }}
                >
                    {/* Lado esquerdo com imagem */}
                    <Box
                        sx={{
                            backgroundColor: '#333',
                            flex: 1,
                            borderRadius: '24px 0 0 24px', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            paddingTop: '4rem', 
                            position: 'relative', // Posicionando o conteúdo dentro do Box
                            width: '100%', // Garantindo que o Box ocupe toda a largura
                            height: '87.5%', // Garantindo que o Box ocupe toda a altura
                        }}
                    >
                        {/* Imagem que ocupará todo o espaço */}
                        <Box sx={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0 
                        }}>
                            <Image 
                                src="/imagens/img5.png" // Caminho da imagem
                                alt="Logo"
                                layout="fill" // Preenche toda a área disponível
                                objectFit="cover" // Faz a imagem cobrir toda a área
                            />
                              <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo preto semitransparente
            backdropFilter: 'blur(2px)', // Reduzido o desfoque
            borderRadius: '12px 0 0 12px',// Mesmo arredondamento do container
        }}
    />
     <Typography
        variant="h4"
        sx={{
            position: 'relative', // Para manter sobre o blur
            color: 'white',
            fontWeight: 'bold',
            zIndex: 2, // Para garantir que o texto fique acima do blur
            textAlign: 'center',
            padding: '1rem',
            textShadow: '0px 0px 10px rgba(0, 0, 0, 1)', // Adiciona um leve contorno ao texto
            paddingTop: '14rem', 
        }}
    >
        Bem-vindo ao Virtual Money Vault, alcance o controle do seu dinheiro 
    </Typography>

                        </Box>
                    </Box>
                    
                    {/* Lado direito branco com inputs */}
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            flex: 1,
                            borderRadius: '0 12px 12px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingTop: '3rem', 
                        }}
                    >
                        <Box
        sx={{
            position: 'relative',
            width: 200, // Largura do logotipo
            height: 190, // Altura do logotipo
            marginBottom: '1rem', // Espaço entre o logotipo e o texto
        }}
    >
        <Image
            src="/imagens/moneylogo2.png" // Caminho da imagem do logotipo
            alt="Logotipo"
            layout="fill" // Faz a imagem ocupar toda a área do contêiner
            objectFit="cover" // Ajusta a imagem para cobrir o contêiner
        />
    </Box>
                       
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: '2rem', 
                                color: '#black',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 'bold',
                                fontSize: '35px',
                            }}
                        >
                            Virtual Money Vault
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
                                width: '17%',
                                padding: '0.2rem 1rem', 
                                height: '40px', 
                                color: 'black',
                                border: '2px solid black',
                                backgroundColor: 'white',
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
