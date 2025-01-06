import React, { useState } from "react"; 
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import DashboardIcon from "@mui/icons-material/Dashboard"; 
import PersonIcon from "@mui/icons-material/Person"; 
import AssignmentIcon from "@mui/icons-material/Assignment";

const Sidebar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Resumo Financeiro", icon: <DashboardIcon /> }, 
    { text: "Perfil", icon: <PersonIcon /> },
    { text: "Plano", icon: <AssignmentIcon /> },
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
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        
          <Box sx={{ flex: "0 0 auto", height: 250 }} />

         
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    justifyContent: isOpen ? "flex-start" : "center",
                    px: 2,
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
