import { row, col} from './utils'


function title(block) {
    // return `
    //         <div class="row">
    //             <div class="col-sm">
    //                 <h1>${block.value}</h1>
    //             </div>
    //         </div>
    //         `
    return row(col(`<h1>${block.value}</h1>`))
}

function text(block) {
    // return `
    //         <div class="row">
    //             <div class="col-sm">
    //                     <p>${block.value}</p>
    //             </div>
    //         </div>
    //         `
    return row(col(`<p>${block.value}</p>`))

}

function columns(block) {
    // let html = ''
    // block.value.forEach((item => {
    //     html += `<div class="col-sm">
    //                 ${item}
    //             </div>
    //             `
    // }))
    // block.value.map(item => `<div class="col-sm">`)
    // return `
    //        <div class="row">
    //             ${html}
    //         </div>
    //         `
    const html = block.value.map(col).join('')
    return row(html)
}

function image(block) {
    // return `
    //         <div class="row">
    //             <img src=`${block.value}` />
    //         </div>
    //         `
    return row(`<img src="${block.value}" />`)
}

export const templates = {
    title,
    text,
    image,
    columns
}