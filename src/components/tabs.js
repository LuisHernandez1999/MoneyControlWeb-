"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("")
  const [windowWidth, setWindowWidth] = useState(0)
  const router = useRouter()

  // Atualiza a largura da janela
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Atualiza a aba selecionada com base na URL ao inicializar
  useEffect(() => {
    const path = router.asPath.split("/")[1] // Pega a primeira parte da URL
    if (path) {
      setSelectedTab(path) // Atualiza o estado com a aba da URL
    }
  }, [router.asPath]) // Sempre que a URL mudar, atualiza a aba selecionada

  const handleTabClick = (tab) => {
    const tabLowerCase = tab.toLowerCase()
    setSelectedTab(tabLowerCase) // Atualiza a aba selecionada
    // Atualiza a navegação para a página correta
    if (tab === "Receitas") {
      router.push("/ganhos/ganhos")
    } else if (tab === "Despesas") {
      router.push("/gastos/gastos") // Roteia para "Despesas" ou "Gastos"
    } else {
      router.push(`/${tabLowerCase}`)
    }
  }

  const tabs = ["Despesas", "Receitas", "Geral"]

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  }

  const tabsContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "80px",
    flexWrap: windowWidth < 768 ? "wrap" : "nowrap",
  }

  const tabStyle = (tab) => ({
    cursor: "pointer",
    color: selectedTab === tab.toLowerCase() ? "#0070f3" : "#666",
    fontSize: windowWidth < 480 ? "24px" : windowWidth < 768 ? "32px" : "40px",
    fontWeight: "bold",
    transition: "color 0.3s ease, transform 0.3s ease",
    margin: windowWidth < 768 ? "10px 0" : "0",
    textAlign: "center",
    flex: windowWidth < 768 ? "1 0 100%" : "1",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: selectedTab === tab.toLowerCase() ? "rgba(0, 112, 243, 0.1)" : "transparent",
    ":hover": {
      color: "#0070f3",
      transform: "scale(1.05)",
    },
  })

  const lineStyle = {
    width: "100%",
    height: "2px",
    backgroundColor: "#e0e0e0",
    marginTop: "20px",
  }

  return (
    <div style={containerStyle}>
      <div style={tabsContainerStyle}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            style={tabStyle(tab)} // Estilo atualizado com base na aba selecionada
          >
            {tab}
          </div>
        ))}
      </div>
      <div style={lineStyle} />
    </div>
  )
}

export default TabsComponent
