var quoteContent= document.getElementById('quoteContent')
var quoteAuthor = document.getElementById('quoteAuthor')
var btn = document.getElementById('btn')
var quote1={
    content:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author:"― Dr. Seuss"
}
var quote2={
    content:"“Be yourself; everyone else is already taken.”",
    author:"― Oscar Wilde"
}
var quote3={
    content:"“Be the change that you wish to see in the world.”",
    author:"― Mahatma Gandhi"
}
var quote4={
    content:"“So many books, so little time.”",
    author:"― Frank Zappa"
}
var quote5={
    content:"“You only live once, but if you do it right, once is enough.”",
    author:"― Mae West"
}
var quote6={
    content:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author:"― Albert Einstein"
}
var quote7={
    content:"“It is better to be hated for what you are than to be loved for what you are not.”",
    author:"― Andre Gide, Autumn Leaves"
}
var quote8={
    content:"“A friend is someone who knows all about you and still loves you.”",
    author:"― Elbert Hubbard"
}
var quote9={
    content:"“A room without books is like a body without a soul.”",
    author:"― Marcus Tullius Cicero"
}
var quote10={
    content:"“In three words I can sum up everything I've learned about life: it goes on.”",
    author:"― Robert Frost"
}
var quoteArray=[quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10]
var repeat=0

 btn.onclick=function display() {
    var index = Math.trunc(Math.random()*10)
    if(index!=repeat){
    quoteContent.innerHTML=quoteArray[index].content;
    quoteAuthor.innerHTML=quoteArray[index].author}
    else{
        index= Math.trunc(Math.random()*10)
    }
     repeat =index;
}
