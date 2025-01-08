import Sidebar from '../components/sidebar';
import TabsComponent from '../components/tabs';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaEdit, FaTrash } from 'react-icons/fa';
import TabelaComGrafico from '../components/grafico_despesas';

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

  const dataForChart = [
    { categoria: 'Aluguel', valor: 1200 },
    { categoria: 'Energia', valor: 150 },
    { categoria: 'Internet', valor: 100 },
    { categoria: 'Água', valor: 80 },
    { categoria: 'Telefone', valor: 50 },
    { categoria: 'Gás', valor: 200 },
    { categoria: 'Comida', valor: 400 },
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
        height: '240vh', 
        width: '100vw', 
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
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

        }}
      >
        <TabsComponent />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '300px',
            marginRight: '300px',
            marginTop: '50px',
          }}
        >
          <div
            style={{
              flex: 1,
              marginRight: '10px',
              backgroundColor: '#333',
              borderRadius: '15px',
              padding: '20px',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <h4 style={{ color: 'red' }}>Total de Despesas</h4>
            <p style={{ fontSize: '24px', margin: 0, color: 'red' }}>R$ 2.180</p>
          </div>
          <div
            style={{
              flex: 1,
              marginLeft: '10px',
              backgroundColor: '#333',
              borderRadius: '15px',
              padding: '20px',
              textAlign: 'center',
              color: '#fff',
              
            }}
          >
           <h4 style={{ color: '#32CD32' }}>Guardado</h4>   
           <p style={{ fontSize: '24px', margin: 0, color: '#32CD32' }}>R$ 16000.00</p> 
          </div>
        </div>


        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '50px',
            width: '100%',
            marginLeft: '300px',
          }}
        >
        <input
        type="text"
        placeholder="Pesquisar Despesa ..."
        style={{
        border: '2px solid green',
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
              marginLeft: '220px',
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
            width: 'calc(90% - 450px)',
            marginLeft: '300px',
            borderRadius: '10px',
            border: '1px solid transparent',
            overflow: 'visible', 
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
              textAlign: 'center',
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Categoria</th>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Valor</th>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Data</th>
                <th style={{ padding: '10px', borderBottom: '2px solid transparent' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((despesa, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', borderBottom: '1px solid transparent' }}>{despesa.nome}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid transparent' }}>{despesa.valor}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid transparent' }}>{despesa.data}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid transparent' }}>
                    <FaEdit style={{ color: 'green', marginRight: '10px', cursor: 'pointer' }} />
                    <FaTrash style={{ color: 'green', cursor: 'pointer' }} />
                  </td>
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
                color: 'green', 
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
                color: 'green', 
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div
          style={{
            marginTop: '40px',
            marginLeft: '300px', 
            width: 'calc(90% - 490px)', 
            backgroundColor: '#333',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>Gráfico de Despesas</h3>
          <TabelaComGrafico data={dataForChart} />
        </div>
      </main>
    </div>
  );
}
