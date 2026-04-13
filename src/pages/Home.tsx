import { Button, Badge, Input } from '@/components/common';

export const Home = () => {
  return (
    <div>
      <Button type='button' label='버튼' />
      <Badge tag={true} label='태그' />
      <Input />
    </div>
  );
};
