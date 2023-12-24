// button
import { Button, Flex } from 'antd';


import Switcher from './components/Switcher'
const App = () => {

  return (

    // main
    <div className='dark:bg-black h-auto  border-red-500 border-solid border-[1px]'>

      <header className='dark:bg-[black]  bg-[#BF2ED1] border-red-600 border-solid border-[2px] '>

        {/* top */}
        {/* logo */}
        <div className='md:flex items-center justify-between'>
          <div className='md:flex'>
            <div className='w-[50px] h-[50px] bg-[#B467E9] rounded-[25px]'></div>
            <div>
              <p className='font-bold text-[white]'>Inno Lingvo</p>
              <p className='text-[white]'>Learn Russian</p>
            </div>
          </div>

          <ul className='flex text-[white] '>
            <li className='m-[10px]'>О нас</li>
            <li className='m-[10px]'> Преимущества </li>
            <li className='m-[10px]'> Работа сервиса</li>
            <li className='m-[10px]'>Вступить в White list</li>
          </ul>

          <div className='flex items-center'>
            <Button className='text-[white]'>Логин</Button>
            <Button type="primary" className='bg-[blue]'>Регистрация</Button>
            <Switcher />
          </div>
        </div>

        {/* bottom */}
        <div className='md:flex items-center justify-around'>
          <div>
            <h1>Первый в мире сервис <br />
              для постановки и улучшения <br />
              русской речи для детей</h1>

            <p>Вступите в white-лист и получите 4 бесплатных <br />
              занятия в числе первых пользователей бесплатно</p>

            <Button type="primary" href="https://ant.design/index-cn">
              Href Primary
            </Button>


            <p>Количество мест ограничено!</p>

          </div>
          <img src='src/assets/вар1.svg' />
        </div>

      </header>





    </div>


  )
}
export default App