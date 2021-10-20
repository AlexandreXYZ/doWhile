import style from './App.module.scss'
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

const App = () => {

  return (
    <main className={style.contentWrapper}>
      <MessageList/>
      <LoginBox/>
    </main>
  )
}

export { App };