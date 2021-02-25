import logo from './assets/img/logo-light.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
import {TopMenuBlock, HeaderBlock, TopWrapper} from './classes/blocksExtended'

const text = 'loremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtext'

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
          'padding': '0'
        },
        h1:'SK-Trans',
        p:'Міжрегіональні вантажні перевезення'
      }),
  //HEADER

  new TitleBlock('SK-Trans', {
    tag: 'h1',
    styles: {
      color: 'black',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new TitleBlock('Про компанію', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0',
      'text-align': 'center'
    }
  }),

  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: {
      'font-size': '2rem',
      'text-align': 'center',
      padding: '2rem',
      color: 'black',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: {
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
  }),

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

]