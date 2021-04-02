import { getMangaDetail } from "./manga-detail-api";

test('get manga detail', async () => {
    const manga = await getMangaDetail("1")
    expect(manga).not.toBeNull()
    expect(manga.title).not.toBeNull()
    expect(manga.synopsis).not.toBeNull()
    
    expect(manga.authors).not.toBeNull()
    expect(manga.authors).not.toHaveLength(0)
})