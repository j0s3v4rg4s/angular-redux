// Actions
export interface Action<T = any> {
    type: string
    payload?: T
}

export interface Reducer<T> {
    (state: T, action: Action): T
}