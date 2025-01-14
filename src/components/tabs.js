import { useState } from 'react';

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('gastos');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
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
            color: selectedTab === 'gastos' ? '#1DB954' : 'grey',
            paddingBottom: '5px',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Gastos
        </div>
        <div
          onClick={() => handleTabClick('ganhos')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'ganhos' ? '#1DB954' : 'grey',
            paddingBottom: '5px',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Ganhos
        </div>
        <div
          onClick={() => handleTabClick('geral')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'geral' ? '#1DB954' : 'grey',
            paddingBottom: '5px',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Geral
        </div>
      </div>

      <div
        style={{
          marginTop: '2px',
          width: '100%', // Aumenta o comprimento da linha
          height: '1px',
          backgroundColor: 'grey',
          opacity: 0.5,
          margin: '0 auto',
          marginTop: '1rem' 
        }}
      />
    </div>
  );
};

export default TabsComponent;
