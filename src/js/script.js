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

  // звездочка
  $(".icon-star").click(function(){
    $(this).parents(".star-wrapper").toggleClass("active");
  });

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

  // открытие поля поиска тип 2
  $(".js-search-open-3").on("click", function(event){
    event.preventDefault();
    $(".search-container").toggleClass("opened");
  })

  // закрытие поля поиска тип 2
  $(".js-search-close-3").on("click", function(event){
    event.preventDefault();
    $(".search-container").removeClass("opened");
  })

  // открытие выпадающего списка на странице поиска
  $(".list-toggle").click(function(event){
    event.preventDefault();
    $(this).parents(".filters-container__list-item").toggleClass("unfolded");
  });

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

  //открытие поля нового сообщения
  $(".compose-a-message").on("click", function(){
    $(".compose-a-message").toggleClass("active");
    $(".new-message-container").toggleClass("active");
    return false;
  })

  //открытие списка сообщений
  $(".tab-toggles__toggle").on("click", function(){
    $(".tab-toggles__toggle").toggleClass("active");
    $(".tab-toggles__list").toggleClass("hidden");
    return false;
  })

  //переключение выпадающих фильтров (тип 2)
  $(".filter-toggle").click(function(){
    $(this).parents(".filters-container").toggleClass("opened");
  });

  // скролл до якоря
  $(document).ready(function(){
    $("a[href*=#]").bind("click", function(e){
      var anchor = $(this);
      $("html, body").stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top
      }, 1000);
        e.preventDefault();
    });
    return false;
  });

  // переключение табов
  (function($) {
    $(function() {
      $('ul.tab-toggles__list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
          $('ul.tab-toggles__list').addClass('hidden');
      });
    });
  })(jQuery);

  // закрытие табов
  $(".tab-toggle__close").click(function(){
    $(this).parents(".tab-toggle").addClass("hidden");
  });
});