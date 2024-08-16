export interface HttpRequest{
    body?: any;
    headers?: any;
    params?: any;
    query?: any;
}

export interface HttpResponde{
    status: number;
    message: string;
    data?: any;
}