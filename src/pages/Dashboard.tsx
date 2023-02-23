import { Card, CardHeader } from '@mui/material';
import OrderChart from '../components/OrderChart';

export const Dashboard = () => (
  <Card>
    <CardHeader title="Dashboard" />
    <OrderChart />
  </Card>
);
