

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


window.setInterval(function (){
    if (index > bgNeme.length-2) {
        index = 0 ;
        return  funcChanger(index) ,index

    }else{
        index++
        return  funcChanger(index) ,index

    }
},5000)


function next(){
    if (index > bgNeme.length-2) {
        index = 0 ;
        return  funcChanger(index) ,index

    }else{
        index++
        return  funcChanger(index) ,index

    }
}


function back (){
    if (index <= 0) {
        index = bgNeme.length-1
        return  funcChanger(index) ,index
    }else{
        index--
        return  funcChanger(index) ,index
    }
}



function funcChanger(i){

    document.body.removeAttribute("class");
    document.body.classList.add(bgNeme[i]);
    link.setAttribute('href',`https://en.m.wikipedia.org/wiki/${bgNeme[i]}_Tower`)
    title.innerText = titles[i];
    if (index === 0){
        document.body.classList.add('milad-mobile')
    }

}

