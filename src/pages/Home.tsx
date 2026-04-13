import { Button, Badge, Input } from '@/components/common';
import { BadgeCent } from 'lucide-react';

export const Home = () => {
  return (
    <div className='space-y-4'>
      <Button type='button' label='버튼' icon={<BadgeCent />} className='bg-red-300' />
      <Badge tag={true} label='태그' className='bg-[#E8F9F0] font-medium text-[#34C987]' />
      <Input id='email' label='이메일' error='에러 메세지' placeholder='이메일 입력' />
      <Input icon={true} placeholder='계약서 검색...' />
    </div>
  );
};
