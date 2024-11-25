

export interface TTY {
    phone:   string
    tty:     string
}

export interface DATA {
    ports:   TTY[]
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
    number:  string
    port:    string
}

export interface ApiGetAllMessages {
    number?: string
    port:    string
}