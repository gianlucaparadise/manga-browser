export interface MangaDetail {
    request_hash?:         string;
    request_cached?:       boolean;
    request_cache_expiry?: number;
    mal_id?:               number;
    url?:                  string;
    title?:                string;
    title_english?:        string;
    title_synonyms?:       any[];
    title_japanese?:       string;
    status?:               string;
    image_url?:            string;
    type?:                 string;
    volumes?:              number;
    chapters?:             number;
    publishing?:           boolean;
    published?:            Published;
    rank?:                 number;
    score?:                number;
    scored_by?:            number;
    popularity?:           number;
    members?:              number;
    favorites?:            number;
    synopsis?:             string;
    background?:           string;
    related?:              Related;
    genres?:               MALItem[];
    authors?:              MALItem[];
    serializations?:       MALItem[];
}

export interface MALItem {
    mal_id?: number;
    type?:   string;
    name?:   string;
    url?:    string;
}

export interface Published {
    from?:   Date;
    to?:     Date;
    prop?:   Prop;
    string?: string;
}

export interface Prop {
    from?: From;
    to?:   From;
}

export interface From {
    day?:   number;
    month?: number;
    year?:  number;
}

/**
 * This is a dictionary of MALItems
 */
export interface Related {
    [key: string]: MALItem[];
}
