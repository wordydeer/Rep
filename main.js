//==============================================================================//
//                               KONWENTER CZASU                                //
//==============================================================================//
const timeStamp = {
    data : document.querySelector(".date"),
    btn : document.querySelector(".btn"),
    wynikTxt : document.querySelector(".wynik"),

    klik: function(){
        this.wynikTxt.innerHTML = this.data.valueAsNumber / 1000 / 60 / 60 / 24;
    },

    init: function(){
        this.btn.addEventListener("click", this.klik.bind(timeStamp))
    }
}

timeStamp.init();

const timeStamp2 = {
    data2 : document.querySelector(".date2"),
    godz : document.querySelector(".godz"),
    min : document.querySelector(".min"),
    sek2 : document.querySelector(".sek2"),
    wynikTxt3 : document.querySelector(".wynik3"),
    btn3 : document.querySelector(".btn3"),

    klik: function(){
        this.wynikTxt3.innerHTML = this.data2.valueAsNumber / 1000 + 
        this.godz.value * 3600 + this.min.value * 60 + this.sek2.value;
    },

    init: function(){
        this.btn3.addEventListener("click", this.klik.bind(timeStamp2))
    }
}

timeStamp2.init();


const reverseTimeStamp = {
    sek : document.querySelector(".sek"),
    btn2 : document.querySelector(".btn2"),
    wynikTxt2 : document.querySelector(".wynik2"),

    klik: function(){
        this.wynikTxt2.innerHTML = this.sek.value  / 60 / 60 / 24;
    },

    init: function(){
        this.btn2.addEventListener("click", this.klik.bind(reverseTimeStamp));
    }
}

reverseTimeStamp.init();


//==============================================================================//
//                       ZMIANA STYLÓW ZA POMOCĄ PRZYCISKU                      //
//==============================================================================//
const btnZmiana = document.querySelector(".btnZmiana");
const b = document.querySelector(".b");

btnZmiana.addEventListener('click', function(){
    b.className='item b2';
})