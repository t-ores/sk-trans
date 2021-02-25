import logo from './assets/img/logo.png'
import background from './assets/img/bg.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock, TopMenuBlock, HeaderBlock, fluid} from './classes/blocks'

const text = 'loremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtext'

export const model = [
  // new fluid('test fluid',{
  //   styles:{
  //     position: 'absolute',
  //     width: '100%',
  //     height: '300px',
  //     background:'green'
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
  //headerBlock ...('SK-Trans-logo', {...
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
          width: '70px',
          height: 'auto',
          'padding': '10px'
        },
        bg: background
      }),
  //headerBlock

// MENU
    new TopMenuBlock([
        'About',
        'Menu 2',
        'Menu 3'
    ]),
// MENU

  new TitleBlock('SK-Trans', {
    tag: 'h1',
    styles: {
      //background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'black',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new TitleBlock('Міжрегіональні вантажні перевезення', {
    tag: 'h4',
    styles: {
      //background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'black',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),

  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: {
      //background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: 'black',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]