"use client"

import React from "react"
import {
  Box,
  Card,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Button,
} from "@mui/material"
import {
  SearchOutlined as SearchOutlinedIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Print as PrintIcon,
  Email as EmailIcon,
  Add as AddIcon,
} from "@mui/icons-material"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import Sidebar from "../../components/sidebar"
import TabsComponent from "@/components/tabs"
import ExpenseChart from "../../components/grafico_despesas"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const data = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 200 },
  { name: "Category D", value: 100 },
]

export default function DashboardPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"))

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [search, setSearch] = React.useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", width: "100%", margin: 0, padding: 0, overflow: "hidden" }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          marginLeft: { xs: 0, sm: "290px" },
          width: "100%",
          height: "auto",
          paddingTop: "3rem",
          overflowX: "hidden",
          overflowY: "auto",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ position: "relative", marginTop: "10px", marginBottom: "30px" }}>
          <TabsComponent sx={{ backgroundColor: theme.palette.background.paper }} />
        </Box>

        <Fade in={true} timeout={1000}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px", padding: "0 20px" }}>
  <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: { xs: "100%", lg: "50%" } }}>
    <DashboardCard
      title="Quantidade de Despesas"
      value="470"
      backgroundColor="#D0E7FF" // Azul pastel claro
      titleColor="#2563EB" // Azul escuro
      valueColor="#1E40AF" // Azul intenso
      sx={{ 
        height: "110px", // Aumentei um pouco a altura para centralizar melhor
        borderRadius: "12px",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
        padding: "0 20px", // Adicionando padding para ajustar o layout
        textAlign: "center", // Centraliza todo o conteúdo do card
      }} 
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#2563EB" }}>
        Quantidade de Despesas
      </Typography>
      <Typography sx={{ fontSize: "32px", fontWeight: "bold", color: "#1E40AF" }}>
        470
      </Typography>
    </DashboardCard>

    <DashboardCard
      title="Valor Total de Despesas"
      value="27.500"
      backgroundColor="#FEF9C3" // Amarelo pastel suave
      titleColor="#CA8A04" // Amarelo escuro
      valueColor="#A16207" // Amarelo intenso
      sx={{ 
        height: "120px", // Aumentei um pouco a altura para centralizar melhor
        borderRadius: "12px",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
        padding: "0 20px", // Adicionando padding para ajustar o layout
        textAlign: "center", // Centraliza todo o conteúdo do card
      }} 
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#CA8A04" }}>
        Valor Total de Despesas
      </Typography>
      <Typography sx={{ fontSize: "32px", fontWeight: "bold", color: "#A16207" }}>
        27.500
      </Typography>
    </DashboardCard>
  </Box>


            <Box sx={{ width: { xs: "100%", lg: "50%" }, height: { xs: "300px", md: "400px" } }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={isMobile ? 80 : isTablet ? 100 : 120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout={isMobile ? "horizontal" : "vertical"}
                    align={isMobile ? "center" : "right"}
                    verticalAlign={isMobile ? "bottom" : "middle"}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Fade>

        <Grow in={true} timeout={1500}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px", padding: "20px" }}>
            <UnpaidExpensesCard />
            <ExpenseCategoriesCard />
          </Box>
        </Grow>

        <Fade in={true} timeout={2000}>
          <Box>
            <ExpenseControlCard
              search={search}
              setSearch={setSearch}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Box>
        </Fade>

        <Fade in={true} timeout={2500}>
          <Card
            sx={{
              padding: "20px",
              bgcolor: theme.palette.background.paper,
              boxShadow: theme.shadows[3],
              borderRadius: "30px",
              border: `2px solid ${theme.palette.divider}`,
              marginTop: "50px",
              height: "auto",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginTop: "20px",
                marginBottom: "40px",
                fontWeight: "bold",
                fontSize: "38px",
                color: theme.palette.text.secondary,
              }}
            >
              Gráfico de Despesas
            </Typography>
            <Box sx={{ height: { xs: "400px", md: "600px" } }}>
              <ExpenseChart />
            </Box>
          </Card>
        </Fade>

        <Fade in={true} timeout={3000}>
          <Card
            sx={{
              padding: "20px",
              bgcolor: theme.palette.background.paper,
              boxShadow: theme.shadows[3],
              borderRadius: "30px",
              border: `2px solid ${theme.palette.divider}`,
              marginTop: "50px",
              height: "auto",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginTop: "20px",
                marginBottom: "40px",
                fontWeight: "bold",
                fontSize: "38px",
                color: theme.palette.text.secondary,
              }}
            >
              Armazenamento  de Extratos
            </Typography>
            <StatementIssuanceTable />
          </Card>
        </Fade>
      </Box>
    </Box>
  )
}

