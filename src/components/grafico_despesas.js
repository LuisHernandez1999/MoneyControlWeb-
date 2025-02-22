import { useState, useEffect } from "react"
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer } from "recharts"
import { Box, FormControl, Select, MenuItem, Button, Typography, useMediaQuery, useTheme } from "@mui/material"

const ExpenseChart = () => {
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [value, setValue] = useState("")
  const [isClient, setIsClient] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const data = [
    { name: "Alimentação", value: 400 },
    { name: "Transporte", value: 300 },
    { name: "Lazer", value: 200 },
    { name: "Saúde", value: 100 },
    { name: "Educação", value: 250 },
    { name: "Moradia", value: 500 },
  ]

  const categoryColors = {
    Alimentação: "#FF6B6B",
    Transporte: "#4ECDC4",
    Lazer: "#45B7D1",
    Saúde: "#F7B731",
    Educação: "#A55EEA",
    Moradia: "#5D9CEC",
  }

  const selectSx = {
    height: "50px",
    borderRadius: "14px",
    border: "2px solid #E0E0E0",
    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    "&:hover": { border: "2px solid #BDBDBD" },
    "&.Mui-focused": { border: "2px solid #2196F3" },
    transition: "all 0.3s ease",
    fontSize: "14px",
    fontWeight: 500,
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "10px" : "20px",
        marginTop: "30px",
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <FormControl sx={{ flex: 1, minWidth: isMobile ? "100%" : "200px" }}>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} displayEmpty sx={selectSx}>
            <MenuItem value="">Categoria</MenuItem>
            {Object.keys(categoryColors).map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ flex: 1, minWidth: isMobile ? "100%" : "200px" }}>
          <Select value={date} onChange={(e) => setDate(e.target.value)} displayEmpty sx={selectSx}>
            <MenuItem value="">Data</MenuItem>
            <MenuItem value="Este mês">Este mês</MenuItem>
            <MenuItem value="Últimos 3 meses">Últimos 3 meses</MenuItem>
            <MenuItem value="Este ano">Este ano</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ flex: 1, minWidth: isMobile ? "100%" : "200px" }}>
          <Select value={value} onChange={(e) => setValue(e.target.value)} displayEmpty sx={selectSx}>
            <MenuItem value="">Valores</MenuItem>
            <MenuItem value="Menor que R$500">Menor que R$500</MenuItem>
            <MenuItem value="Entre R$500 e R$1000">Entre R$500 e R$1000</MenuItem>
            <MenuItem value="Maior que R$1000">Maior que R$1000</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            flex: isMobile ? 1 : "none",
            minWidth: isMobile ? "100%" : "150px",
            backgroundColor: "#2196F3",
            color: "white",
            fontWeight: 600,
            fontSize: "14px",
            borderRadius: "14px",
            padding: "10px 20px",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#1976D2",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 8px rgba(33, 150, 243, 0.3)",
            },
          }}
        >
          Aplicar Filtros
        </Button>
      </Box>

      <Box sx={{ width: "100%", height: isMobile ? "300px" : isTablet ? "400px" : "500px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#333", fontSize: isMobile ? 10 : 12 }}
              angle={isMobile ? -45 : 0}
              textAnchor={isMobile ? "end" : "middle"}
              height={isMobile ? 80 : 60}
            />
            <YAxis tick={{ fill: "#333", fontSize: isMobile ? 10 : 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              labelStyle={{ fontWeight: 600, marginBottom: "5px" }}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Bar dataKey="value" barSize={isMobile ? 20 : isTablet ? 30 : 40}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={categoryColors[entry.name]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default ExpenseChart


