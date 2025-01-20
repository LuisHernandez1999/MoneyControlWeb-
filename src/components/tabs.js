import React, { useState } from 'react'; 
import Link from 'next/link'; // Importando Link do Next.js

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('gastos','ganhos');

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
        <Link href="/gastos" >
          <div
            onClick={() => handleTabClick('gastos')}
            style={{
              cursor: 'pointer',
              color: selectedTab === 'gastos' ? '#1DB954' : 'grey',
              fontSize: '30px',
              fontWeight: 'bold',
            
            }}
          >
            Gastos
          </div>
        </Link>

        <Link href="/ganhos" >
          <div
            onClick={() => handleTabClick('ganhos')}
            style={{
              cursor: 'pointer',
              color: selectedTab === 'ganhos' ? '#1DB954' : 'grey',
              fontSize: '30px',
              fontWeight: 'bold',
            
            }}
          >
            Ganhos
          </div>
        </Link>

        <Link href="/geral" >
          <div
            onClick={() => handleTabClick('geral')}
            style={{
              cursor: 'pointer',
              color: selectedTab === 'geral' ? '#1DB954' : 'grey',
              fontSize: '30px',
              fontWeight: 'bold',
           
            }}
          >
            Geral
          </div>
        </Link>
      </div>

      <div
        style={{
          marginTop: '2px',
          width: '100%',
          height: '1px',
          backgroundColor: 'grey',
          opacity: 0.5,
          margin: '0 auto',
          marginTop: '1rem',
        }}
      />
    </div>
  );
};

export default TabsComponent;
