"use client"
import { LoginResponse } from '@/common'
import { fetchAuthLogin } from '@/common/api/auth/auth'
import { FormRefProps } from '@/uikit/ui'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import type { LoginSchemaType } from './login.model'
import LoginView from './login.view'

export default function LoginComponent() {
  const navigate = useRouter();
  const mutation = useMutation<LoginResponse, Error, LoginSchemaType>({
    mutationFn: (value) => fetchAuthLogin<LoginSchemaType, LoginResponse>(value),
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token);
      navigate.push('/dashboard');
    },
  });

  const formRef = useRef<FormRefProps<LoginSchemaType>>(null);

  const onSubmitHandler = async (value: LoginSchemaType) => {
    mutation.mutateAsync(value);
  };

  return <LoginView onSubmit={onSubmitHandler} formRef={formRef} />;
}