// ... (previous component definitions remain unchanged)

function ExpenseControlCard({ search, setSearch, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) {
  const theme = useTheme()

  const expenses = [
    { id: 1, description: "Aluguel", category: "Moradia", date: "2023-05-01", value: 1200 },
    { id: 2, description: "Supermercado", category: "Alimentação", date: "2023-05-02", value: 300 },
    { id: 3, description: "Conta de Luz", category: "Moradia", date: "2023-05-03", value: 150 },
    { id: 4, description: "Internet", category: "Serviços", date: "2023-05-04", value: 100 },
    { id: 5, description: "Transporte", category: "Mobilidade", date: "2023-05-05", value: 200 },
    { id: 6, description: "Lazer", category: "Lazer", date: "2023-05-06", value: 250 },
  ]

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Card
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: "16px",
        boxShadow: theme.shadows[3],
        height: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
        Controle de Despesas
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <TextField
          label="Pesquisar Despesa"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "60%" }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Adicionar Despesa
        </Button>
      </Box>
      <TableContainer sx={{ maxHeight: "calc(100vh - 350px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Descrição</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Categoria</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Data</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Valor</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredExpenses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.date}</TableCell>
                <TableCell>R$ {expense.value.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton sx={{ color: theme.palette.info.main }}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton sx={{ color: theme.palette.warning.main }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton sx={{ color: theme.palette.error.main }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredExpenses.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  )
}

function StatementIssuanceTable() {
  const theme = useTheme()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  const statements = [
    { id: 1, client: "Cliente A", date: "2023-05-01", type: "Mensal" },
    { id: 2, client: "Cliente B", date: "2023-05-02", type: "Anual" },
    { id: 3, client: "Cliente C", date: "2023-05-03", type: "Trimestral" },
    { id: 4, client: "Cliente D", date: "2023-05-04", type: "Mensal" },
    { id: 5, client: "Cliente E", date: "2023-05-05", type: "Semestral" },
    { id: 6, client: "Cliente F", date: "2023-05-06", type: "Anual" },
  ]

  return (
    <Box>
      <TableContainer sx={{ maxHeight: "calc(100vh - 250px)", width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Cliente</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Data</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Tipo</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statements.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((statement) => (
              <TableRow key={statement.id}>
                <TableCell>{statement.client}</TableCell>
                <TableCell>{statement.date}</TableCell>
                <TableCell>{statement.type}</TableCell>
                <TableCell>
                  <IconButton sx={{ color: theme.palette.info.main }}>
                    <PrintIcon />
                  </IconButton>
                  <IconButton sx={{ color: theme.palette.success.main }}>
                    <EmailIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={statements.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  )
}

function DashboardCard({ title, value, backgroundColor, titleColor, valueColor }) {
  const theme = useTheme()

  return (
    <Card
    sx={{
      p: 3,
      bgcolor: backgroundColor,
      borderRadius: "16px",
      boxShadow: theme.shadows[2],
      height: "150px", // Aumentei um pouco a altura para dar mais espaço
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Centraliza verticalmente
      alignItems: "center", // Centraliza horizontalmente
      textAlign: "center", // Garante que o texto esteja centralizado
    }}
  >
    <Typography 
      variant="subtitle2" 
      sx={{
        color: titleColor, 
        fontWeight: "bold", 
        fontSize: "22px", // Aumentei o tamanho da fonte do título
        marginBottom: "8px" // Espaço entre o título e o valor
      }}
    >
      {title}
    </Typography>
    <Typography 
      variant="h5" 
      sx={{
        color: valueColor, 
        fontWeight: "bold", 
        fontSize: "40px", // Aumentei o tamanho da fonte do valor
      }}
    >
      {value}
    </Typography>
  </Card>
)
}

function UnpaidExpensesCard() {
  const theme = useTheme()

  return (
    <Card
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: "16px",
        boxShadow: theme.shadows[3],
        width: { xs: "100%", lg: "50%" },
        height: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
        Despesas Não Pagas
      </Typography>
      <Box sx={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
          Nenhuma despesa não paga pendente.
        </Typography>
      </Box>
    </Card>
  )
}

function ExpenseCategoriesCard() {
  const theme = useTheme()

  return (
    <Card
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: "16px",
        boxShadow: theme.shadows[3],
        width: { xs: "100%", lg: "50%" },
        height: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
        Despesas pagas
      </Typography>
      <Box sx={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
          Nenhuma categoria de despesa disponível.
        </Typography>
      </Box>
    </Card>
  )
}

