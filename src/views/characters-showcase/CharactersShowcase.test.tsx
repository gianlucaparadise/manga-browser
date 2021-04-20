import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import CharactersShowcase from './CharactersShowcase';
import { act } from 'react-dom/test-utils';

const fakePictureList = {
    "pictures": [
        {
            "large": "https://cdn.myanimelist.net/images/characters/10/34138.jpg",
            "small": "https://cdn.myanimelist.net/images/characters/10/34138.jpg"
        }
    ]
}

const server = setupServer(
    rest.get('https://api.jikan.moe/v3/character/:characterId/pictures', (req, res, ctx) => {
        return res(ctx.json(fakePictureList))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders characters showcase and checks image change', async () => {
    await act(async () => {
        render(<CharactersShowcase />);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // since there is an async action in useEffect, I need a delay
        // TODO: this should be tested without delay
    })
    
    const imgShowcase = screen.getByAltText("Random Manga Character") as HTMLImageElement

    expect(imgShowcase).toBeInTheDocument();

    const imgUrl = imgShowcase.src;
    expect(imgUrl).toEqual(fakePictureList.pictures[0].large);
})