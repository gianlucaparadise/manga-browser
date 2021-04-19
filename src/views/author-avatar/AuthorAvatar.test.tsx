import React from "react";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import { MALItem } from "../../models/MangaDetail";
import AuthorAvatar from "./AuthorAvatar";

const fakeResponse = {
    "pictures": [
        {
            "large": "https://cdn.myanimelist.net/images/voiceactors/3/38822.jpg",
            "small": "https://cdn.myanimelist.net/images/voiceactors/3/38822.jpg"
        }
    ]
};

const server = setupServer(
    rest.get('https://api.jikan.moe/v3/person/:authorId/pictures', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(fakeResponse))
    }),
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("renders author's avatar", async () => {
    const author: MALItem = {
        "mal_id": 1867,
        "type": "people",
        "name": "Urasawa, Naoki",
        "url": "https://myanimelist.net/people/1867/Naoki_Urasawa"
    }

    render(<AuthorAvatar author={author} />);

    const authorName = author.name as string
    await waitFor(() => screen.getByAltText(authorName));

    const imgSrc = screen.getByAltText(authorName).getAttribute("src")
    const imgExpectedUrl = fakeResponse.pictures[0].small

    expect(imgSrc).toBe(imgExpectedUrl);
});