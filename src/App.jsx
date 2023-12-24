import "./App.css"

// button
import { Button, Flex } from 'antd';

// icons
import { MenuOutlined, InstagramOutlined, FacebookOutlined, YoutubeOutlined} from '@ant-design/icons';

import { Space } from 'antd';

import Switcher from './components/Switcher'
import { sizing } from '@mui/system';
import Card1 from "./components/Card1";
const App = () => {

  return (

    // main
    <div className='dark:bg-black h-auto  border-red-500 border-solid border-[1px]'>

      <div className='bg-[#BF2ED1] dark:bg-[black]'>
        <header className='ml-[4%] mr-[4%]  dark:border-black border-[#BF2ED1] border-solid border-[1px]  '>

          {/* top */}
          {/* logo */}
          <div className='flex items-center mt-[20px] justify-between'>
            <div className='flex'>
              <div className='w-[50px] h-[50px] bg-[#B467E9] rounded-[25px]'></div>
              <div>
                <p className='font-bold text-[white]'>Inno Lingvo</p>
                <p className='text-[white]'>Learn Russian</p>
              </div>
            </div>

            <ul className=' text-[white] mob:hidden md:inline-flex '>
              <li className='m-[15px]'>О нас</li>
              <li className='m-[15px]'> Преимущества </li>
              <li className='m-[15px]'> Работа сервиса</li>
              <li className='m-[15px]'>Вступить в White list</li>
            </ul>

            <div className='flex items-center'>
              <Button className='text-[white] w-[150px] flex justify-center items-center h-[40px] mr-[10px] mob:hidden md:inline-flex'>Логин</Button>
              <Button type="primary" className='bg-[blue] w-[130px] flex justify-center items-center h-[40px] mr-[10px] mob:hidden md:inline-flex '>Регистрация</Button>

              <MenuOutlined className='mob:block md:hidden text-[30px] text-[white] mr-[20px]' />

              <Switcher />

            </div>
          </div>

          {/* bottom */}
          <div className='md:flex items-center justify-around mt-[70px]'>
            <div>
              <h1 className='font-bold mob:text-[25px] md:text-[56px] text-[white]'>Первый в мире сервис <br />
                для постановки и улучшения <br />
                русской речи для детей</h1>

              <p className='text-[white] mt-[10px]'>Вступите в white-лист и получите 4 бесплатных <br />
                занятия в числе первых пользователей бесплатно</p>

              <div className='md:flex'>
                <Button type="primary" href="https://ant.design/index-cn" className='bg-[#FF00D6] m-[10px] flex items-center justify-center mob:w-[90%]  md:w-[160px]  h-[50px] text-[18px]'>
                  Вступить
                </Button>
                <p className='text-[white]'>Количество мест <br /> ограничено!</p>
              </div>
            </div>
            <img src='src/assets/вар1.svg' />
          </div>

        </header>
      </div>



      {/* section1 */}
      <section className='md:flex justify-around m-[5%] '>

        {/* left */}
        <div>
          <h1 className='font-bold mob:text-[30px] md:text-[40px]  text-[black] dark:text-[white]'>Всего 3 минуты, чтобы <br /> начать улучшать речь</h1>

          <div className='flex justify-center items-center'>
            <img src='src/assets/Group 56 (1).png' />
            <p className='dark:text-[white] m-[20px] mob:text-[14px] md:text-[20px]'>Скачайте приложение в App Store или <br /> Google Play. Зарегистрируйтесь, чтобы <br /> отслеживать прогресс ребёнка</p>
          </div>

          <div className='flex justify-center items-center'>
            <img src='src/assets/Group 57.png' />
            <p className='dark:text-[white] m-[20px] mob:text-[14px] md:text-[20px]'>Скачайте приложение в App Store или <br /> Google Play. Зарегистрируйтесь, чтобы <br /> отслеживать прогресс ребёнка</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src='src/assets/Group 58.png' />
            <p className='dark:text-[white] m-[20px] mob:text-[14px] md:text-[20px]'>Скачайте приложение в App Store или <br /> Google Play. Зарегистрируйтесь, чтобы <br /> отслеживать прогресс ребёнка</p>
          </div>

        </div>
        {/* right */}
        <div>
          <img src='src/assets/Group 16.png' />
        </div>

      </section>




      {/* section2 */}
      <section className='m-[5%] mt-[20px]'>

        <div className='m-[4%] md:flex justify-around items-center'>
          {/* left */}
          <div>
            <img src='src/assets/Frame (1).png' />
          </div>
          {/* right */}
          <div>
            <h1 className='font-bold md:text-[50px] dark:text-[white]'>Как это работает?</h1>
            <p className='m-[10px] dark:text-[white] mob:w-[100%]'>До банального просто! Inno Lingvo - это маркетплейс, <br /> соединяющий логопедов и детей с проблемной <br /> речью со всеми возможными вариантами трудностей <br /> речи: алалия, дислалия, ОНР, дизартрия, ринолалия,<br /> брадилалия, тахилалия, спотыкание, заикание, <br /> дислексия и другие</p>
            <Button type="default" className='w-[150px] h-[40px] dark:text-[white] border-solid border-[blue] m-[10px]'>Подробнее</Button>
          </div>
        </div>

      </section>


      {/* section3 */}
      <section className='bg-[#E9EBF7] dark:bg-[black] p-[2%]'>
        <div className='m-[5%]'>
          <h1 className='text-[50px] font-bold dark:text-[white]'>Модули для детей</h1>

          <div className='md:flex'>

            <div>
              <img src='src/assets/22.jpg' />
              <p className='text-[20px] font-bold m-[10px] dark:text-[white]'>Формируем правильную речь</p>
            </div>
            <div>
              <img src='src/assets/33.jpg' />
              <p className='text-[20px] font-bold m-[10px] dark:text-[white]'>Коррекция речи</p>
            </div>
            <div>
              <img src='src/assets/33.jpg' />
              <p className='text-[20px] font-bold m-[10px] dark:text-[white]'>Открытие потенциала Вашего ребенка</p>
            </div>
          </div>
        </div>

        <div className='hh h-[40vh]  flex flex-col justify-center items-center mb-[-150px]'>
          <h1 className="md:text-[40px] text-center text-[white] font-bold">Вступите в white-лист, и вы получите 4 бесплатных
            занятия в числе первых пользователей бесплатно!</h1>

          <Button type="primary" href="https://ant.design/index-cn" className='bg-[#FF00D6] m-[10px] flex items-center justify-center mob:w-[90%]  md:w-[160px]  h-[50px] text-[18px]'>
            Записаться</Button>

        </div>

      </section>



      {/* section4 */}
      <section className=" flex flex-col justify-center items-center h-[100vh]">
        <div className=" md:flex">
          <h1 className="text-[30px] font-bold mr-[50px] dark:text-[white]">Немного наглядности</h1>
          <p className="dark:text-[white]">Посмотрите 3-минутное видео, <br /> чтобы лучше понять как это работает</p>
        </div>
        <img src="src/assets/55.jpg" />
      </section>



      {/* section5 */}
      <section>

        <div className="m-[4%]">
          <div className="flex justify-center m-[2%]">
            <h1 className="md:text-[30px] font-bold md:w-[60%] dark:text-[white]">Исследование показало, что каждый 4 ребёнок в возрасте от 3 до 12 лет имеет
              проблемы в речи, влияющие на его будущее</h1>
          </div>
          {/* components */}
          <div >

            <div className="md:flex justify-around">
              <Card1 img={'src/assets/Group 60.png'} title={'Стоимость'} txt={'Логопедия стоит дорого, и цена вполне оправдана. В нашем случае -помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации'} innertxt={'Подробнее о преимуществах'}></Card1>
              <Card1 img={'src/assets/Group 59.png'} title={'Системность в развитии'} txt={'Логопедия стоит дорого, и цена вполне оправдана. В нашем случае -помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации'} innertxt={'Подробнее о преимуществах'}></Card1>
            </div>

            <div className="md:flex justify-around mt-[40px]">
              <Card1 img={'src/assets/Group 61 (1).png'} title={'Удобное время'} txt={'Логопедия стоит дорого, и цена вполне оправдана. В нашем случае -помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации'} innertxt={'Подробнее о преимуществах'}></Card1>
              <Card1 img={'src/assets/Group 62.png'} title={'Дети учат детей'} txt={'Логопедия стоит дорого, и цена вполне оправдана. В нашем случае -помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации'} innertxt={'Подробнее о преимуществах'}></Card1>
            </div>
          </div>
        </div>
      </section>


      {/* footer */}
      <footer>

        <div className="card_footer">
          <h1>Хотите быть первыми? Запишитесь!</h1>

          <div className="flex">
            <Button type="primary" href="https://ant.design/index-cn" className='bg-[#FF00D6] m-[10px] flex items-center justify-center mob:w-[90%]  md:w-[160px]  h-[50px] text-[18px]'>
              Вступить
            </Button>
            <p>Мы открыли возможность для новых клиентов попробовать сервис в
              течение месяца бесплатно. Вам стоит просто оставить свой email в
              указанной форме. Мы обещаем — никакой рекламы и спама, только письмо по существу открытия сервиса</p>
          </div>
        </div>

        <div>
          <InstagramOutlined />
          <FacebookOutlined />
          <YoutubeOutlined />
        </div>


      </footer>


    </div>


  )
}
export default App