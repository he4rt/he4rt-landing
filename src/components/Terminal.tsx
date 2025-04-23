import { Check, ChevronRight, Code, DollarSign } from "lucide-react";

export const Terminal = () => {
  return (
    <div className="border-1 border-neutral-outline rounded-xl  min-h-[397px] flex flex-col bg-card-default sm:w-[527px]">
      <div className="bg-[#151516] rounded-t-xl p-4 flex items-center relative justify-center ">
        <div className="flex gap-3 absolute left-4">
          <div className="w-2 h-2 rounded-full bg-helper-error" />
          <div className="w-2 h-2 rounded-full bg-helper-warning" />
          <div className="w-2 h-2 rounded-full bg-helper-sucess" />
        </div>
        <h3 className="font-family-primary font-medium text-sm text-text-high ">
          he4rtdevs.exe
        </h3>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-3.5">
        <p className=" flex items-center gap-2 font-family-code font-medium text-text-medium">
          <DollarSign size="16px" /> <span>he4rt --init</span>
        </p>
        <p className=" flex items-center gap-2  font-family-code font-medium text-[#56FF53] text-base">
          <Check size="16px" /> <span>Conectando recursos...</span>
        </p>
        <p className=" flex items-center gap-2  font-family-code font-medium text-[#56FF53] text-base">
          <Check size="16px" /> <span>Preparando ambiente...</span>
        </p>
        <p className=" flex items-center gap-2  font-family-code font-medium text-[#FF5353] text-base">
          <ChevronRight size="16px" />{" "}
          <span> Bem-vindo à comunidade Coração.dev!</span>
        </p>

        <div className="border border-neutral-outline rounded-lg p-4 gap-3.5 flex flex-col">
          <p className=" flex items-center gap-2 font-family-code font-medium text-text-medium">
            <span>Recursos disponíveis</span>
          </p>
          <p className=" flex items-center gap-2  font-family-code font-medium text-text-high text-base">
            <Code size="16px" color="#782BF1" />
            <span>Projetos open-source</span>
          </p>
          <p className=" flex items-center gap-2  font-family-code font-medium text-primary-purple text-base">
            <Code size="16px" color="#782BF1" />
            <span>Comunidade ativa</span>
          </p>
          <p className=" flex items-center gap-2  font-family-code font-medium text-text-high text-base">
            <Code size="16px" color="#782BF1" />
            <span>Mentorias</span>
          </p>
          <p className=" flex items-center gap-2  font-family-code font-medium text-text-high text-base">
            <Code size="16px" color="#782BF1" />
            <span>Eventos e WorkShops</span>
          </p>
        </div>
      </div>
    </div>
  );
};
