export interface Dictionary {
    def?: Array<Definition>
}

export interface Definition {
    text: string
    pos: string
    ts: string
    tr: Array<Translation>
}

export interface Translation {
    text: string
    pos?: string
    gen?: string
    syn?: Array<Synonym>
    mean?: Array<Meaning>
    ex?: Array<Example>
}

export interface Synonym {
    text: string
    pos?: string
    gen?: string
}

export interface Meaning {
    text: string
}

export interface Example {
    text: string
    tr: Array<Translation>
}
