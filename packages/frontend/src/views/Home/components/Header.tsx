import { AccountCircleRounded, MenuTwoTone } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "../../../App";

interface Props {
    routeClick : Function[]
    currRouter: string
}


export default function Header(props: Props){ 
    const { user  } = useContext(UserContext)
    const onLoginClick = (): void => props.routeClick[0]()
    const onHomeClick = () : void => user.name.length ?  props.routeClick[2]() : props.routeClick[1]()

   

    return (
        <header className="px-3 py-1 grid grid-cols-3  h-16 max-w-full shadow-md sm:grid-cols-header">
            <img 
                onClick={onHomeClick}
                alt='bondy logo'  
                src="https://bondy.com.br/wp-content/uploads/2023/09/logo-bondy-1200x425.png" 
                className=" py-2 cursor-pointer m-2 object-scale-down max-h-full"
            />
             
             
            <div className="flex  ">
                <div className=" m-auto hover:text-[#342FEA]  lg:hidden " >
                    <MenuTwoTone />
                </div>
                <div className="hidden lg:flex gap-3">
                    <button className="hover:text-[#342FEA] ">Como funciona?</button>
                    <button className="hover:text-[#342FEA]"> Quem somos</button>
                    <button className="hover:text-[#342FEA]">Produtos</button>
                    <button className="hover:text-[#342FEA]">Integração Whatsapp</button>
                    <button className="hover:text-[#342FEA]">Spark</button>
                    <button className="hover:text-[#342FEA]">Conteúdos</button>
                </div>
            </div>
            <div className="sm:pt-3  pt-4 justify-self-end text-[#342FEA]">
                <button 
                    onClick={onLoginClick}
                    className="flex gap-3 py-0 px-0 items-center " >
                    <AccountCircleRounded />
                    <p className="font-bold">
                        {user.name.length ? user.name : 'Login'}
                    </p>
                </button>
            </div>
            <button 
                className="
                    px-2
                    py-2
                    mt-0
                    transition
                    text-[#342FEA] 
                    hover:text-white
                    hover:bg-[#342FEA] 
                    justify-self-center 
                    hidden
                    md:flex
                    max-h-full
                    text
                    fit max-w-56  
                    font-medium
                    border-2  
                    border-solid 
                    border-[#342FEA] 
                    rounded-md  
                    basis-1/12"
                    

                >Agende uma demo</button>
        </header>
    )
}