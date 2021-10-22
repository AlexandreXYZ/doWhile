import style from './style.module.scss';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

type Message = {
	id: string,
	text: string,
	user: {
		name: string,
		avatar_url: string
	}
}

const messagesQueue: Message[] = []
const socket = io('http://localhost:4000')

socket.on('new_message', newMessage => {
	messagesQueue.push(newMessage);
})

const MessageList = () => {
	const [messages, setMessages] = useState<Message[]>([])

	useEffect(()=>{
		const timer = setInterval(()=>{
			if (messagesQueue.length>0){
				setMessages(prevState=>[
					messagesQueue[0],
					prevState[0],
					prevState[1]
				].filter(Boolean));
				messagesQueue.shift();
			}
		}, 3000)
	})

  useEffect(()=>{
		api.get<Message[]>('messages/last3').then(response => {
			setMessages(response.data);
		})
	}, [])
	
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
							<img src={messages.user.avatar_url} alt={messages.user.name} />
						</div>
						<span className={style.userName}>{messages.user.name}</span>
					</div>
				</li>
				)
			})}
			</ul>
    </div>
    )
}

export { MessageList };