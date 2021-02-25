import {c_fluid, container, col, css, row, topmenu, toggle_mnu, a, ul_li, logo, div, top_wrapper} from '../utils'

class BlockEXT {
  constructor(value, options) {
    this.value = value
    this.options = options
  }
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

//T-ORES ADD FUNCTIONS
export class TopMenuBlock extends BlockEXT {
  constructor(value, options='') {
    super(value, options)
  }
  toHTML() {
    const html = ul_li(this.value.map(a).join('</li><li>'))
    return topmenu(html, css(this.options.styles))
  }
}

//HEDER BLOCK
export class HeaderBlock extends BlockEXT {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {logoStyles:logoS, tag = 'div', h1, p} = this.options
    return `
    <${tag} id="header" class="main_head">
        ${c_fluid(logo(this.value, logoS) + toggle_mnu())},${top_wrapper(h1,p)}
    </${tag}>`
  }
}
// HEDER BLOCK

//T-ORES ADD FUNCTIONS END
