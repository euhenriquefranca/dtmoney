import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransacionsTable } from "../TransactionsTable";

export function Dashboard() {
    return (
        <Container>
           <Summary /> 
           <TransacionsTable />
        </Container>
    );
}