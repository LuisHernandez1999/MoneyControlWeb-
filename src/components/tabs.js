import { useState } from 'react'; 

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('gastos');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '50px', 
        gap: '90px', 
      }}
    >
      <div
        onClick={() => handleTabClick('gastos')}
        style={{
          cursor: 'pointer',
          color: selectedTab === 'gastos' ? '#1DB954' : '#fff', 
          borderBottom: selectedTab === 'gastos' ? '2px solid #1DB954' : 'none',
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
          borderBottom: selectedTab === 'ganhos' ? '2px solid #1DB954' : 'none',
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
          borderBottom: selectedTab === 'geral' ? '2px solid #1DB954' : 'none',
          paddingBottom: '5px',
          fontSize: '25px', 
          fontWeight: 'bold', 
        }}
      >
        Geral
      </div>
    </div>
  );
};

export default TabsComponent;
