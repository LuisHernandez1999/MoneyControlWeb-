import Head from 'next/head';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const ResetPassword = () => {
    const [invalidEmail, setInvalidEmail] = useState('');
    const router = useRouter();

    const buildResetPasswordConfirmUrl = (email) => {
        return `/${CONST_NAME_PAGE.AUTH}/${CONST_NAME_PAGE.RESET_PASSWORD}/${encodeURIComponent(email)}`;
    };

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
                        backgroundImage: 'url(/imagens/BACKMONEY.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        filter: 'blur(8px)',
                        zIndex: 0,
                    }}
                />

                <Box 
                    sx={{
                        backgroundColor: '#333', 
                        padding: '2rem', 
                        borderRadius: '16px',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        boxShadow: '0 4px 6px rgba(0, 158, 13, 0.8)',
                        maxWidth: '400px', 
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 1,
                        backdropFilter: 'blur(10px)', 
                    }}
                >
                    <Box sx={{ marginBottom: '1rem' }}>
                        <img src="/imagens/bbdefin.png" alt="Logo" style={{ width: '200px' }} />
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{
                            marginBottom: '1rem', 
                            color: '#333',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 'bold',
                        }}
                    >
                        Brechó da Jujuba
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
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '25px',
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
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '25px',
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'transparent', 
                                        },
                                    },
                                }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="password"
                            />

                            <Button
                                type="submit"
                                sx={{
                                    width: '100%',
                                    padding: '0.5rem 1rem',
                                    color: 'WHITE',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    },
                                }}
                            >
                                Entrar
                            </Button>
                        </Box>
                    </form>

                    <Box
                        sx={{
                            marginTop: '0.1rem',
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '0.875rem',
                                color: 'green',
                                textDecoration: 'underline',
                            }}
                        >
                            Esqueceu a senha?
                        </Typography>
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
