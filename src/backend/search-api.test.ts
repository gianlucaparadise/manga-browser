import { search } from "./search-api";

test('search manga', async () => {
    const response = await search("death note")
    expect(response).not.toBeNull()

    const results = response.results
    expect(results).not.toBeNull()
    expect(results).not.toHaveLength(0)

    const first = results[0]
    expect(first).not.toBeNull()
    expect(first.title).not.toBeNull()
    expect(first.image_url).not.toBeNull()
    expect(first.image_url).not.toHaveLength(0)
})