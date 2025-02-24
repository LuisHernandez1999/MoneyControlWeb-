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
  Add as AddIcon,
} from "@mui/icons-material"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import Sidebar from "../../components/sidebar"
import TabsComponent from "@/components/tabs"

const COLORS = ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B"]

const earningsData = [
  { name: "Salário", value: 5000 },
  { name: "Freelance", value: 1500 },
  { name: "Investimentos", value: 800 },
  { name: "Outros", value: 300 },
]

const monthlyEarnings = [
  { month: "Jan", value: 6000 },
  { month: "Fev", value: 5800 },
  { month: "Mar", value: 7200 },
  { month: "Abr", value: 6500 },
  { month: "Mai", value: 7600 },
  { month: "Jun", value: 7000 },
]

export default function EarningsDashboardPage() {
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
                title="Quantidade de Ganhos"
                value="320"
                backgroundColor="#E8F5E9"
                titleColor="#2E7D32"
                valueColor="#1B5E20"
              />
              <DashboardCard
                title="Valor Total de Ganhos"
                value="42.800"
                backgroundColor="#F1F8E9"
                titleColor="#558B2F"
                valueColor="#33691E"
              />
            </Box>
            <Box sx={{ width: { xs: "100%", lg: "50%" }, height: { xs: "300px", md: "400px" } }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={earningsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={isMobile ? 80 : isTablet ? 100 : 120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {earningsData.map((entry, index) => (
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
            <MonthlyEarningsCard />
            <EarningsCategoriesCard />
          </Box>
        </Grow>

        <Fade in={true} timeout={2000}>
          <Box>
            <EarningsControlCard
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
              Gráfico de Ganhos
            </Typography>
            <Box sx={{ height: { xs: "400px", md: "600px" } }}>
              <EarningsChart />
            </Box>
          </Card>
        </Fade>
      </Box>
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
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: titleColor,
          fontWeight: "bold",
          fontSize: "22px",
          marginBottom: "8px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: valueColor,
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        {value}
      </Typography>
    </Card>
  )
}

function MonthlyEarningsCard() {
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
        Ganhos Mensais
      </Typography>
      <Box sx={{ height: "200px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyEarnings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  )
}

function EarningsCategoriesCard() {
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
        Categorias de Ganhos
      </Typography>
      <Box sx={{ height: "200px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={earningsData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
              {earningsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  )
}

function EarningsControlCard({ search, setSearch, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) {
  const theme = useTheme()

  const earnings = [
    { id: 1, description: "Salário", category: "Fixo", date: "2023-05-01", value: 5000 },
    { id: 2, description: "Freelance Design", category: "Variável", date: "2023-05-10", value: 800 },
    { id: 3, description: "Dividendos", category: "Investimentos", date: "2023-05-15", value: 300 },
    { id: 4, description: "Venda de Produto", category: "Variável", date: "2023-05-20", value: 500 },
    { id: 5, description: "Aluguel", category: "Fixo", date: "2023-05-25", value: 1000 },
    { id: 6, description: "Consultoria", category: "Variável", date: "2023-05-28", value: 700 },
  ]

  const filteredEarnings = earnings.filter((earning) =>
    earning.description.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Card
      sx={{
        p: 3,
        bgcolor: theme.palette.background.paper,
        borderRadius: "16px",
        boxShadow: theme.shadows[3],
        height: "auto",
        width: "96%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
        Controle de Ganhos
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <TextField
          label="Pesquisar Ganho"
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
          Adicionar Ganho
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
            {filteredEarnings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((earning) => (
              <TableRow key={earning.id}>
                <TableCell>{earning.description}</TableCell>
                <TableCell>{earning.category}</TableCell>
                <TableCell>{earning.date}</TableCell>
                <TableCell>R$ {earning.value.toFixed(2)}</TableCell>
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
        count={filteredEarnings.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  )
}

function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={monthlyEarnings}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#4CAF50" />
      </BarChart>
    </ResponsiveContainer>
  )
}

