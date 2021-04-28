function launch(){
    new Vue({
        el: '#app',
        data: {
            'navList':['Home', 'Pages', 'Blog', 'Shop', 'Events', 'Elements'],
            'imgNavSlider':[
                            "img/rev-slider-main-home-img-02.png" , "img/rev-slider-main-home-img-03.jpg", "img/h1-rev-img-01.jpg"
                            ],
            'imgSectJason':["img/h1-img-01.jpg", "img/h1-img-02.jpg", "img/h1-img-03.jpg"],

            'imgEvents':[
                            {
                                img:"img/h1-img-09.jpg",
                                day:'07',
                                date:'Jan.2022',
                                title:'Melbourne Coaching',
                                when:'9:00 am - 5:00pm, Jan 7, 2022',
                                where:'Cambridge, MA 02138, USA'

                            },
                            {
                                img:"img/h1-img-08.jpg",
                                day:'11',
                                date:'Jan.2022',
                                title:'New York Coaching',
                                when:'9:00 am - 5:00pm, Jan 11, 2022',
                                where:'Cambridge, MA 02138, USA'
                            },
                            {
                                img:"img/h1-img-07.jpg",
                                day:'21',
                                date:'Jan.2022',
                                title:'London Coaching',
                                when:'9:00 am - 5:00pm, Jan 21, 2022',
                                where:'Cambridge, MA 02138, USA'

                            }
                              ],

            'active':'',
            'index':0,

            'newsCards':[
                                {
                                    img:"img/h1-blog-img-01.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'New Business Day',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  '
                                },
                                {
                                    img:"img/h1-blog-img-02.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'Boost Motivation',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  '
                                },
                                {
                                    img:"img/h1-blog-img-03.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'Next Investment',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  '
                                },
                                {
                                    img:"img/h1-blog-img-04.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'Team Bulding',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  '
                                },
                                
                            ]
            


                    },


                    created: function(){
                        this.increase()
                       
                    },
                        
                    

       // created: //function () {
                   // this.slidesLoop();
               // },
                
       
         
          
            
        

       methods:{
            prevSlide:function(){
                this.index--;
                if(this.index < 0){
                    this.index = (this.img.length - 1)
                }
        },
                    
            nextSlide:function(){
                this.index++;
               if(this.index >= this.imgNavSlider.length){
                   this.index = 0;
               }
            },
               
    
                slidesLoop: function() {
                    this.loop = setInterval(this.nextSlide, 3000)
    
                },
    
                stopSlidesLoop: function() {
    
                    clearInterval(this.loop);
                },

                showImgEvents:function(el) {

                    let index= this.imgEvents.indexOf(el);

                        this.active=index
                        console.log(this.active)
                },

                increase:function () {
                    let speed = 40;
                    let limit = parseInt(document.getElementById("value1").innerHTML, 10);
                    let limit2 = parseInt(document.getElementById("value2").innerHTML, 10);
                    let limit3 = parseInt(document.getElementById("value3").innerHTML, 10);
                    let limit4 = parseInt(document.getElementById("value4").innerHTML, 10);


                
                    for(let i = 0; i <= limit; i++) {
                        setTimeout(function () {
                            document.getElementById("value1").innerHTML = i + "%";
                        }, speed * i);
                    }

                    for(let i = 0; i <= limit2; i++) {
                        setTimeout(function () {
                            document.getElementById("value2").innerHTML = i + "%";
                        }, speed * i);
                    }

                    for(let i = 0; i <= limit3; i++) {
                        setTimeout(function () {
                            document.getElementById("value3").innerHTML = i + "%";
                        }, speed * i);
                    }

                    for(let i = 0; i <= limit4; i++) {
                        setTimeout(function () {
                            document.getElementById("value4").innerHTML = i + "%";
                        }, speed * i);
                    }
                }
                
              

               
            }
        })
    }




    
    
      

function init() {
    launch();






}
document.addEventListener('DOMContentLoaded', init);

