import logo from './assets/img/logo-light.png'
import {TopMenuBlock, HeaderBlock, AboutBlock, PortfolioBlock} from './classes/blocksExtended'

export const model = [
// MENU
    new TopMenuBlock([
      'About',
      'Portfolio',
      'Contacts'
    ]),
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
        p:'Міжрегіональні вантажні перевезення'
      }),
//HEADER

// ABOUT
    new AboutBlock({
        about_right:{
            h3: 'Немного о себе',
            p:[
                'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
                'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
                'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
                ],
            },
        about_left:{
            h3:'Персональная информация',
            h2:'Качинський Георгiй Вiталiйович',
            ul:{
                li_head:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
                birth:'День рождения: 3 июня 1988 года',
                phone:'Номер телефона: +7 999 999 99 99',
                email:'E-mail: <a href="mailto:youmail@mail.ru">youmail@mail.ru</a>',
                website:'Веб-сайт: <a href="//webdesign-master.ru" target="_blank">sk-trans.com.ua</a>'
                },
            socials:{
                'twitter':'https://twitter.com/',
                'facebook':'https://www.facebook.com/',
                'vk':'http://vk.com/',
                'github':'https://github.com/'
                }
            }
        }
        , {
        tag: 'section',
        id: 'about',
        classes: 'bg_light',
        h2:'Про компанію',
        p:'SK-Trans',

    }),
//ABOUT

// PORTFOLIO
    new PortfolioBlock(
{
        item1:{
            category:'category-1',
            img:'./assets/img/portfolio-images/1.jpg',
            h3:'Заголовок послуги 1',
            p:'Опис послуги',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, dignissimos quo. Dolore, omnis totam quibusdam voluptatibus cum, nulla dolores sunt iste? Sunt nam illum, animi magni veniam adipisci non.'
        },
        item2:{
            category:'category-2',
            img:'./assets/img/portfolio-images/2.jpg',
            h3:'Заголовок послуги 2',
            p:'Опис послуги',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, dignissimos quo. Dolore, omnis totam quibusdam voluptatibus cum, nulla dolores sunt iste? Sunt nam illum, animi magni veniam adipisci non.'
        },
        item3:{
            category:'category-1',
            img:'./assets/img/portfolio-images/3.jpg',
            h3:'Заголовок послуги 3',
            p:'Опис послуги',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, dignissimos quo. Dolore, omnis totam quibusdam voluptatibus cum, nulla dolores sunt iste? Sunt nam illum, animi magni veniam adipisci non.'
        }
},
{
        tag: 'section',
        id: 'portfolio',
        classes: 'bg_dark',
        h2:'Компетенції',
        p:'Наші послуги',
        filters:{
            '.category-1':'Послуга 1',
            '.category-2':'Послуга 2'
        }
}),
//PORTFOLIO



//CONTACTS
new AboutBlock({
        about_left:{
            h3:'Персональная информация',
            h2:'Качинський Георгiй Вiталiйович',
            ul:{
                li_head:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
                birth:'День рождения: 3 июня 1988 года',
                phone:'Номер телефона: +7 999 999 99 99',
                email:'E-mail: <a href="mailto:youmail@mail.ru">youmail@mail.ru</a>',
                website:'Веб-сайт: <a href="//webdesign-master.ru" target="_blank">sk-trans.com.ua</a>'
            },
            socials:{
                'twitter':'https://twitter.com/',
                'facebook':'https://www.facebook.com/',
                'vk':'http://vk.com/',
                'github':'https://github.com/'
            }
        }
    }
    , {
        tag: 'section',
        id: 'about',
        classes: 'bg_light',
        h2:'Про компанію',
        p:'SK-Trans',

    }),
//CONTACTS

]