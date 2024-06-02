import { useContext, useState } from "react"
import { lineSpinner } from "ldrs"
import api from "../../api/api"
import { UserContext } from "../../App"
import { useNavigate } from "react-router-dom"


export default function Login( ) {
    const [userinputs  , updateUser] = useState({
        name: '',
        email: '',
        company: '',
        password: ''
    }) 

    const navigate = useNavigate() 

    const { user, setUser } = useContext(UserContext)

    const [ loginStatus, setLoginStatus] = useState(
        false
    )
    const [ loginTry, setLoginTry ] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    
    lineSpinner.register()

    const loading =   () => {
        setIsLoading(true)
        setTimeout(
            ()=>{
                setIsLoading(false)
                 
            }, 3000
        )
    }

    const handleSubmit= async (e: React.SyntheticEvent) => {
        e.preventDefault()
        loading()
                 
        const form = e.target as typeof e.target & {
            emailInput: { value: string},
            passInput: { value: string}
        }
        try {
           const useApi = api.useAPI()
           const res = await useApi.login(form.emailInput.value, form.passInput.value) 
           console.log('res', res)
           setLoginTry(true)
            if (res.data  ) {
                console.log('res.data', res.data)
                const {name, email, company, password} = res.data.data.login
                console.log(name, email, company, password)
                setLoginStatus(true)
                setLoginTry(false)
                updateUser({name, email, company, password})
                setUser({name, email, company, password})
                setTimeout(() => { if(name.length){ navigate('/welcome')}}, 2000)
            }

        }catch(e){
            console.log('err', e)
        }
    }
    
    return (
        <div className="
            h-screen
            flex
            bg-none
            sm:bg-[url('https://app.bondy.com.br/assets/bondy_wallpaperlogin.svg')]
            
            bg-no-repeat
            bg-right-top
            items-center
            px-0 
            sm:px-36
            
            ">
            <div className="
                flex flex-col
                w-96 h-96
                align-middle
                  ">
                
                <div>
                    <img 
                        className="m-3"
                        src='https://app.bondy.com.br/assets/brand/logo_bondy.svg' />
                </div>
                <div>
                    
                    <h4 className="px-3 text-3xl font-bold font-sans text-slate-600">Bem-vindo(a)</h4>{
                        isLoading ? (
                            <div
                                className="mx-40 my-24"
                            >
                                <l-line-spinner
                                size="40"
                                stroke="3"
                                speed="1"
                                color="#342FEA"
                            ></l-line-spinner>
                            </div>
                            
                        ) :
                        <form onSubmit={handleSubmit}>
                            <p className="mt-3 px-3 text-xs">
                                Por favor, digite suas credenciais para prosseguir.
                            </p>
                            <h5 className="m-3 font-bold">E-mail</h5>
                            <input className="
                                h-10
                                px-2
                                mx-3
                                border-2 rounded w-11/12
                                " 
                                placeholder="Insira seu email"
                                name="emailInput"
                            />
                            <h5 className="m-3 font-bold">Senha</h5>
                            <input className="
                                h-10
                                px-2
                                mx-3
                                border-2 rounded w-11/12
                                "
                                placeholder="Insira sua senha"
                                type="password"
                                name="passInput"
                            />

                            <button className="m-3 font-bold text-blue-500">Esqueceu sua senha?</button>

                            <button 
                                
                                type='submit'
                                className="
                                mx-3    
                                bg-blue-600 w-11/12 rounded
                                text-white
                                font-bold
                                h-10

                                "
                            >Entrar</button>
                    </form>
                    }
                    
                { loginTry && !loginStatus && <div className="m-3 text-sm text-red-500">
                    <p>Wrong email or password</p>
                </div>}
                
                </div>
        </div>
         
         
         
            </div>
    )
}