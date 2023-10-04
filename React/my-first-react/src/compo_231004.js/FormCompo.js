import { useForm } from 'react-hook-form';
import React from 'react';

export default function FormCompo() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    //handleSubmit안에는 반드시 작성하고, 두개의 함수를 받음
    //하나는 유효시 실행, 유효하지 않을 시 시행
    const onValid = (data) => {
        console.log('onValid : ', data);
    };
    const onInValid = (data) => {
        console.log('onInValid : ', data);
    };
    console.log(errors);
    //실시간 값 체크
    // console.log('watch : ', watch('username'));
    return (
        <>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input type="text" placeholder="아이디를 입력하세요." {...register('username', { required: '아이디를 입력하세요', minLength: { message: '최소 2글자 필요', value: 2 }, maxLength: { message: '최대 10글자', value: 10 } })}></input> <br />
                <div>{errors.username?.message}</div>
                <input
                    type="text"
                    placeholder="이메일을 입력하세요."
                    {...register('email', {
                        required: '이메일을 입력하세요',
                        validate: {
                            useGmail: (value) => {
                                // const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                                // return regExp.test(value) || '이메일 형식이 아닙니다.';

                                return value.includes('@gmail.com') || 'gmail 형식이 아닙니다';
                            },
                        },
                    })}
                ></input>
                <br />
                <div>{errors.email?.message}</div>
                <input type="password" {...register('password')}></input>
                <br />
                <button type="submit">버튼</button>
            </form>
        </>
    );
}
