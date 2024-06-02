import { ArrowDownward } from "@mui/icons-material";

export default function Home() {
    return (
        <div className="flex justify-between">
            <div className="lg:w-4/12 pt-52 pl-8">
                <p className="mt-8  ml-4 pl-1 text-3xl font-sans">
                        A <b>plataforma</b> de
                        automação de processos
                        do RH <b className="text-blue-700">focada na
                        experiência
                        do colaborador.</b>
                </p>
                <div className="
                    flex flex-col
                    items-center justify-center
                    w-52 h-8 hover:h-11 hover:w-56 duration-150
                    rounded-md
                    ml-4 my-9
                    text-center
                    bg-blue-700 text-white">Agende uma demo</div>
                <div className="pl-8 text-blue-700 animate-bounce"><ArrowDownward/> </div>
            </div>
            <div className="hidden lg:flex w-2/5 h-auto rounded-2xl bg-[url('https://bondy.com.br/wp-content/uploads/2023/09/bg-bondy.png')]">
                    <img
                        className="bject-scale-down h-96 rounded-2xl absolute top-48 right-24 z-10"
                        src="https://bondy.com.br/wp-content/uploads/2023/09/img-03-768x922.jpg" 
                    />
                    <img 
                        className="object-scale-down h-96 rounded-2xl absolute top-24 right-1/4"
                        src="https://bondy.com.br/wp-content/uploads/2023/09/img-02-768x922.jpg" />
            </div>
        </div>
    )

}