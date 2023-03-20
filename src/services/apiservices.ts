/* eslint-disable no-console */
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import { getAuthToken } from '@/utils'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials = true

axios.interceptors.request.use((config) => {
    const authToken: string | boolean = getAuthToken()
    if (authToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers!.Authorization = `Bearer ${authToken}`
    }
    return config
})

axios.interceptors.response.use(
    async (response) => {
        return response
    },
    async (error: AxiosError) => {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { status } = (await error?.response) as any
        switch (status as number) {
            case 401:
                console.log('Logout user...')
                break
            case 403:
                console.log('Forbidden')
                break
            default:
                break
        }
        return Promise.reject(error?.response)
    }
)

const responseBody = <T>(response: AxiosResponse<T>) => response?.data

export function createFormData(item: any): FormData {
    const formData: FormData = new FormData()
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData
}

const headers = { 'Content-type': 'multipart/form-data' }

export const apiService = {
    get: <T, P>(url: string, params: P) =>
        axios.get<T>(url, { params }).then(responseBody),
    post: <T, B>(url: string, body: B) =>
        axios.post<T>(url, body).then(responseBody),
    put: <T, B>(url: string, body: B) =>
        axios.put<T>(url, body).then(responseBody),
    patch: <T, B>(url: string, body: B) =>
        axios.patch<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
    postForm: <T, B>(url: string, body: B) =>
        axios.post<T>(url, body, { headers }).then(responseBody),
    putForm: <T, B>(url: string, body: B) =>
        axios.put<T>(url, body, { headers }).then(responseBody),
}
