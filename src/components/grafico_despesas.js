import React, { useState, useEffect } from "react";
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import { Box, FormControl, Select, MenuItem } from "@mui/material";

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
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <FormControl sx={{ width: "30%", height: "38px", }}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            sx={{ height: "35px" }} 
          >
            <MenuItem value="">Categoria</MenuItem>
            <MenuItem value="Alimentação">Alimentação</MenuItem>
            <MenuItem value="Transporte">Transporte</MenuItem>
            <MenuItem value="Lazer">Lazer</MenuItem>
            <MenuItem value="Saúde">Saúde</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "30%", height: "38px" }}>
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

        <FormControl sx={{ width: "30%", height: "38px" }}>
          <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            displayEmpty
            sx={{ height: "35px" }} 
          >
            <MenuItem value="">Valores</MenuItem>
            <MenuItem value="Menor que R$500">Menor que R$500</MenuItem>
            <MenuItem value="Entre R$500 e R$1000">Entre R$500 e R$1000</MenuItem>
            <MenuItem value="Maior que R$1000">Maior que R$1000</MenuItem>
          </Select>
        </FormControl>
      </Box>

     
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
