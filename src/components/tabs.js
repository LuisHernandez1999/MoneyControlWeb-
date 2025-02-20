import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Importando useRouter do Next.js

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('gastos');
  const router = useRouter(); 

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    router.push(`/${tab}`); 
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '80px',
          gap: '280px',
        
          
        }}
      >
        <div
          onClick={() => handleTabClick('gastos')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'gastos' ? '#333' : 'grey',
            fontSize: '50px',
            fontWeight: 'bold',
          }}
        >
          Gastos
        </div>

        <div
          onClick={() => handleTabClick('ganhos')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'ganhos' ? '#333' : 'grey',
            fontSize: '50px',
            fontWeight: 'bold',
          }}
        >
          Ganhos
        </div>

        <div
          onClick={() => handleTabClick('geral')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'geral' ? '#333' : 'grey',
            fontSize: '50px',
            fontWeight: 'bold',
          }}
        >
          Geral
        </div>
      </div>

      <div
        style={{
          marginTop: '2px',
    width: '100%', 
    overflow: 'hidden',
    height: '1px',
    backgroundColor: 'grey',
    opacity: 0.5,

    marginTop: '3rem',
        }}
      />
    </div>
  );
};

export default TabsComponent;
