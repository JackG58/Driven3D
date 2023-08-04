export interface Ok<T> {
    isErrored?: false
    ok:T
}

export interface Error {
    isErrored: true
    error: string
}

export type Result<T> = Error | Ok<T>

export const Match = <T>(result: Result<T>, okFunc: (ok:Ok<T>) => Ok<T>, errorFunc:(error:Error) => Error):Result<T> => 
    result.isErrored ? errorFunc(result as Error) : okFunc(result as Ok<T>)

export const Bind = <T>(result: Result<T>, boundFunc:(input: Ok<T>) => Result<T>) => 
    result.isErrored ? result: boundFunc(result)