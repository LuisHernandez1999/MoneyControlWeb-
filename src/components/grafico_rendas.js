import React, { useState, useEffect } from "react";
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import { Box, FormControl, Select, MenuItem, Button } from "@mui/material";

const EarningsChart = () => {
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

  // Dados de categorias de ganhos
  const data = [
    { name: "Salário", value: 7000 },
    { name: "Freelance", value: 3500 },
    { name: "Renda Extra", value: 1500 },
    { name: "Investimentos", value: 2000 },
  ];

  // Cores associadas a cada categoria de ganho
  const categoryColors = {
    Salário: "#0088FE",  // Azul
    Freelance: "#FF0000", // Vermelho
    "Renda Extra": "#00C49F",  // Verde
    Investimentos: "#FF8042",  // Laranja
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        marginTop: "50px",
        
      }}
    >

      {/* Filtros para categoria, data e valor */}
      <Box
        sx={{
          boxShadow: 3,
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <FormControl sx={{ width: "22%", height: "38px",boxShadow: 3 }}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            sx={{ height: "35px" }}
          >
            <MenuItem value="">Categoria</MenuItem>
            <MenuItem value="Salário">Salário</MenuItem>
            <MenuItem value="Freelance">Freelance</MenuItem>
            <MenuItem value="Renda Extra">Renda Extra</MenuItem>
            <MenuItem value="Investimentos">Investimentos</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "22%", height: "38px" ,boxShadow: 3}}>
          <Select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            displayEmpty
            sx={{ height: "35px" }}
          >
            <MenuItem value="">Data</MenuItem>
            <MenuItem value="Este mês">Este mês</MenuItem>
            <MenuItem value="Últimos 3 meses">Últimos 3 meses</MenuItem>
            <MenuItem value="Este ano">Este ano</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "22%", height: "38px",boxShadow: 3 }}>
          <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            displayEmpty
            sx={{ height: "35px" }}
          >
            <MenuItem value="">Valores</MenuItem>
            <MenuItem value="Menor que R$1000">Menor que R$1000</MenuItem>
            <MenuItem value="Entre R$1000 e R$5000">Entre R$1000 e R$5000</MenuItem>
            <MenuItem value="Maior que R$5000">Maior que R$5000</MenuItem>
          </Select>
        </FormControl>

        {/* Botão aplicar - estilo mais fino para o texto */}
        <Button
          sx={{
            height: "36px",  // Altura fina
            width: "120px",  // Largura ajustada
            borderRadius: "30px",  // Bordas arredondadas
            backgroundColor: "black",
            border: '2px solid #333',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            fontWeight: 'normal',
            fontSize: '15px',  // Fundo preto
            color: "white",
            boxShadow: 3,
          // Fonte mais fina
            letterSpacing: "1px",  // Espaçamento entre letras
            border: "1px solid #333",  // Borda sutil
            "&:hover": {
              backgroundColor: "#333",  // Escurece ao passar o mouse
              borderColor: "#222",  // Altera a borda ao passar o mouse
            },
          }}
        >
          Aplicar
        </Button>
      </Box>

      {/* Gráfico de barras */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <BarChart
          width={1100}
          height={600}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" />

          <Bar dataKey="value" barSize={40}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={categoryColors[entry.name]} />
            ))}
          </Bar>
        </BarChart>
      </Box>
    </Box>
  );
};

export default EarningsChart;
