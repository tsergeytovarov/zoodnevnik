$(function() {
	// toggle tooltip
  $(".js-tooltip-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".tooltip-container").toggleClass("active");
  })

  // открытие списка сортировки
  $(".sorting-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".sorting-container").toggleClass("active");
  })

  // открытие поля поиска в хлебных крошках
  $(".js-search-open").on("click", function(event){
    event.preventDefault();
    $(".breadcrumbs-navigation__left").toggleClass("opened");
  })

  // закрытие поля поиска в хлебных крошках
  $(".js-search-close").on("click", function(event){
    event.preventDefault();
    $(".breadcrumbs-navigation__left").removeClass("opened");
  })

  // открытие поля поиска в хедере
  $(".js-search-open-2").on("click", function(event){
    event.preventDefault();
    $(".user-options__search").toggleClass("opened");
  })

  // закрытие поля поиска в хедере
  $(".js-search-close-2").on("click", function(event){
    event.preventDefault();
    $(".user-options__search").removeClass("opened");
  })

  // переключение состояний элементов по скроллу к питомцам (главная)
  $(".header-navigation__link--pets").on("click", function(event){
    $(".header-navigation__link--pets").addClass("current");
    $(".page-header").addClass("nested");
    $(".navigation-block").addClass("nested");
    $(".main").addClass("nested");
  })

  //переключение выпадающего меню
  $(".menu-toggle").on("click", function(){
    $(".menu-container").toggleClass("active");
    return false;
  })

  // скролл до якоря
  $(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
        e.preventDefault();
    });
    return false;
  });
});
