import React from 'react';

const Table = ({ netIncomes }) => {
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;