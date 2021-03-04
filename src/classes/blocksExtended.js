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
  filter_div,
  portfolio_s_content,
  about_s_content,
  contacts_s_content,
  footer_s_content
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
    const val_right = this.value.about_right
    const val_left = this.value.about_left
    return `
            <${tag} id="${id}" class="s_${id} ${classes}">
                ${s_header(h2, p)} 
                ${about_s_content(val_right, val_left)}
            </${tag}>`
  }
}
//ABOUT BLOCK

// PORTFOLIO BLOCK
export class PortfolioBlock extends BlockEXT {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'div', h2, p, id, classes} = this.options
    const filters = this.options.filters
    const content = this.value
    //console.log(content)
    return `
            <${tag} id="${id}" class="s_${id} ${classes}">
                ${s_header(h2, p)} 
                ${portfolio_s_content(content, filters)}
            </${tag}>`
  }
}
// PORTFOLIO BLOCK


//ABOUT BLOCK
export class ContactBlock extends BlockEXT {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'div', h2, p, id, classes} = this.options
    return `
            <${tag} id="${id}" class="s_${id} ${classes}">
                ${s_header(h2, p)} 
                ${contacts_s_content(this.value)}
            </${tag}>`
  }
}
//ABOUT BLOCK

//FOOTER
export class FooterBlock extends BlockEXT {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'div',id, classes} = this.options
    return `
            <${tag} id="${id}" class="main_${id} ${classes}">
                ${footer_s_content(this.value)}
            </${tag}>`
  }
}
//FOOTER


//T-ORES ADD FUNCTIONS END
