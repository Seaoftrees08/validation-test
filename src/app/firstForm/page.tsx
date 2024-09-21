"use client";
import {Box, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

type FirstFormType = {
    name: string;
}

const schema = yup.object().shape({
    name: yup.string().required("名前を入力してください！"),
});

export default function FirstForm(){

    const{
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FirstFormType>({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<FirstFormType> = (formData) => {
        console.log(formData);
    }

    return(
        <div className="text-slate-100 bg-gray-800">
            <Box m={4} className="max-w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 項目一つしかないけど、増やす場合はBoxごとコピペすることで見た目よく増やせる(増えすぎるならコンポーネント化もできる) */}
                    <Box borderWidth='1px' borderRadius='lg' className="max-w-3xl p-2 mx-auto my-4">
                        <FormControl isInvalid={(errors.name && errors.name.message) !== undefined}>
                            <FormLabel className="pl-2">おなまえ</FormLabel>
                            <Input
                                id="name"
                                placeholder="Please type your name!"
                                {...register("name")}
                            />
                            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                        </FormControl>

                    </Box>
                </form>
            </Box>
        </div>
)
}