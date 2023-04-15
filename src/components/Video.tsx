import { DiscordLogo, Lightning } from "phosphor-react";

export function Video () {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold leading-relaxed">
              Aula 01 - Abertura do Evento Ignite Lab
            </h1>
            <p className="mt-4 text-gray-400">
              Nessa aula vamos dar inicio ao projeto criando a estrutura base da 
              aplicação utilizando ReactJS e graphCMS gerada pela plataforma do 
              nosso front-end.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                <DiscordLogo size={24}/>
                Comunidade do Discord
            </a>
            <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <img
            src="https://github.com/franwanderley.png"
            alt="professor"
            className="h-16 w-16 rounded-full border-2 border-blue-500"
          />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">
              Francisco Wanderley
            </strong>
            <span className="text-gray-200 text-sm block">
              Dev FullStack Zallpy Digital
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}