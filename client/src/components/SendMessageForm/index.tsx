import { useContext, useState, FormEvent } from 'react';
import { VscGithubInverted, VscSignIn, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import style from './style.module.scss';

export const SendMenssageFrom = () => {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    if(!message.trim()){
      return;
    }
    await api.post('messages', {message});

    setMessage('');
  }
  return(
    <div className={style.sendMenssageFormWrapper}>
      <button className={style.signOutButton} onClick={signOut}>
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
      <form className={style.messageForm} onSubmit={handleSendMessage}>
        <label htmlFor="message">Messagem</label>
        
        <textarea 
        name="message" 
        id="message" 
        placeholder='Qual a sua expectativa para o evento?' 
        onChange={event => setMessage(event.target.value)}
        value={message}/>
        
        <button type='submit'>Enviar Mensagem</button>
      </form>
    </div>
  )
}
