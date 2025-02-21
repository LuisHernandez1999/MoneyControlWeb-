import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Importando useRouter do Next.js

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('despesas');
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
          onClick={() => handleTabClick('Despesas')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'Despesas' ? '#333' : 'grey',
            fontSize: '50px',
            fontWeight: 'bold',
          }}
        >
          Despesas
        </div>

        <div
          onClick={() => handleTabClick('ganhos')}
          style={{
            cursor: 'pointer',
            color: selectedTab === 'Receitas' ? '#333' : 'grey',
            fontSize: '50px',
            fontWeight: 'bold',
          }}
        >
          Receitas
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
