import { z } from 'zod';

// 기본 공통 필드
const baseSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요.').email('유효하지 않은 이메일 형식입니다.'),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 20자 이하여야 합니다.'),
});

// 로그인용 스키마
export const loginSchema = baseSchema;

// 회원가입용
export const signupSchema = baseSchema
  .extend({
    passwordConfirm: z.string(),
    name: z.string().min(1, '이름을 입력해주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

// 타입 추론
export type LoginType = z.infer<typeof loginSchema>;
export type SignupType = z.infer<typeof signupSchema>;
