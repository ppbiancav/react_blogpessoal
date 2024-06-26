import ListaPostagens from "../../componentes/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../componentes/postagens/modalpostagem/ModalPostagem"


function Home() {
    return (
        <>
            <div className="bg-pink-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Sejam bem-vindos!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className=" flex justify-center">
                        <img
                            src="https://i.imgur.com/8xJOE4X.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home