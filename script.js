function launch(){
    new Vue({
        el: '#app',
        data: {
            'navList':['Home', 'Pages', 'Blog', 'Shop', 'Events', 'Elements'],
            'imgNavSlider':[
                            "img/rev-slider-main-home-img-02.png" , "img/rev-slider-main-home-img-03.jpg", "img/h1-rev-img-01.jpg"
                            ],
            'imgSectJason':[
                            "img/h1-blog-img-01.jpg", "img/h1-blog-img-02.jpg", "img/h1-blog-img-03.jpg", "img/h1-blog-img-04.jpg"
                            ],
            
            'index':0
            


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
                }
            }
        })
    }


function init() {
    launch()
}
document.addEventListener('DOMContentLoaded', init);

