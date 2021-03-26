export interface SearchResponse {
    request_hash?:         string;
    request_cached?:       boolean;
    request_cache_expiry?: number;
    results?:              SearchResult[];
    last_page?:            number;
}

export interface SearchResult {
    mal_id?:     number;
    url?:        string;
    image_url?:  string;
    title?:      string;
    publishing?: boolean;
    synopsis?:   string;
    type?:       string; // Type
    chapters?:   number;
    volumes?:    number;
    score?:      number;
    start_date?: Date;
    end_date?:   Date;
    members?:    number;
}

// export enum Type {
//     Doujinshi = "Doujinshi",
//     LightNovel = "Light Novel",
//     Manga = "Manga",
//     OneShot = "One-shot",
// }
