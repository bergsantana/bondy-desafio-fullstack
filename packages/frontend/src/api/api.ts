import axios from "axios";

const api = axios.create({
    baseURL:`http://[::1]:3000/local`
})

function useAPI()  { 
    const login  = async (email: string, password: string) => {
        let headersList = {
            "Accept": "*/*",
             
            "Content-Type": "application/json"
        }
        let gqlBody = {
            query: `mutation userLogin($email: String!, $password: String!) {
            login(email: $email, password: $password){
              email
              name
              password
              company
            }
          }`,
            variables: {"email":"desafio@bondy.com.br","password":"123456"}
        }
         
        let bodyContent =  JSON.stringify(gqlBody);
 
        let reqOptions = {
            url: "http://[::1]:3000/local/desafio",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        let response = await axios.request(reqOptions);
        return response
    }
    

    return {login}
}

export default { api, useAPI}