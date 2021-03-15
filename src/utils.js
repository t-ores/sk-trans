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
    //console.log(content)
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
//ABOUT
export function about_s_content(val_right, val_left) {
    let toStr = key => `<li>${val_left.ul[key]}</li>`
    let socials = key => `<li><a href="${val_left.socials[key]}" target="_blank"><i class="fab fas fa fa-${key}"></i></a></li>`
    let about_p = key => `<p>${val_right.p[key]}</p>`
    return `
<div class="section_content">
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h3>${val_right.h3}</h3>
                ${Object.keys(val_right.p).map(about_p).join(' ')}
            </div>
            <div class="col-sm">
                <h2 class="personal_header">${val_left.h2}</h2>
                <ul>
                    ${Object.keys(val_left.ul).map(toStr).join(' ')}
                </ul>
                <div class="social_wrap">
                    <ul>
                        ${Object.keys(val_left.socials).map(socials).join(' ')}
                        <!--<li><a href="#" target="_blank"><i class="lardi-trans-point"></i></a></li>-->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`
}
//ABOUT


//PORTFOLIO
export function portf_items(content){
    const toStr = key => `
                <div class="mix col-md-12 col-sm-12 col-xs-12 ${content[key].category}">

                    <div class="p_block_inf">
                        <img src="${content[key].img}" alt="${content[key].h3}" />
                    </div>
                    
                    <div class="port_item_cont">
                        <h3>${content[key].h3}</h3>
                        <p>${content[key].p}</p>
                        <a href="#" class="popup_content">Більше</a>
                    </div>
                    <div class="mfp-hide">
                        <div class="podrt_descr">
                            <div class="modal-box-content">
                                <button class="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                                <h3>${content[key].h3}</h3>
                                <p>${content[key].desc}</p>
                                <img src="${content[key].img}" alt="${content[key].h3}" />
                            </div>
                        </div>
                    </div>
                </div>`
    return Object.keys(content).map(toStr).join(' ')
}

export function portfolio_s_content(content, filters){
    const toStr = key => `<li class="filter" data-filter="${key}">${filters[key]}</li>`

    return `
<div class="section_content">
    <div class="container-fluid">
        <div class="row">
            <div class="filter_div control">
                <ul>
                    <li class="filter active" data-filter=".category-0">Вантажоперевезення</li>
                    ${Object.keys(filters).map(toStr).join(' ')}
                </ul>
            </div>
            <div id="portfolio_grid">
                ${portf_items(content)}
            </div>
        </div>
    </div>
</div>`
}
//PORTFOLIO


//СONTACTS
export function contacts_s_content(content) {
    return `
<div class="section_content">
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="contact_box">
                <div class="hidden contacts_icon icon-basic-book-pencil"></div>
                    <div class="contacts_icon icon-basic-geolocalize-05"></div>
                    <h3>Адреса:</h3>
                    <p>${content.address}</p>
                </div>
                <div class="contact_box">
                    <div class="contacts_icon icon-basic-smartphone"></div>
                    <h3>Телефон:</h3>
                    <p>${content.phone}</p>
                </div>
                <div class="contact_box">
                    <div class="contacts_icon icon-basic-webpage-img-txt"></div>
                    <h3>Веб-сайт:</h3>
                    <p>${content.website}</p>
                </div>
            </div>
            
            <div class="col-sm">
                <form action="https://sk-trans.bitrix24.ua/rest/1/em9xr1vneq18go42/" class="main_form" novalidate="" target="_blank" method="post" id="my-form">
                    <label class="form-group">
                        <span class="color_element">*</span> Ваше Ім'я:
                        <input type="text" name="name" placeholder="Ваше Ім'я" data-validation-required-message="Ви не ввели Імя" required="" aria-invalid="false">
                        <span class="help-block text-danger"></span>
                    </label>
                    <label class="form-group">
                        <span class="color_element">*</span> Ваш E-mail:
                        <input type="email" name="email" placeholder="Ваш E-mail" data-validation-required-message="Не корректно введений E-mail" required="">
                        <span class="help-block text-danger"></span>
                    </label>
                    <label class="form-group">
                        <span class="color_element">*</span> Ваш номер телефону:
                        <input type="text" name="phone" placeholder="Ваш номер телефону" data-validation-required-message="Ви не ввели нічого" required=""></textarea>
                        <span class="help-block text-danger"></span>
                    </label>
                    <button>Відправити</button>
                </form>
            </div>
            
        </div>
    </div>
</div>`
}
//СONTACTS

export function footer_s_content(content) {
    let socials = key => `<li><a href="${content.socials[key]}" target="_blank"><i class="fab fas fa fa-${key}"></i></a></li>`
    return `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    &copy; ${content.copyright}
                    <div class="social_wrap">
                        <ul>
                            ${Object.keys(content.socials).map(socials).join(' ')}
                            <!--<li><a href="#" target="_blank"><i class="lardi-trans-point"></i></a></li>-->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}

//T-ORES ADD FUNCTIONS END
