'use strict';
const title = document.querySelector('.headerTitle');
const text = document.querySelector('.headerProfession');


const writingName = (name) => {
    const arrayFromName = name.split('');
    let i = 0;
    const printName = setInterval(function () {
        title.innerHTML += arrayFromName[i];
        i++;

        if (i === arrayFromName.length) {
            clearInterval(printName);
        }

    }, 150);
   
   
};

 const writingProfession = (profession) => {
        const arrayFromProfession = profession.split('');
        let z = 0;
        const printProfession = setInterval(function () {
            text.innerHTML += arrayFromProfession[z];
            z++;
            if (z === arrayFromProfession.length) {
                clearInterval(printProfession)
            }
        }, 150)
    };


writingName('Ana Marcos Estévez');
setTimeout(function(){
    writingProfession('Desarrolladora Frontend')
}, 3000)

