import image from './assets/img/image.PNG'
import {Block} from './classes/blocks'

export const model = [
    new Block('title', 'Web-Site Constructor',{
        tag: 'h2',
        styles: {
            width: '100%',
            color: 'black',
            padding: '1.5rem',
            'text-align': 'center',
            'box-shadow': 'inset -1px 0 0 rgba(0, 0, 0, .1)'
        }
    }),

    {type: 'image', value: image, 
    options:{
        styles: {
            width: '100%',
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            'max-width': '500px',
            height: 'auto'
        },
        alt: 'Это картинка'}
    },
    

    {type: 'text', value: 'Hello MFK TEXT!', options:{
            styles: {
                width: '100%',
                //background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold',
                'text-align': 'center'
            }
        }
    },

    {type: 'columns', value: [
            '11111111',
            '22222222',
            '33333333'
        ],
    options: {
        styles: {
            width: '100%',
            //background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            //color: '#fff',
            'font-weight': 'bold',
            'text-align': 'center'
          }
        }
    }
]