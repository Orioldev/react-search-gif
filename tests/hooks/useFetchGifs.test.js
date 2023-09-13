import { renderHook, screen , waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en el hook useFecthGifs()', () => { 

    test('Debe de regresar el estado inicial', () => { 

        const { result } = renderHook( ()  => useFetchGifs('One Punch') );
        screen.debug()
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     })

     test('Debe de regresar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook( ()  => useFetchGifs('Saitama') );
        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 20000
            }
        )

        const { images, isLoading } = result.current;



        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

     })
 })