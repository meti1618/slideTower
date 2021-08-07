

const title = document.getElementById('title_bg');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const link = document.getElementById('link_bg')
const bgNeme = [
    'milad',
    'eiffel',
    'khalifa',
    'shanghai'
];
const titles = [
    'Milad Tower / Tehran',
    'Eiffel Tower / Paris',
    'Khalifa Tower / Dubai',
    'Shanghai Tower / shanghai'
];

let index = 0 ;
document.body.classList.add(bgNeme[index])
document.body.classList.add('milad-mobile')


window.setInterval(slideshow,10000)

function slideshow() {
    if (index < bgNeme.length-1) {
        index++ ;
        funcChanger()
        return index ;
    }else{
        return index = -1 ;
    }
}

function next(){
    if (index < bgNeme.length-1) {
        index++ ;
        funcChanger()
        if (index === 0) {
            document.body.classList.add('milad-mobile')
        }
        return index ;
    }else{
        return index = -1 ;
    }

}
function back (){
    if (index > 0 ) {
        index-- ;
        funcChanger()
        console.log(index)
        if (index === 0) {
            document.body.classList.add('milad-mobile')
        }
        return index ;
    }else{
        return index = 4 ;
    }


}



function funcChanger(){

    document.body.removeAttribute("class");
    document.body.classList.add(bgNeme[index]);
    link.setAttribute('href',`https://en.m.wikipedia.org/wiki/${bgNeme[index]}_Tower`)
    title.innerText = titles[index];

}

