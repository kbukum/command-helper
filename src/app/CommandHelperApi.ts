export interface ParseResult {
    options: {
        [key: string]: any
    }
    rawArgs: string[]
    otherArgs: string[],
    defaults: {
        [key: string]: boolean
    }
}

export interface CommandTemplate {
    type: string
    default?: string
    remove?: boolean
    usage: 0 | 1 | -1
    infinity?: boolean
}


export interface CommandState {
    command: string,
    template: CommandTemplate,
    argv: string[],
    lastIndex: number,
    part2: string
}

export interface CommandReader {
    (name: string, state: CommandState, options: {[key: string]: any}): any
}

export interface CommandReaders {
    [key: string]: CommandReader
}

export interface CommandHelperTemplate {
    name: string,
    version: string,
    options : {
        [key: string]: any
    }
}

export interface CommandHelperProps {
    start?: number,
    template?: CommandHelperTemplate,
    readers?: CommandReaders
}