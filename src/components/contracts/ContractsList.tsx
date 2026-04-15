import { CONTRACTS_ITEM } from '@/mocks/data';
import ContractsItem from '@/components/contracts/ContractsItem';

const ContractsList = () => {
  return (
    <section className='border-light-gray rounded-sm border bg-white'>
      {CONTRACTS_ITEM.map((item, index) => (
        <ContractsItem key={item.id} item={item} isLast={index === CONTRACTS_ITEM.length - 1} />
      ))}
    </section>
  );
};

export default ContractsList;
