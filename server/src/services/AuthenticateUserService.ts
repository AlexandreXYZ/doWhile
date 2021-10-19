import axios from "axios";

class AuthentificateUserService{
  async execute(code:string){
    const url = "https://github.com/login/oauth/access_token"
    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET, 
        code
      },
      headers: {
        "Accept": "application/json"
      }
    })
    return response.data;
  }
}

export default AuthentificateUserService;