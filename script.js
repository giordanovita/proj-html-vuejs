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
            img:'',

            'newsCards':[
                                {
                                    img:"img/h1-blog-img-01.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'New Business Day',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  ',
                                    visibility:true
                                },
                                {
                                    img:"img/h1-blog-img-02.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'Boost Motivation',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  ',
                                    visibility:true
                                },
                                {
                                    img:"img/h1-blog-img-03.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'Next Investment',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  ',
                                    visibility:true
                                },
                                {
                                    img:"img/h1-blog-img-04.jpg",
                                    when:'May 5,2019',
                                    who:'Amanda Doe',
                                    title:'Team Bulding',
                                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla...  ',
                                    visibility:false
                                },
                                
                            ],

                    darkSlider:[
                        "img/h3-img-04.png" , "img/h3-img-07.png", "img/h3-img-08.png"
                        ],

                    footerColumnOne:[
                                        {
                                            title:'About',
                                            text:'We created Everlead to effectively become the stepping stone towards meeting all your goals & achieving business success.',
                                            icons:['<i class="fab fa-linkedin-in"></i>','<i class="fab fa-facebook-f"></i>','<i class="fab fa-twitter"></i>']
                                        }
                    ],


                    footerColumnTwo:[
                        {
                            title:'Twitter',
                            text:[
                                '#GDPR, or General Data Protection Regulation, is a regulation in the EU #law that means all businesses must protect… ',
                                        
                           'You want to make the best out of your #skills and share your expertise while helping others – plus gain some…'
                        
                    
                                ]
                        }
                    ],

                    footerColumnThree:[
                        {
                            title:'Important links',
                            links:['About me', 'About us', 'Language packs', 'Become a coach', 'Monthly events']
                        }
                    ],

                    footerColumnFour:[
                        {
                            title:'Contact me',
                            icons:['<i class="fas fa-map-marker-alt"></i>','<i class="fas fa-phone-alt"></i>','<i class="far fa-envelope"></i>'],

                            links:['457 BigBlue Street, NY 10013', '(315) 5512-2579', 'everlead@qodeinteractive.com']
                        }
                    ],
            


                    },
                    


        created: function () {
                    this.slidesLoop();
                   
                },



       methods:{

        /* funzione che mostra slide precedente */
            prevSlide:function(){
                this.index--;

                if(this.index < 0){
                  return  this.index = (this.imgNavSlider.length - 1);
                }

        },

        /* funzione che mostra slide successiva */
            nextSlide:function(){
                this.index++;

               if(this.index >= this.imgNavSlider.length){
                  return this.index = 0;
               }

            },


            prevSlideOne:function(){
                this.index--;

                if(this.index < 0){
                  return  this.index = (this.imgSectJason.length - 1);
                }

        },
                    
            nextSlideOne:function(){
                this.index++;

               if(this.index >= this.imgSectJason.length){
                  return this.index = 0;
               }

            },


            prevSlideTwo:function(){
                this.index--;

                if(this.index < 0){
                  return  this.index = (this.darkSlider.length - 1);
                }

        },
                    
            nextSlideTwo:function(){
                this.index++;

               if(this.index >= this.darkSlider.length){
                  return this.index = 0;
               }

            },
               
            /* funzione che ripete in loop l'autoplay delle funziooni precedenti */
                slidesLoop: function() {
                    this.loop = setInterval(this.nextSlide, 3000)
    
                },
    
                 stopSlidesLoop: function() {
    
                    clearInterval(this.loop);
                }, 

                /* funzione che mostra immagine all'hover degli eventi nella sezione events */
                showImgEvents:function(el) {

                    let index= this.imgEvents.indexOf(el);

                        this.active=index
                        console.log(this.active)
                },

                

                
                // funzione che al click torna la visualizzazione all'inizio della pagina
                turnUp: function () {
                window.scrollTo({ top: 0, behavior: 'smooth'});
                },


            } 
       
        })
    }

      

function init() {
    launch()


    
    /* funzione jq che mostra i loghi sponsor */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


}

document.addEventListener('DOMContentLoaded', init);