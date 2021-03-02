import {
  c_fluid,
  container,
  col,
  css,
  row,
  topmenu,
  toggle_mnu,
  a,
  ul_li,
  logo,
  div,
  top_wrapper,
  div_c,
  s_header,
  s_content,
  portfolio,
  filter_div
} from '../utils'

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
        ${c_fluid(logo(this.value, logoS) + toggle_mnu())}${top_wrapper(h1, p)}
    </${tag}>`
  }
}
//HEDER BLOCK

//ABOUT BLOCK
export class AboutBlock extends BlockEXT {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'div', h2, p, id, classes} = this.options
    const cols = this.value.map(col).join('')
    const result = row(cols, css(this.options.styles))
    return `
            <${tag} id="${id}" class="s_${id} ${classes}">
                ${s_header(h2, p)} ${s_content(result)}
            </${tag}>`
  }
}
//ABOUT BLOCK

//PORTFOLIO BLOCK
export class PortfolioBlock extends BlockEXT {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'div', h2, p, id, classes} = this.options
    const filters = this.options.filters
    //console.log(filters)
    // const cols = this.value.map(col).join(' ')
    // const result = row(cols, '')
    let result = this.value
    return `
            <${tag} id="${id}" class="s_${id} ${classes}">
                ${s_header(h2, p)} 
                ${portfolio(result, filters)}
            </${tag}>`
  }
}
//PORTFOLIO BLOCK

//T-ORES ADD FUNCTIONS END
