import {container, col, css, row, topmenu, toggle_mnu, a, ul_li} from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

//T-ORES ADD FUNCTIONS
export class TopMenuBlock extends Block {
  constructor(value, options='') {
    super(value, options)
  }
  toHTML() {
    const html = ul_li(this.value.map(a).join('</li><li>'))
    return topmenu(html, css(this.options.styles))
  }
}

//HEDER BLOCK
export class HeaderBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'div', styles} = this.options
    return `<${tag} class="main_head" data-parallax="scroll" data-image-src="assets/img/bg.jpg" data-z-index="1" styles="${css(styles)}">${container(row(col(this.value + toggle_mnu())))}</${tag}>`
  }
}
// HEDER BLOCK
//T-ORES ADD FUNCTIONS END
