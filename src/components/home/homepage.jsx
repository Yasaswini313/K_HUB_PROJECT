import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const DataVisualization = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      

      <div>
   
        <div className='navbor'>
          <h1 style={{ textAlign: 'center' }}>Visualize your Data as</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '170px', marginRight: '170px', marginTop: '20px' }}>

            <div
              style={{
                backgroundColor: '#9DB2BF',
                flex: 1,
                width: '400px',
                height: '500px',
                margin: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '2px solid black',
                borderRadius: '15px'
              }}

              onClick={() => handleClick('Scatterplot')}
            >
              <span>Scatterplot</span>

            </div>
            <div
              style={{
                backgroundColor: '#9DB2BF',
                flex: 1,
                width: '400px',
                height: '500px',
                margin: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '2px solid black',
                borderRadius: '15px'

              }}
              onClick={() => handleClick('Areachart')}
            >
              <span>Area Chart</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default DataVisualization;

