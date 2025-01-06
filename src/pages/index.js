import Sidebar from '../components/sidebar';
import TabsComponent from '../components/tabs'; 

export default function SidebarTestPage() {
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
      </main>
    </div>
  );
}
