export function container(content, styles = '') {
    return `<div class="container" style="${styles}">${row(col(content))}</div>`
}
export function l_container(content, styles = '') {
    return `<div class="container" style="${styles}">${content}</div>`
}

export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
export function a(content){
    return `<a href="#${content.replace(' ','_').toLowerCase()}">${content}</a>`
}
//FLUID TEST
export function c_fluid(content, styles = '', classes='') {
    return `<div class="container-fluid ${classes}" style="${styles}">${row(col(content))}</div>`
}
export function l_c_fluid(content, styles = '', classes='') {
    return `<div class="container-fluid ${classes}" style="${styles}">${content}</div>`
}
//FLUID TEST END
export function css(styles = {}){
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    return `
      <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
          <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
          <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
      <hr />
    `
  }
//T-ORES ADD FUNCTIONS
export function div(content, classes='', styles = '', id=''){
    return `<div id="${id}" class="${classes}" style="${styles}">${content}</div>`
}
export function div_c(classes='', content){
    return `<div class="${classes}">${content}</div>`
}

export function ul_li(content) {
    return `<ul><li>${content}</li></ul>`
}
// MENU
export function toggle_mnu() {
    return `<button class="toggle_mnu">
                <span class="sandwich">
                    <span class="sw-topper"></span>
                    <span class="sw-bottom"></span>
                    <span class="sw-footer"></span>
                </span>             
            </button>`
}

export function topmenu(content, styles = '') {
    return `<nav class="top_mnu" style="${styles}">${content}</nav>`
}
export function logo(content, styles) {
    const alt = 'SK-Trans Logo'
    return `<div class="logo_container"><img src="${content}" alt="${alt}" style="${css(styles)}"></div>`
}
export function top_wrapper(h1, p) {
    const top_wrapper_content = `<h1>${h1}</h1></br><p>${p}</p>`
    return div_c('top_wrapper', div_c('top_descr', div_c('top_centered', div_c('top_text', top_wrapper_content))))
}
// MENU

export function s_header(h2, p) {
    return `
            <div class="section_header">
                <h2>${h2}</h2>
                <div class="s_descr_wrap">
                    <div class="s_descr">${p}</div>
                </div>
            </div>`
}
export function s_content(content) {
    return `<div class="section_content">${l_container(content)}</div>`
}
// export function s_content(content) {
//     return `<div class="section_content">${l_c_fluid(content)}</div>`
// }
//T-ORES ADD FUNCTIONS END
