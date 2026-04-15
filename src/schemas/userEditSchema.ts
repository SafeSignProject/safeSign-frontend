import { z } from 'zod';

export const userEditSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),

  birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM-DD 형식으로 입력해주세요')
    .refine((date) => {
      const today = new Date();
      const input = new Date(date);
      return input <= today;
    }, '미래 날짜는 입력할 수 없습니다'),

  email: z.string().email('올바른 이메일 형식이 아닙니다'),

  phone: z.string().regex(/^010-\d{4}-\d{4}$/, '010-0000-0000 형식으로 입력해주세요'),
});

export type userEditType = z.infer<typeof userEditSchema>;
