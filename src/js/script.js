$(function() {
	// toggle tooltip
  $(".js-tooltip-toggle").on("click", function(event){
    event.preventDefault();
    $(this).parents(".tooltip-container").toggleClass("active");
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
});
