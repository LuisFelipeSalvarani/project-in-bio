import { ProjectCard } from '../commons/project-card'
import { TotalVisits } from '../commons/total-visits'
import { UserCard } from '../commons/user-card'
import { Button } from '../ui/button'
import { TextInput } from '../ui/text-input'

export function Hero() {
  return (
    <div className="flex h-screen">
      <div className="mt-[35vh] flex w-full flex-col gap-2">
        <h1 className="font-bold text-5xl text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>

        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>

        <div className="mt-[10vh] flex w-full items-center gap-2">
          <span className="text-white text-xl">projectinbio.com</span>
          <TextInput placeholder="Seu link" />
          <Button>Criar agora</Button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_45%)]">
        <div className="relative">
          <UserCard />
          <div className="-bottom-[7%] -right-[45%] absolute">
            <TotalVisits />
          </div>

          <div className="-left-[45%] -z-10 absolute top-[20%]">
            <ProjectCard />
          </div>

          <div className="-top-[5%] -left-[55%] -z-10 absolute">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  )
}
