import {c_fluid, container, col, css, row, topmenu, toggle_mnu, a, ul_li, logo, div} from '../utils'

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
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
  }
}
//T-ORES ADD FUNCTIONS
//TEST
export class fluid extends Block{
  constructor(value, options=''){super(value, options)}
  toHTML() {
    const html = this.value
    return c_fluid(html, css(this.options.styles))
  }
}
//TEST

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
    const {logoStyles:logoS, tag = 'div',bg, styles} = this.options
    return `
    <${tag} class="main_head" data-parallax="scroll" data-image-src="${bg}" data-z-index="1" styles="${css(styles)}">
        ${container(logo(this.value, logoS) + toggle_mnu())}
    </${tag}>`
  }
}
// HEDER BLOCK

//T-ORES ADD FUNCTIONS END
