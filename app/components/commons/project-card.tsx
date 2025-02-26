export function ProjectCard() {
  return (
    <div className="flex h-[132px] w-[430px] gap-5 rounded-[20px] border border-transparent bg-background-secondary p-3 hover:border-border-secondary">
      <div className="size-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src="/project1.png"
          alt="Projeto"
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-bold text-accent-green text-xs uppercase">
          10 Cliques
        </span>

        <div className="flex flex-col">
          <span className="font-bold text-white">Projeto 1</span>
          <span className="text-content-body text-sm">
            Descrição do projeto
          </span>
        </div>
      </div>
    </div>
  )
}
