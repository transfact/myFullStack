import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import React from 'react';

export default function HookFormPratice() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onValid = (data) => {
        console.log('onValid : ', data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type="text" placeholder="이름" {...register('name', { required: '이름은 필수항목입니다.' })} />
                <div>{errors.name?.message}</div>

                <input type="number" placeholder="나이" {...register('age', { required: '나이는 필수항목입니다.', min: { message: '0이상만 입력 가능합니다', value: 0 } })} />
                <div>{errors.age?.message}</div>
                <button type="submit">제출</button>
            </form>
        </>
    );
}
