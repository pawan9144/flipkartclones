import { KEYS } from '@/constants'

export const toNumber = (value: any): number => Number.parseInt(value, 10)

export const toInteger = (value: any): number => {
    if (Number.isNaN(Number.parseInt(value, 10))) {
        return 0
    }
    return Number.parseInt(value, 10)
}

export const toBool = (value: any): boolean => value === 'true'

export const isUndefined = (value: any): boolean =>
    value === undefined || value === 'undefined'

export const isNull = (value: any): boolean =>
    value === null || value === 'null'

export const isEmpty = (value: any): boolean =>
    isUndefined(value) || isNull(value) || value === ''

export const isValidInt = (value: any): boolean => toInteger(value) !== 0

export const isAuthenticated = (): boolean => {
    if (window) {
        const authToken = window.localStorage.getItem(KEYS.AUTH_TOKEN)
        if (isEmpty(authToken)) {
            return false
        }
        return true
    }
    return false
}

export const getAuthToken = (): string | boolean => {
    if (window) {
        const authToken = window.localStorage.getItem(KEYS.AUTH_TOKEN)
        if (isEmpty(authToken)) {
            return false
        }
        return authToken!
    }
    return false
}
