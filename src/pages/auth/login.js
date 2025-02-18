import Head from 'next/head';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const ResetPassword = () => {
    const [setInvalidEmail] = useState('');
    const router = useRouter();

    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        router.push('/fornecedores/fornecedores_tabela');
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email inválido')
                .required('Email é obrigatório')
                .matches(
                    /^[\w._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/,
                    'O e-mail deve ser de um dos domínios permitidos: gmail.com, hotmail.com, yahoo.com, outlook.com'
                ),
            password: Yup.string()
                .required('Senha é obrigatória')
                .min(8, 'A senha deve ter pelo menos 8 caracteres'),
        }),
        onSubmit: async (values) => {
            setInvalidEmail('');
            try {
                const resetPasswordConfirmUrl = buildResetPasswordConfirmUrl(values.email);
                console.log('URL de confirmação:', resetPasswordConfirmUrl);
                alert('E-mail de redefinição de senha enviado com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar o e-mail:', error);
                formik.setErrors({ submit: 'Ocorreu um erro ao enviar o e-mail. Tente novamente.' });
                setInvalidEmail(values.email);
            }
        },
        validateOnChange: false,
        validateOnBlur: true,
    });

    return (
        <>
            <Head>
                <title>login</title>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap" rel="stylesheet" />
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
                        backgroundImage: 'url(/imagens/bkbk.jpg)',
                        backgroundSize: 'cover', // Ajusta para cobrir todo o contêiner
                        backgroundRepeat: 'no-repeat', // Evita repetição
                        backgroundPosition: 'center', // Centraliza a imagem
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
                        padding: '2rem',
                        maxWidth: '480px',
                        maxHeight: '550px', 
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 1,
                      
                    }}
                >
                    <Box sx={{marginLeft: '-0.4rem', marginBottom: '-3rem'  }}>
                        <img src="/imagens/lg2.png" alt="Logo" style={{ width: '240px' }} />
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{
                            marginBottom: '0.5rem', 
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 'bold',
                            fontSize:'35px',
                        }}
                    >
                       Controle Financeiro  
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            
                            color: 'black',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            marginBottom: '0.5rem', 
                            fontSize:'20px',
                        }}
                    >
                      Entre seu email e senha
                    </Typography>
                    

                    <form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '0.5rem',
                            }}
                        >
                            {/* Campo de E-mail */}
                            <TextField
                                label="E-mail"
                                type="email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{
                                    marginBottom: '1rem',
                                    border: '2px solid black',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '15px',
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'transparent', 
                                        },
                                    },
                                }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="email"
                            />

                            {/* Campo de Senha */}
                            <TextField
                                label="Senha"
                                type="password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{
                                    marginBottom: '1rem',
                                    border: '2px solid black',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '15px',
                                    
                                }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="password"
                            />

<Button
    type="submit"
    sx={{
        width: '70%',
        padding: '0.5rem 1rem',
        color: 'white', // Cor do texto
        fontSize: '15px', // Tamanho da fonte
        borderRadius: '50px',
        marginBottom: '0.8rem',
        fontWeight: 'bold', // Tornar o texto mais destacado
        textTransform: 'none',
        
        backgroundColor: 'black', // Fundo preto
        '&:hover': {
            backgroundColor: '#333', // Tom mais claro de preto ao passar o mouse
        },
    }}
>
    Entrar
</Button>

<Button
    type="submit"
    sx={{
        width: '40%',
        padding: '0.5rem 1rem',
        color: 'black', // Cor do texto
        fontSize: '15px', // Tamanho da fonte
        borderRadius: '50px',
        fontWeight: 'bold', // Tornar o texto mais destacado
        textTransform: 'none',
        backgroundColor: 'white',
        marginBottom: '0.5rem',
        border: '2px solid black', // Fundo preto
        '&:hover': {
            backgroundColor: '#333', // Tom mais claro de preto ao passar o mouse
        },
    }}
>
    Cadastre-se 
</Button>
                        </Box>
                    </form>

                    <Box 
    sx={{
        marginTop: '0.9rem', // Margem superior geral
        textAlign: 'center',
    }}
>
</Box>
                    {formik.errors.submit && (
                        <Typography
                            color="error"
                            sx={{
                                mt: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                            variant="body2"
                        >
                            {formik.errors.submit}
                        </Typography>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default ResetPassword;