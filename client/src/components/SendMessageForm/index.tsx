import { useContext } from 'react';
import { VscGithubInverted, VscSignIn, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import style from './style.module.scss';

export const SendMenssageFrom = () => {
  const { user } = useContext(AuthContext);
  return(
    <div className={style.sendMenssageFormWrapper}>
      <button className={style.signOutButton}>
        <VscSignOut size={32}/>
      </button>
      <header className={style.userInformation}>
        <div className={style.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={style.userName}>{user?.name}</strong>
        <span className={style.userGithub}>
          <VscGithubInverted size={16}/>
          {user?.login}
        </span>
      </header>
      <form className={style.messageForm}>
        <label htmlFor="message">Messagem</label>
        <textarea name="message" id="message" placeholder='Qual a sua expectativa para o evento?' />
        <button type='submit'>Enviar Mensagem</button>
      </form>
    </div>
  )
}
