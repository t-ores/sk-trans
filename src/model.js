import logo from './assets/img/logo-light.png'
import {TopMenuBlock, HeaderBlock, AboutBlock, PortfolioBlock} from './classes/blocksExtended'

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

const portfolio_controls = '' +
        '<div class="mix col-md-3 col-sm-6 col-xs-12 portfolio_item category-1">' +
            '<img src="./assets/img/portfolio-images/1.jpg" alt="Alt" />' +
                '<div class="port_item_cont">' +
                    '<h3>Заголовок работы</h3>' +
                    '<p>Описание работы</p>' +
                    '<a href="#" class="popup_content">Посмотреть</a>' +
                '</div>' +
                '<div class="hidden">' +
                    '<div class="podrt_descr">' +
                        '<div class="modal-box-content">' +
                            '<button class="mfp-close" type="button" title="Закрыть (Esc)">×</button>' +
                            '<h3>Заголовок работы</h3>' +
                            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, dignissimos quo. Dolore, omnis totam quibusdam voluptatibus cum, nulla dolores sunt iste? Sunt nam illum, animi magni veniam adipisci non.</p>' +
                            '<img src="./assets/img/portfolio-images/1.jpg" alt="Alt" />' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'

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
    new AboutBlock([
        about_right,
        about_left
    ], {
        tag: 'section',
        id: 'about',
        classes: 'bg_light',
        h2:'Про компанію',
        p:'SK-Trans',
    }),
//ABOUT

// PORTFOLIO
    new PortfolioBlock([
        portfolio_controls
    ], {
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

]