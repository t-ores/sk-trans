import logo from './assets/img/logo-light.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
import {TopMenuBlock, HeaderBlock, TopWrapper, AboutBlock, ColumnsBlockEXT} from './classes/blocksExtended'

const text = 'SIMPLE_DUMMY_TEXT_BLOCK'
const about_right = '<h3>Немного о себе</h3><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>'
const about_left = '<h3>Персональная информация</h3>' +
    '<h2 class="personal_header">Качинський Георгiй Вiталiйович</h2>' +
    '<ul>' +
    '<li>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</li>' +
    '<li>День рождения: 3 июня 1988 года</li>' +
    '<li>Номер телефона: +7 999 999 99 99</li>' +
    '<li>E-mail: <a href="mailto:youmail@mail.ru">youmail@mail.ru</a></li>' +
    '<li>Веб-сайт: <a href="//webdesign-master.ru" target="_blank">sk-trans.com.ua</a></li>' +
    '</ul>' +
    '<div class="social_wrap">' +
    '<ul>' +
    '<li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>' +
    '<li><a href="#" target="_blank"><i class="fa fa-vk"></i></a></li>' +
    '<li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>' +
    '<li><a href="#" target="_blank"><i class="fa fa-github"></i></a></li>' +
    '</ul>' +
    '</div>'

export const model = [
  // MENU
    new TopMenuBlock([
      'About',
      'Menu 2',
      'Menu 3'
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
          //'z-index': '50'
        },
        h1:'SK-Trans',
        p:'Міжрегіональні вантажні перевезення'
      }),
  //HEADER

    // ABOUT
    new AboutBlock([
        about_right,
        '',
        about_left
        //'Про компанію Про компанію Про компанію Про компанію Про компанію Про компанію Про компанію',
        //'SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans SK-Trans '
    ], {
        // styles: {
        //     'font-size': '2rem',
        //     'text-align': 'center',
        //     padding: '2rem',
        //     color: 'black',
        // },
        tag: 'section',
        id: 'about',
        classes: 'bg_light',
        h2:'Про компанію',
        p:'SK-Trans'
    }),
    //ABOUT

  // new TitleBlock('SK-Trans', {
  //   tag: 'h1',
  //   styles: {
  //     color: 'black',
  //     padding: '1.5rem',
  //     'text-align': 'center',
  //     'padding-bottom': '0vh'
  //   }
  // }),
  // new TitleBlock('Про компанію', {
  //   tag: 'h4',
  //   styles: {
  //     color: 'black',
  //     padding: '0',
  //     'text-align': 'center',
  //     'min-height': '800px'
  //   }
  // }),

  // new ColumnsBlock([
  //   'Приложение на чистом JavaScript, без использования библиотек',
  //   'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  // ], {
  //   styles: {
  //     'font-size': '2rem',
  //     'text-align': 'center',
  //     padding: '2rem',
  //     color: 'black',
  //     'font-weight': 'bold'
  //   }
  // }),
  // new ColumnsBlock([
  //   'Приложение на чистом JavaScript, без использования библиотек',
  //   'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
  //   'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  // ], {
  //   styles: {
  //     padding: '2rem',
  //     color: 'black',
  //     'font-weight': 'bold'
  //   }
  // }),
  // new TextBlock(text, {
  //   styles: {
  //     padding: '1rem',
  //     'font-weight': 'bold'
  //   }
  // }),

  // new ImageBlock(image, {
  //   styles: {
  //     padding: '2rem 0',
  //     display: 'flex',
  //     'justify-content': 'center'
  //   },
  //   imageStyles: {
  //     width: '500px',
  //     height: 'auto'
  //   },
  //   alt: 'Это картинка'
  // }),

]