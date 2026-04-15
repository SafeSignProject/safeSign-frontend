import { useParams } from 'react-router-dom';

const ContractsDetailPage = () => {
  const { id } = useParams();

  return <div className='mt-52'>contract id: {id}</div>;
};
export default ContractsDetailPage;
