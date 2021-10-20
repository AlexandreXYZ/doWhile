import style from './style.module.scss';
import { VscGithubInverted } from 'react-icons/vsc'

const LoginBox = () => {
  return(
    <div className={style.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem </strong>
      <a href='#' className={style.signInWithGithub}>
        <VscGithubInverted size={24}/> 
        Entrar com github
      </a>
    </div>
  )
}

export { LoginBox };