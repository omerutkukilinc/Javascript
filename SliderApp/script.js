var models = [
    {
        name : 'bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion',
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active',
    },
    {
        name : 'honda',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance',
    },

]

var index = 0;
var slaytCount = models.length;
var settings = {
    duration : '1000',
    random : true,
};
var interval;
Slide(settings);

document.querySelectorAll('.arrows').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrows').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        Slide(settings);
    })
})
document.querySelector('#left-arrow').addEventListener("click", function(){
    index--;
    ShowSlide(index);
    console.log(index);
});
document.querySelector('#right-arrow').addEventListener("click", function(){
    index++;
    ShowSlide(index);
});

function Slide(settings){
    let prev;
    interval=setInterval(function(){
        if (settings.random) {
            do{
                i=Math.floor(Math.random()*slaytCount);
            }while(i==prev)
            prev=i;
            console.log(i)
        }else {
            var i = index;
        }
    ShowSlide(i);
    }, settings.duration);
}
function ShowSlide(i) {
    index = i;
        if(i<0){
            index = slaytCount-1;
        }
        if(i > slaytCount){
            index = 0;
        }
        console.log(index)
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}
