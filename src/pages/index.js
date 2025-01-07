import Sidebar from '../components/sidebar';   
import TabsComponent from '../components/tabs'; 
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function SidebarTestPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

 
  const despesas = [
    { nome: 'Aluguel', valor: 'R$ 1.200', data: '01/01/2023' },
    { nome: 'Energia', valor: 'R$ 150', data: '05/01/2023' },
    { nome: 'Internet', valor: 'R$ 100', data: '10/01/2023' },
    { nome: 'Água', valor: 'R$ 80', data: '12/01/2023' },
    { nome: 'Telefone', valor: 'R$ 50', data: '15/01/2023' },
    { nome: 'Gás', valor: 'R$ 200', data: '20/01/2023' },
    { nome: 'Comida', valor: 'R$ 400', data: '22/01/2023' },
  ];

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = despesas.slice(indexOfFirstItem, indexOfLastItem);

 
  const nextPage = () => {
    if (currentPage < Math.ceil(despesas.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#000', 
        height: '100vh', 
        color: '#fff', 
        display: 'flex', 
        flexDirection: 'row', 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden', 
        width: '100vw', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1, 
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#000', 
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          margin: 0, 
          paddingLeft: '20px', 
          width: 'calc(100vw - 260px)', 
          height: '100vh',
          overflow: 'hidden', 
        }}
      >
        <TabsComponent /> 

      
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '100px',
            width: '100%', 
            marginLeft: '300px', 
          }}
        >
          <input
            type="text"
            placeholder="Pesquisar Despesa ..."
            style={{
              border: '2px solid transparent', 
              borderRadius: '25px',
              padding: '10px 15px', 
              fontSize: '16px', 
              width: '400px', 
              backgroundColor: '#333', 
              color: '#fff',
              outline: 'none',
            }}
          />
          
       
          <button
            style={{
              backgroundColor: '#333', 
              color: '#fff',
              border: '2px solid #fff', 
              borderRadius: '25px', 
              padding: '10px 20px', 
              marginLeft: '200px', 
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Adicionar Despesa
          </button>
        </div>

      
        <div
          style={{
            marginTop: '40px', 
            width: 'calc(90% - 500px)', 
            marginLeft: '300px', 
            borderRadius: '10px',
            border: '1px solid transparent', 
            overflow: 'hidden',
            backgroundColor: '#333', 
          }}
        >
          <h3 style={{ marginLeft: '20px', marginBottom: '30px' }}>Minhas Despesas</h3>
          <table
            style={{
              width: '100%', 
              borderCollapse: 'collapse',
              color: '#fff',
              fontSize: '16px',
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Despesa</th>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Valor</th>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Data</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((despesa, index) => (
                <tr key={index}>
                  <td style={{ padding: '7px', borderBottom: '1px solid transparent' }}>{despesa.nome}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid transparent' }}>{despesa.valor}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid transparent' }}>{despesa.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
          

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <button
              onClick={prevPage}
              style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '10px 15px',
                marginRight: '10px',
                cursor: 'pointer',
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextPage}
              style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
