import logo from './assets/img/logo-light.png'
import p_img_1 from './assets/img/portfolio-images/12.png'
import p_img_2 from './assets/img/portfolio-images/3.png'
import {
    TopMenuBlock,
    HeaderBlock,
    AboutBlock,
    PortfolioBlock,
    TestimonialsBloc,
    ContactBlock,
    FooterBlock
} from './classes/blocksExtended'

export const model = [
// MENU
    new TopMenuBlock(
    {
      'about':'Про нас',
      'portfolio':'Наші послуги',
      'resume':'Відгуки',
      'contacts':'Контакти'
    }),

// MENU

//HEADER
  new HeaderBlock(
      logo,
      {
        tag: 'header',
        styles: {
          position:'relative',
          'min-height': '480px',
          'padding-top': '20px'
        },
        logoStyles: {
          width: '100px',
          height: 'auto',
          'padding': '0px 10px',
          margin: '0px 0px 0px 5vw',
        },
        h1:'SK-Trans',
        p:'Перевезення вантажів по Україні'
      }),
//HEADER

// ABOUT
    new AboutBlock({
        about_right:{
            h3: 'Чому перевезення вантажів варто довірити компанії SK-Trans Україна',
            p:[
                '',
                "SK-Trans - це професійна і злагоджена команда з величезним досвідом роботи в сфері логістики. "+ 
                "Наші логісти завжди на звязку для оперативного вирішення будь-яких питань. "+
                "У будь-який момент можна отримати детальну інформацію про те, де зараз перебуває вантаж. "+
                "Ми розрахуємо оптимальний і найбільш безпечний маршрут, щоб будь-який вантаж дістався до місця призначення вчасно, "+
                "а також допоможемо оформити будь-яку необхідну документацію."
                ],
            },
        about_left:{
            h3: '',
            h2:'Наші послуги',
            ul:{
                li_head:"Основні напрямок роботи SK-Trans Україна:",
                birth:'- габаритні і негабаритні вантажі;',
                phone:'- збірні вантажі вагою від 100 кг до 22 тонн та інші.',
                email:'- надаємо експедиційні послуги',
                //website:'Cайт: <a href="https://sk-trans-ua.web.app/" target="_blank">sk-trans-ua.web.app</a>'
                },
            socials:{
                'paper-plane':'https://t.me/sk_trans',
                //'facebook':'#',
                'instagram':'https://www.instagram.com/sk_trans.com.ua/',
                'truck':'https://lardi-trans.ua/user/16751245600/'
                }
            }
        }
        , {
        tag: 'section',
        id: 'about',
        classes: 'bg_light',
        h2:'Про компанію',
        p:'SK-Trans Україна',

    }),
//ABOUT

// PORTFOLIO
    new PortfolioBlock(
[
        {
            category:'p_item category-0',
            img:p_img_1,
            h3:'Перевезення вантажів',
            p:'Міжміські вантажоперевезення. Організуємо домашній переїзд або швидку доставку вантажу по всій території України.',
            desc:'<b>Як відбувається процес перевезення:</b></br>' +
                'З логістом потрібно узгодити час завантаження, розвантаження, кількість вантажу іспособ оплати. Після завантаження автомобіль відразу виїжджає за маршрутом, Ви тримаєте зв"язок з водієм і з логістом.</br>' +
                '<b>Розрахунок вартості, резерв машини:</b><br>' +
                'На основі обсягу вантажу, логіст підбере вантажний автомобіль, озвучить вартість і час доставки. Оптимально за 1-2 дні до запланованого перевезення підтвердити замовлення, але ми готові виконати роботу і "з сьогодні на сьогодні" (машин багато). Для резерву автомобіля логіст може виставити рахунок на часткову передплату. \n' +
                'У разі відмови від перевезення з вини замовника, передоплата за бронювання авто не повертається.'
        },
        {
            category:'p_item category-1',
            img:p_img_2,
            h3:'Довантаження',
            p:'Ми беремо кілька вантажів по одному маршруту, таким чином робимо перевезення доступнішими. У процесі транспортування повністю відповідаємо за цілісність і збереження вантажу. Для отримання вартості Вашої доставки - телефонуйте або пишіть нам!',
            desc:'<b>Попутні вантажоперевезення</b></br>' +
            'Попутні вантажоперевезення по Україні. У нас Ви можете замовити доставку недорого на попутну машину. За рахунок великої кількості перевезень, вантажовідправників ми сформували регулярну мережу доставок по Україні. Часто машина повертається порожній в точку завантаження або робить переїзд під контрактний вантаж. Таким чином ціна істотно нижче. Умови, ціна і оплата обговорюється індивідуально.</br>' +
            '<b>Вантажоперевезення довантаженням</b></br>' +
            'Вантажоперевезення догрузом по Україні. Якщо Вам потрібно перевезти вантаж невеликого обсягу, розміру або ваги, а наймати для цього окрему машину немає можливостей або невигідно, то відправити догрузом буде вигідним рішенням. Збірна доставка вантажів компанією «SK-Trans» проводиться по всій Україні. Для отримання вартості достатньо зателефонувати за номером.</br>' +
            '</br>' +
            '<b>Ціна на довантаження формується з декількох чинників:</b></br>' +
            '- маршрут перевезення</br>' +
            '- вільне місце для Вашого вантажу</br>' +
            '- параметри вантажу (вага і обсяг)</br>'
        },
        // {
        //     category:'p_item category-2',
        //     img:p_img_3,
        //     h3:'Заголовок послуги 2',
        //     p:'Опис послуги',
        //     desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, dignissimos quo. Dolore, omnis totam quibusdam voluptatibus cum, nulla dolores sunt iste? Sunt nam illum, animi magni veniam adipisci non.'
        // }
],
{
        tag: 'section',
        id: 'portfolio',
        classes: 'bg_light',
        h2:'Компетенції',
        p:'Наші послуги',
        filters:{
            '.category-1':'Довантаження',
            //'.category-2':'Послуга 2'
        }
}),
//PORTFOLIO
  
//TESTIMONIALS
new TestimonialsBloc(
[
    {
        img:'https://cdn1.lardi-trans.com/upload/gallery/7c/b7c4/58503116e4b099fcaf8153f1_340x340.jpeg',
        strong:'АЛЬТТРАНССЕРВИС',
        who:'ООО Україна, Дніпро',
        p:'Благодарим за выполненную работу. Надёжный и ответственный перевозчик. Всем рекомендуем к сотрудничеству!',
        direction:'left'
    },
        {
        img:'https://cdn1.lardi-trans.com/upload/gallery/4da/aed6/5841b796e4b099fcaf811c8e_340x340.png',
        strong:'КРАВЧУК ПАВЕЛ АЛЕКСАНДРОВИЧ',
        who:'ФЛП Україна, Смела',
        p:'Спасибо перевозчику за отличную работу!',
        direction:'right'
    },
    {
        img:'https://cdn1.lardi-trans.com/upload/gallery/db/454f/551e50cce4b016890ca31047_340x340.jpeg',
        strong:'Він Єкспо',
        who:'ПП Україна, Вінниця',
        p:'Дякую,перевізнику, за працю! Рекомендую всім замовникам, як надійного перевізника! Успіхів вам у роботі!Сподіваюсь на співпрацю, Юрій.',
        direction:'left'
    },
        {
        img:'https://cdn1.lardi-trans.com/upload/gallery/154/76d0/55156695e4b05e556807d4bb_340x340.jpeg',
        strong:'КРАВЧУК ПАВЕЛ АЛЕКСАНДРОВИЧ',
        who:'ФЛП Україна, Вінниця',
        p:'Дякую за співпрацю. Відповідальний, порядний та надій перевізник. Успіху та процвітання, з повагою Альона Яремчук.',
        direction:'right'
    }
],
{
        tag: 'section',
        id: 'resume',
        classes: '',
        h2:'Відгуки',
        p:'Наші клієнти про нас'
}),
//TESTIMONIALS

//CONTACTS
new ContactBlock({
        address:'м.Луцьк, вул.Запорізька, 37',
        phone:'+380 97 919 59 15'
        //website:'<a href="https://sk-trans-ua.web.app/" target="_blank">sk-trans-ua.web.app</a>'
    },
    {
        tag: 'section',
        id: 'contacts',
        classes: 'bg_light',
        h2:'Контакти',
        p:'Звяжіться з нами, або залиште свої данні і ми Вам перетелефонуємо',

    }),
//CONTACTS

//FOOTER
new FooterBlock({
    copyright: '2021 SK-Trans',
    socials:{
        'paper-plane':'https://t.me/sk_trans',
        //'facebook':'#',
        'instagram':'https://www.instagram.com/sk_trans.com.ua/',
        'truck':'https://lardi-trans.ua/user/16751245600/'
    }
},
    {
        tag: 'footer',
        id: 'footer',
        classes: 'bg_dark',
    })
//FOOTER
]