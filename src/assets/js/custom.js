$(window).on('load',function(){setTimeout(function(){$('.preloader').addClass('animated zoomOutDown')},2000);});$(document).ready(function(){$("#notifyMe").notifyMe();$(window).scroll(function(){$(this).scrollTop()>=100?$(".navbar").addClass("nav-scroll"):$(this).scrollTop()<=700&&$(".navbar").removeClass("nav-scroll")});$('a.nav-link').on('click',function(){$('html, body').animate({scrollTop:$($(this).attr('href')).offset().top-90},1000);return false;});$('body').scrollspy({target:'nav',offset:100});$('#vertical-container li').click(Vaccordion);function Vaccordion(){$('#vertical-container li').not(this).next().slideUp(400);$(this).next().slideDown(400);};var screenshots_slider_v1=new Swiper('.screenshots-slider_v1',{prevButton:'.circle-btn.prev',nextButton:'.circle-btn.next',grabCursor:true,slidesPerView:2,loop:true,centeredSlides:true,effect:'coverflow',speed:800,coverflow:{rotate:0,stretch:-10,depth:300,modifier:3,slideShadows:false},breakpoints:{320:{slidesPerView:1},760:{slidesPerView:1},1024:{slidesPerView:2}},simulateTouch:true});var screenshots_slider_v2=new Swiper('.screenshots-slider_v2',{prevButton:'.circle-btn.prev',nextButton:'.circle-btn.next',grabCursor:true,slidesPerView:2,loop:true,centeredSlides:true,effect:'coverflow',speed:800,coverflow:{rotate:-15,stretch:-10,depth:300,modifier:3,slideShadows:false},breakpoints:{320:{slidesPerView:1},760:{slidesPerView:1},1024:{slidesPerView:2}},simulateTouch:true});var testimonials_slider=new Swiper('.testimonials-slider',{grabCursor:true,pagination:'.swiper-pagination',paginationClickable:true,parallax:true,speed:600,});(function(){window.sr=ScrollReveal();var showSide={top:{origin:'top',duration:1000},bottom:{origin:'bottom',duration:1000},left:{origin:'left',duration:1000},right:{origin:'right',duration:1000}};sr.reveal('.show-top',showSide.top);sr.reveal('.show-bottom',showSide.bottom);sr.reveal('.show-left',showSide.left);sr.reveal('.show-right',showSide.right);}());var home=document.getElementById('home-parallax'),features=document.getElementById('features-parallax'),faq=document.getElementById('faq-parallax');var homeParallax=new Parallax(home),featuresParallax=new Parallax(features),faqParallax=new Parallax(faq);var rellax=new Rellax('.rellax',{center:true});});