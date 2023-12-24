// button
import { Button, Flex } from 'antd';


import Switcher from './components/Switcher'
const App = () => {

  return (

    // main
    <div className='dark:bg-black h-auto  border-red-500 border-solid border-[1px]'>

      <div className='bg-[#BF2ED1] dark:bg-[black]'>
        <header className='  ml-[4%] mr-[4%] border-red-600 border-solid border-[2px] '>

          {/* top */}
          {/* logo */}
          <div className='md:flex items-center mt-[20px] justify-between'>
            <div className='md:flex'>
              <div className='w-[50px] h-[50px] bg-[#B467E9] rounded-[25px]'></div>
              <div>
                <p className='font-bold text-[white]'>Inno Lingvo</p>
                <p className='text-[white]'>Learn Russian</p>
              </div>
            </div>

            <ul className='flex text-[white] '>
              <li className='m-[15px]'>О нас</li>
              <li className='m-[15px]'> Преимущества </li>
              <li className='m-[15px]'> Работа сервиса</li>
              <li className='m-[15px]'>Вступить в White list</li>
            </ul>

            <div className='flex items-center'>
              <Button className='text-[white] w-[130px] h-[40px] mr-[10px]'>Логин</Button>
              <Button type="primary" className='bg-[blue] w-[130px] h-[40px] mr-[10px]'>Регистрация</Button>
              <Switcher />
            </div>
          </div>

          {/* bottom */}
          <div className='md:flex items-center justify-around mt-[70px]'>
            <div>
              <h1 className='font-bold text-[56px] text-[white]'>Первый в мире сервис <br />
                для постановки и улучшения <br />
                русской речи для детей</h1>

              <p className='text-[white] m-[10px]'>Вступите в white-лист и получите 4 бесплатных <br />
                занятия в числе первых пользователей бесплатно</p>

              <div className='flex'>
                <Button type="primary" href="https://ant.design/index-cn" className='bg-[#FF00D6] m-[10px] flex items-center justify-center w-[160px]  h-[50px] text-[18px]'>
                  Вступить
                </Button>
                <p className='text-[white]'>Количество мест <br /> ограничено!</p>
              </div>
            </div>
            <img src='src/assets/вар1.svg' />
          </div>

        </header>
      </div>




    </div>


  )
}
export default App