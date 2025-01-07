import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TabelaComGrafico = ({ data }) => {
  const dataForChart = [
    { categoria: 'Aluguel', valor: 1200 },
    { categoria: 'Energia', valor: 150 },
    { categoria: 'Internet', valor: 100 },
    { categoria: 'Água', valor: 80 },
    { categoria: 'Telefone', valor: 50 },
    { categoria: 'Gás', valor: 200 },
    { categoria: 'Comida', valor: 400 },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <table
        style={{
          width: '80%',
          borderCollapse: 'collapse',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <tbody>
          <tr>
            <td colSpan="3" style={{ padding: '20px' }}>
              <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer>
                  <BarChart data={dataForChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="categoria" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TabelaComGrafico;