import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas sobre el componente <GifGrid />', () => { 

    const category = 'One Punch'

    test('Debe de mostrar el Loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid  category={ category } /> );
        expect( screen.getAllByText('Cargando...') );
        expect( screen.getAllByText(category) );

        screen.debug();

     })

     test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid  category={ category } /> )
        expect( screen.getAllByRole('img').length ).toBe(2)
        screen.debug();



      })

 })