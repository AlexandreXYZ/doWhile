import style from './App.module.scss'
import { LoginBox } from './components/LoginBox';

const App = () => {

  return (
    <main className={style.contentWrapper}>
      <LoginBox/>
    </main>
  )
}

export { App };