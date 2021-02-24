export function container(content, styles = '') {
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
    // console.log('cont',content)
    return `<nav class="top_mnu" style="${styles}">${content}</nav>`
}
// MENU
//T-ORES ADD FUNCTIONS END
