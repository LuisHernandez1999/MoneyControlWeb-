import { useState } from 'react'; 

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('gastos');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '100px', 
          gap: '250px', 
        }}
      >
        <div
          onClick={() => handleTabClick('gastos')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'gastos' ? '#1DB954' : '#fff', 
            paddingBottom: '5px', 
            fontSize: '25px', 
            fontWeight: 'bold', 
          }}
        >
          Gastos
        </div>
        <div
          onClick={() => handleTabClick('ganhos')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'ganhos' ? '#1DB954' : '#fff', 
            paddingBottom: '5px',
            fontSize: '25px', 
            fontWeight: 'bold', 
          }}
        >
          Ganhos
        </div>
        <div
          onClick={() => handleTabClick('geral')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'geral' ? '#1DB954' : '#fff', 
            paddingBottom: '5px',
            fontSize: '25px', 
            fontWeight: 'bold', 
          }}
        >
          Geral
        </div>
      </div>

      {/* Linha divisória */}
      <div
        style={{
          marginTop: '2px', // Espaçamento entre as tabs e a linha
          width: '70%', // Reduzindo o comprimento da linha
          height: '1px', 
          backgroundColor: '#fff', // Cor da linha
          opacity: 0.5, // Transparência opcional para um efeito mais suave
          margin: '0 auto', // Centralizando a linha
        }}
      />
    </div>
  );
};

export default TabsComponent;
