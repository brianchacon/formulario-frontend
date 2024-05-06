import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../../css/dashboard.css';

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, 
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div className="header">
        <div>
          <h2>Cursos / Capacitaciones</h2>
        </div>
        <br/>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-success" type="button">Crear nuevo</button>
        </div>
        <br/>
        <div className="search">
          <input
            type="text"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Buscar..."
          />
        </div>
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'desc'
                        : 'asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                </th>
              ))}
              <th>Acciones</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
                <td>
                  <button onClick={() => console.log('Ver')}><FontAwesomeIcon icon={faEye} /></button>
                  <button onClick={() => console.log('Editar')}><FontAwesomeIcon icon={faEdit} /></button>
                  <button onClick={() => console.log('Eliminar')}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </td> 
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </button>{' '}
        <span>
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
    </>
  );
};

export default DataTable;
