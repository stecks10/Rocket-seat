import { Summary } from '../Summary';
import { TransActionsTable } from '../TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransActionsTable />
    </Container>
  );
}
