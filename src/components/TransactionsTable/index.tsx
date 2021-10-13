import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teste 1</td>
            <td className="withdraw">R$ 1000,00</td>
            <td>Dev</td>
            <td>20/04/2021</td>
          </tr>
          <tr>
            <td>Teste 1</td>
            <td className="withdraw">R$ 1000,00</td>
            <td>Dev</td>
            <td>20/04/2021</td>
          </tr>
          <tr>
            <td>Teste 1</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Dev</td>
            <td>20/04/2021</td>
          </tr>
          <tr>
            <td>Teste 1</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Dev</td>
            <td>20/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
