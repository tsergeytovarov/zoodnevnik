$(function() {
	// toggle tooltip
  $(".js-tooltip-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".tooltip-container").toggleClass("active");
  });

  // открытие списка сортировки
  $(".sorting-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".sorting-container").toggleClass("active");
  });

  // открытие поля поиска в хлебных крошках
  $(".js-search-open").on("click", function(event){
    event.preventDefault();
    $(".breadcrumbs-navigation__left").toggleClass("opened");
  });

  $(".js-search-open").on("click", function(event){
    event.preventDefault();
    $(".sorting-container__left").toggleClass("opened");
  })

  // звездочка
  $(".icon-star").click(function(){
    $(this).parents(".star-wrapper").toggleClass("active");
  });

  // закрытие поля поиска в хлебных крошках
  $(".js-search-close").on("click", function(event){
    event.preventDefault();
    $(this).next(".breadcrumbs-search-input").val("");
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
    if ($(this).parents(".search-container").hasClass("opened")) {
      $(this).parents(".search-container").removeClass("opened");
    } else {
      $(this).parents(".search-container").addClass("opened");
    }
  })

  $(".search-input").on("focus", function() {
    $(this).parents(".search-container").addClass("opened");
  })

  // закрытие поля поиска тип 2
  $(".js-search-close-3").on("click", function(event){
    event.preventDefault();
    $(this).prev(".search-input").val("");
  })

  // открытие выпадающего списка на странице поиска
  $(".tab-toggle__text").click(function(event){
    event.preventDefault();
    $(this).parents(".list-toggle").toggleClass("unfolded");
    $(this).parents(".tab-toggle").parents(".tab-toggles__list").prev(".tab-toggles__toggle").text($(this).text());
  });

  // переключение состояний элементов по скроллу к питомцам (главная)
  $(".pets-button").on("click", function(event){
    $(".header-navigation__link--pets").addClass("current");
    $(".page-header-main").addClass("nested");
    $(".page-navigation--main-page").addClass("nested");
    $(".breadcrumbs-navigation--main-page").addClass("nested");
    $(".main-page-content").addClass("nested");
  })

  $(".js-logo-link").click(function() {
    $(".header-navigation__link--pets").removeClass("current");
    $(".page-header-main").removeClass("nested");
    $(".page-navigation--main-page").removeClass("nested");
    $(".breadcrumbs-navigation--main-page").removeClass("nested");
    $(".main-page-content").removeClass("nested");
  })

  //переключение выпадающего меню
  $(".menu-toggle").on("click", function(){
    $(".menu-container").toggleClass("active");
    return false;
  })

  //переключение тултипа календаря
  $(".calendar-toggle").on("click", function(){
    $(this).next().toggleClass("opened");
    return false;
  })

  //открытие поля нового сообщения
  $(".compose-a-message").on("click", function(){
    $(".compose-a-message").toggleClass("active");
    $(".new-message-container").toggleClass("active");
    return false;
  })

  //открытие списка табов
  $(".tab-toggles__toggle").on("click", function(event){
    /*$(".tab-toggles__toggle").toggleClass("active");*/
    $(this).next().toggleClass("hidden");
    return false;
  })

  //разворачиванеи подсписка табов на странице питомца
  $(".inner-tabs__toggle").on("click", function(event){
    $(this).toggleClass("active");
    $(this).parents(".inner-tabs").toggleClass("opened");
    return false;
  })

  //открытие тултипа соцсетей
  $(".news-item__social-link").on("click", function(){
    $(this).parents(".news-item__social-container").toggleClass("opened");
    return false;
  })

  //переключение выпадающих фильтров (тип 2)
  $(".filter-toggle").click(function(){
    $(this).parents(".filters-container").toggleClass("opened");
  });

  //разворачивание блока комментариев (тип1)
  $(".news-item__social-link--comment").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".news-item").toggleClass("new-comment");
  });

  //кнопка "показать комментарии"
  $(".comment-block__show-prev").click(function(){
    $(this).parents(".comment-block").toggleClass("show-comments");
  });

  //переключение состояний кнопки "добавить в избранное"
  $(".favourite").on("click", function(){
    $(this).toggleClass("added");
    return false;
  })

  //переключение состояний кнопки "добавить в друзья"
  $(".friend").on("click", function(){
    $(this).toggleClass("added");
    return false;
  })

  //переключение состояний кнопки "подписаться"
  $(".subscribe").on("click", function(){
    $(this).toggleClass("subscription");
    return false;
  })

  //переключение тултипа в строке с табами на стр питомца (редактирование)
  $(".inner-tabs__tooltip-toggle").click(function(event){
    event.preventDefault();
    $(this).parents(".inner-tabs__tooltip-container").toggleClass("opened");
  });

  //открытие поля по кнопке "добавить юзера"
  $(".inner-tabs__add-user-button").click(function(event){
    event.preventDefault();
    $(this).next(".inner-tabs__add-user-field").addClass("opened");
  });

  //закрытие поля "добавить юзера"
  $(".inner-tabs__close-btn").click(function(event){
    event.preventDefault();
    $(this).parents(".inner-tabs__add-user-field").removeClass("opened");
  });

  //разворачивание блока редактирования комментариев на странице питомца (редактирование)
  $(".inner-tabs__textarea-wrapper").click(function(event) {
    event.preventDefault();
    $(this).children("textarea").removeAttr("disabled");
    $(this).children("textarea").focus();
    $(this).parents(".inner-tabs__message-block").addClass("unfolded");
  })

  //скрытие блока редактирования комментариев на странице питомца (редактирование)
  $(".inner-tabs__cancel-button").click(function(event) {
    event.preventDefault();
    $(this).parents(".inner-tabs__message-block").removeClass("unfolded");
  })

  //скрытие карочки владельца
  $(".owner-card__close-btn").click(function(event) {
    event.preventDefault();
    $(this).parents(".owner-card").addClass("hidden");
  })

  //скрытие фотографии из галереи
  $(".photo-gallery__item-close").click(function(event) {
    event.preventDefault();
    $(this).parents(".photo-gallery__item").addClass("hidden");
  })

  //
  $(window).load(function(){
    var fieldEls = $(".info-table__text-input");
    fieldEls.each(function() {
      var elValue = $(this).parent().parent().find(".info-table__text").text();
      $(this).attr("value", elValue);
    })
  });

  //
  $(".info-table__edit-btn").click(function() {
    $(this).prev("input").focus();
  })

  //
  $(".new-message-block__textarea").on("focus", function() {
    $(this).empty();
  })

  //
  $(".owner-message__input").focus(function() {
    $(".owner-message__write-btn").addClass("hidden");
    $(".owner-message__cancel-btn").addClass("show");
  })

  $(".owner-message__textarea").focus(function() {
    $(".owner-message__write-btn").addClass("hidden");
    $(".owner-message__cancel-btn").addClass("show");
  })

  $(".owner-message__cancel-btn").click(function() {
    $(".owner-message__input").val("");
    $(".owner-message__textarea").text("");
    $(".owner-message__textarea").val("");
  })

  $(".ancestor-table__edit-btn").click(function() {
    $(this).prev("input").focus();
  })

  $(".registration-form input").on("focus", function(){
    var username = $("#username");
    var email = $("#email-02");
    var password = $("#password-02");
    var passwordRepeat = $("#password-02-repeat");
    if (username && email && password && passwordRepeat) {
      $(".register-btn").addClass("fields-ok");
    }
  });

  $(".ui-datepicker-div").click(function() {
    console.log("it works");
    var date = $("#from");
    var val = date.val();
    var dateArr = val.split("/");
    $("#start-day").val(dateArr[0]);
    $("#start-month").val(dateArr[1]);
    $("#start-year").val(dateArr[2]);
  })

  $(".eye-btn").click(function() {
    $(this).toggleClass("visible");
    $(this).next("div").toggleClass("active");
  })

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

  // переключение сортировки на стр.групп
  (function($) {
    $(function() {
      $('ul.sorting-links-list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.sorting').find('div.sorted-items').removeClass('active').eq($(this).index()).addClass('active');
      });
    });
  })(jQuery);

  // переключение табов навигации
  (function($) {
    $(function() {
      $('ul.page-navigation__list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.page-content').removeClass('active').eq($(this).index()).addClass('active');
          $('ul.page-navigation__list').addClass('hidden');
      });
    });
  })(jQuery);

  // переключение внутренних табов (тип 1)
  (function($) {
    $(function() {
      $('ul.inner-tabs__list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.inner-tabs-container').find('div.sorted-content').removeClass('active').eq($(this).index()).addClass('active');
      });
    });
  })(jQuery);

  // открытие выпадающего списка на странице поиска
  $(".inner-tabs__list-item").click(function(event){
    $(this).parents(".inner-tabs").removeClass('opened');
    $(this).parents(".inner-tabs").children(".inner-tabs__toggle").text($(this).text());
  });

  // закрытие элементов
  $(".close-btn").click(function(){
    $(this).parents(".element").addClass("hidden");
  });

  $(".inner-tabs__share-btn").on("click", function() {
    $(this).toggleClass("active");
  })
});