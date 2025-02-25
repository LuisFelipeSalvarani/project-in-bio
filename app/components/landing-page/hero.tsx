export function Hero() {
  return (
    <div className="flex border">
      <div className="mt-[35vh] flex w-full flex-col gap-2 border">
        <h1 className="font-bold text-5xl text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>

        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>

        <div className="-mt-[10vh] flex w-full items-center gap-2">
          <span className="text-white text-xl">projectinbio.com</span>
          <input type="text" />
          <button type="button">Criar agora</button>
        </div>

        <div className="transparent_55%)] flex w-full items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,">
          <div className="relative">
            {/* <UserCard /> */}
            <div className="-bottom-[7%] -right-[45%] absolute">
              {/* <TotalVisits /> */}
            </div>

            <div className="-left-[45%] -z-10 absolute top-[20%]">
              {/* <ProjectCard /> */}
            </div>

            <div className="-top-[5%] -left-[55%] -z-10 absolute">
              {/* <ProjectCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
