export interface PicturesResponse {
    request_hash:         string;
    request_cached:       boolean;
    request_cache_expiry: number;
    pictures:             Picture[];
}

export interface Picture {
    large: string;
    small: string;
}