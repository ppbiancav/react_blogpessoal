
function Home(){
    return(
      <>
      <div className="bg-indigo-900 w-screen flex justify-center ">
         <div className=" container grid grid-cols-2 text-white">
            <div className=" gap-4 flex flex-col items-center  justify-center py-4">
              <h2 className=" text-5xl font-bold">Sejam muito bem-vindes!</h2>
              <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
              <div className="rounded text-white border-white  bg-indigo-400
                border-solid border-2 py-2 px-4">
                  Nova postagem
                </div>
            </div>
            <div className="flex ">
              <img src="https://imgur.com/VpwApCU.png"
              alt="Imagem da Página da Home" 
              width="400px"
              />
            </div>   
         </div> 
      </div> 
      </>
    );
    }
    export default Home;