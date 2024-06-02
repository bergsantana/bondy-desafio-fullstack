import { useContext } from "react"
import { UserContext } from "../../../App"
import {  ContactSupportOutlined, EmailOutlined, HeadsetMicRounded, KeyboardArrowDownRounded, SettingsRounded, SupportAgentRounded, ThumbUpSharp, VideoCameraBackRounded } from "@mui/icons-material"

export default function Landing(){
    const { user  } = useContext(UserContext)
    return (
        <div className="
            flex flex-col
            font-sans
            pt-3 px-0
            lg:w-3/6 lg:m-auto
        ">
            <div className="mx-4">
                <h2 className="m-2  font-bold text-2xl">
                    Bem-vindo, {user.name}</h2>
                <p className="text-blue-700 mt-0 mb-2 mx-2 cursor-pointer" 
                ><EmailOutlined /> <SettingsRounded/> </p>
                <p className="my-0 mx-2 p-0 text-xs ">{user.email}</p>

            </div>
            <div className="lg:w-4/6 lg:mx-auto py-2  my-6 bg-blue-200 rounded-lg text-center text-blue-700 cursor-pointer">
                <p><HeadsetMicRounded /> Atendimento ao colaborador</p>
            </div>
            <div className="mt-3 text-2xl  ">
                <p className="text-center  ">
                    Seus produtos para <b> automatizar</b> processos de RH com a <b className="text-blue-700" >Bondy</b>
                </p>
                <div className="mt-5 bg-gray-100 rounded-3xl pb-3">
                    <img 
                        src="https://bondy.com.br/wp-content/uploads/2023/09/bondy_casodeuso1-AtendimentoaColaboradores.gif" 
                        alt="atendimento-bondy" 
                        className="lg:object-scale-down lg:w-3/5 lg:m-auto"
                    /> 
                    
                    <div className="flex flex-col gap-2 
                        
                        border-b-2
                        mx-10 my-3 mb-11 pb-6">
                        <p  className="pl-8 font-bold"> 
                            Personalizável <b className="text-blue-700"> <KeyboardArrowDownRounded /></b>  
                        </p>              
                        <p className="pl-8 font-bold">
                            Conectada  <b className="text-blue-700"> <KeyboardArrowDownRounded /></b>  
                        </p>
                        <p  className=" pl-8 font-bold">
                            Assertiva <b className="text-blue-700"> <KeyboardArrowDownRounded /></b>  
                        </p>
                        <p  className="pl-8 font-bold">
                            Feita para o RH <b className="text-blue-700"> <KeyboardArrowDownRounded /></b>  
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 pl-4 text-xl font-serif  ">
                        <h4 className="text-center font-bold text-blue-700">Ideal para</h4>
                        <p className="pl-5 font-light"><VideoCameraBackRounded className="text-blue-700" /> Colaboradores remotos</p>
                        <p className="pl-5 font-light"><ThumbUpSharp className="text-blue-700"  /> Otimização de CSC</p>
                        <p className="pl-5 font-light"><ContactSupportOutlined className="text-blue-700"  /> Dúvidas gerais e específicas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}