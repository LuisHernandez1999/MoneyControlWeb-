import React, { useState, useEffect } from "react";
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import { Box, FormControl, Select, MenuItem, Button } from "@mui/material";

const ExpenseChart = () => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const data = [
    { name: "Alimentação", value: 400 },
    { name: "Transporte", value: 300 },
    { name: "Lazer", value: 200 },
    { name: "Saúde", value: 100 },
  ];

  const categoryColors = {
    Alimentação: "#0088FE",
    Transporte: "#FF0000",
    Lazer: "#00C49F",
    Saúde: "#FF8042",
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",  // Alinha os filtros à esquerda
          marginBottom: "20px",
          gap: "40px", // Ajuste do espaçamento entre os filtros e o botão
        }}
      >
        <FormControl sx={{ width: "50%", height: "70px" }}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            sx={{
              height: "50px",
              borderRadius: '14px',
              border: '2px solid black',  // Aplica a borda preta
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove o campo de borda adicional
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove a borda ao passar o mouse
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove a borda no foco
              },
            }}
          >
            <MenuItem value="">Categoria</MenuItem>
            <MenuItem value="Alimentação">Alimentação</MenuItem>
            <MenuItem value="Transporte">Transporte</MenuItem>
            <MenuItem value="Lazer">Lazer</MenuItem>
            <MenuItem value="Saúde">Saúde</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "50%", height: "70px" }}>
          <Select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            displayEmpty
            sx={{
              height: "50px",
              borderRadius: '14px',
              border: '2px solid black',  // Aplica a borda preta
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove o campo de borda adicional
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove a borda ao passar o mouse
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove a borda no foco
              },
            }}
          >
            <MenuItem value="">Data</MenuItem>
            <MenuItem value="Este mês">Este mês</MenuItem>
            <MenuItem value="Últimos 3 meses">Últimos 3 meses</MenuItem>
            <MenuItem value="Este ano">Este ano</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "50%", height: "70px" }}>
          <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            displayEmpty
            sx={{
              height: "50px",
              borderRadius: '14px',
              border: '2px solid black',  // Aplica a borda preta
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove o campo de borda adicional
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove a borda ao passar o mouse
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove a borda no foco
              },
            }}
          >
            <MenuItem value="">Valores</MenuItem>
            <MenuItem value="Menor que R$500">Menor que R$500</MenuItem>
            <MenuItem value="Entre R$500 e R$1000">Entre R$500 e R$1000</MenuItem>
            <MenuItem value="Maior que R$1000">Maior que R$1000</MenuItem>
          </Select>
        </FormControl>

        <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid #333',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
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
            marginLeft: '50px',
          }}
        >
          Aplicar
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", 
        }}
      >
        <BarChart
          width={1100}
          height={650} // Ajustado para aumentar o tamanho do gráfico
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" />

          <Bar dataKey="value" barSize={50}> {/* Aumentando o tamanho da barra */}
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={categoryColors[entry.name]}
              />
            ))}
          </Bar>
        </BarChart>
      </Box>
    </Box>
  );
};

export default ExpenseChart;
