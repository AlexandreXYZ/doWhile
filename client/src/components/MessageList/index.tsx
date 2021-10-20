import style from './style.module.scss';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

type Message = {
	id: string,
	text: string,
	user: {
		nome: string,
		avatar_url: string
	}
}

const MessageList = () => {
	const [messages, setMessages] = useState<Message[]>([])
  useEffect(()=>{
		api.get<Message[]>('messages/last3').then(response => {
			setMessages(response.data);
		})
	}, [messages])
	
	return(
    <div className={style.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
			<ul className={style.messageList}>
			{messages.map(messages=>{
				return(
					<li key={messages.id} className={style.message}>
					<p className={style.messageContent}>{messages.text}</p>
					<div className={style.messageUser}>
						<div className={style.userImage}>
							<img src={messages.user.avatar_url} alt={messages.user.nome} />
						</div>
						<span className={style.userName}>{messages.user.nome}</span>
					</div>
				</li>
				)
			})}
			</ul>
    </div>
    )
}

export { MessageList };