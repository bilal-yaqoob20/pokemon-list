export interface IPokemonService {
    count: number,
    nextCall: string,
    isLoading: boolean,
    data: Array<{
        name: string,
        url: string
    }>,
    isSuccess: boolean
}

export interface IPokemonDetailService {
    name: string
    height: number
    types: Array<string>
    weight: number
    picture: string
    isSuccess: boolean
    isLoading: boolean
}
