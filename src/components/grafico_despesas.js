import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const TabelaComGrafico = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garante que o código só será executado no cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Impede a renderização do componente no lado do servidor
  }
  return (
    <div style={{ backgroundColor: '#333', borderRadius: '10px', padding: '20px' }}>
      <h3 style={{ color: '#fff', marginBottom: '20px' }}>Despesas por Categoria</h3>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip contentStyle={{ backgroundColor: '#555', borderRadius: '10px', color: '#fff' }} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Bar dataKey="valor" fill="#ff0000" /> 
      </BarChart>
    </div>
  );
};

export default TabelaComGrafico;
