

export interface TTY {
    phone:   string
    tty:     string
}

export interface DATA {
    ports:   TTY[]
}

export interface AnswerTTY {
    status: boolean
    data: TTY[]
}


export interface Message {
    id:      string
    phone:   string
    date:    string
    message: string
}

export interface NewMessages { 
    type:    string;
    phone:   string;
    date:    string;
    message: string;
}

export interface ApiGetNewMessage {
    token: string
    number:  string
    port:    string
}

export interface ApiGetAllMessages {
    token: string
    number?: string
    port:    string
}

export interface ResponseNewLastMessage {
    status: boolean
    data?: NewMessages | []
}

export interface ResponseNewAllMessage {
    status: boolean
    data?: NewMessages[]
}

export interface ResponseLastMessage {
    status: boolean
    data?: Message | []
}

export interface Response {
    status: boolean
    data?: Message[]
}

export interface ReqDeleteALlMessage {
    token: string
    port: string
}

export interface ResponseTTY {
    status: boolean
    data: TTY[]
}