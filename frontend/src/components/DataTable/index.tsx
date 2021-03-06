import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/formart";
import { BASE_URL } from "utils/requests";

function DataTable() {

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
      .then(result => {
        setPage(result.data);
      })
  }, [])

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            page.content
              ?
              page.content.map((obj) => {
                return (
                  <tr>
                    <td>{formatLocalDate(obj.date, 'dd/MM/yyyy')}</td>
                    <td>{obj.seller.name}</td>
                    <td>{obj.visited}</td>
                    <td>{obj.deals}</td>
                    <td>{obj.amount}</td>
                  </tr>
                )
              })
              :
              <tr>
              </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
