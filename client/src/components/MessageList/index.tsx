import style from './style.module.scss';
import logoImg from '../../assets/logo.svg';

const MessageList = () => {
  return(
    <div className={style.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
			<ul className={style.messageList}>
				<li className={style.message}>
					<p className={style.messageContent}>Sem dúvida as palestras vão ser úteis para a minha carreira e para a de muitos 😍 #gorocket</p>
					<div className={style.messageUser}>
						<div className={style.userImage}>
							<img src="https://github.com/AlexandreXYZ.png" alt="Alexandre Costa Belettini" />
						</div>
						<span className={style.userName}>Alexandre Costa</span>
					</div>
				</li>
				<li className={style.message}>
					<p className={style.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
					<div className={style.messageUser}>
						<div className={style.userImage}>
							<img src="https://github.com/AlexandreXYZ.png" alt="Alexandre Costa Belettini" />
						</div>
						<span className={style.userName}>Alexandre Costa</span>
					</div>
				</li>
				<li className={style.message}>
					<p className={style.messageContent}>Esse vai ser simplesmente fantástico! Bora aprender tudo em relação a montagem de APIs GraphQL. Sem contar com as palestras e painéis.</p>
					<div className={style.messageUser}>
						<div className={style.userImage}>
							<img src="https://github.com/AlexandreXYZ.png" alt="Alexandre Costa Belettini" />
						</div>
						<span className={style.userName}>Alexandre Costa</span>
					</div>
				</li>
				
			</ul>
    </div>
    )
}

export { MessageList };