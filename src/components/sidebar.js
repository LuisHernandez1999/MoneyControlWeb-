import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"; // Ícone moderno de gráficos

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Início", icon: <HomeOutlinedIcon sx={{ fontSize: "2rem" }} /> },
    { text: "Configurações", icon: <SettingsOutlinedIcon sx={{ fontSize: "2rem" }} /> },
    { text: "Análises", icon: <BarChartOutlinedIcon sx={{ fontSize: "2rem" }} /> }, // Substituindo o Analytics
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1201,
          color: isOpen ? "#fff" : "#1DB954",
          fontSize: "2rem",
        }}
      >
        <MenuIcon sx={{ fontSize: "inherit" }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: isOpen ? 240 : 60,
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
            backgroundColor: "#2c2c2c",
            color: "#fff",
            height: "100vh",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: 10, // Jogando tudo mais para baixo
          }}
        >
          {/* Barra de Pesquisa */}
          <Box
            sx={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0.5,
              marginTop: 6, // Jogando a barra de pesquisa ainda mais para baixo
              backgroundColor: "#2c2c2c",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Buscar..."
              sx={{
                width: isOpen ? "80%" : 0,
                transition: "width 0.3s ease-in-out",
                visibility: isOpen ? "visible" : "hidden",
                color: "#fff",
                backgroundColor: "#3a3a3a",
                borderRadius: 2,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" },
              }}
            />
          </Box>

          {/* Lista de Ícones e Textos */}
          <List sx={{ marginTop: 8 }}> {/* Jogando os ícones ainda mais para baixo */}
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    justifyContent: isOpen ? "flex-start" : "center",
                    px: 2,
                    mb: 3, // Espaçamento maior entre os ícones
                    "&:hover": {
                      backgroundColor: "#1DB954",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1DB954",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isOpen ? 2 : "auto",
                      justifyContent: "center",
                      color: "#fff",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {isOpen && <ListItemText primary={item.text} />}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
