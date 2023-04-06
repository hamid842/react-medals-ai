import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {ReactNode, useEffect} from "react";
import {useRouter} from "next/router";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

type Props = {
    children: ReactNode
}

const AxiosInterceptor = ({children}: Props) => {
    const router = useRouter();
    useEffect(() => {
        const requestInterceptor = (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }
        const responseInterceptor = (response: AxiosResponse) => response;
        const errorInterceptor = (error: AxiosError) => {
            if (error?.response?.status === 401) {
                router.push('/').then();
            }
            return Promise.reject();
        };
        instance.interceptors.request.use(requestInterceptor);
        const interceptor = instance.interceptors.response.use(
            responseInterceptor,
            errorInterceptor
        );
        return () => instance.interceptors.response.eject(interceptor);
    }, [router]);

    return children;
};

export default instance;
export {AxiosInterceptor};
