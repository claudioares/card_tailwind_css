function App() {

  return (
    <div>
      <div className="container h-screen w-screen mx-auto flex items-center justify-center">
        <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 mx-4 rounded-md">
          <div className="flex flex-row items-center">
            <img
              className="w-24 rounded-full"
              alt="User avatar"
              src="http://github.com/claudioares.png"
            ></img>
            <div className="ml-4">
              <h3 className="font-semibold text-xl">Cláudio Soares</h3>
              <h4 className="text-indigo-300 pt-1">Desenvolvedor FullStack</h4>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-1xl mb-2">Bio:</h2>
            <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">
              Sou desenvolvedor front-end, me dedico quase 10 horas por dia aos estudos e a criação de projetos e essa dedicação me da a pura certeza que todo dia eu evoluo um pouco mais e que vale muito as horas e  me faz ter a certeza que usar tecnológia para solucionar problemas é o que eu quero fazer pro resto da vida
            </p>
          </div>

          <div className="mt-6">
            <div>
              <h2 className="font-semibold text-1xl mb-2">Carreira:</h2>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-yellow-500 font-medium text-xl mt-1">
              Cubos Academy (Estudante)
            </h3>

            <ul className="list-disc list-inside pl-4">
              <li className="list-item">Desenvolvedor Frontend</li>
              <li className="list-item">Desenvolvedor Backend</li>
              <li className="list-item">Desenvolvedor Database</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
