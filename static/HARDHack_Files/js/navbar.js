$("document").ready(() => {
  $("#Smenu")
    .append('<a href="#Smenu" class="close"></a>')
    .appendTo($("body"))
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right",
      target: $("body"),
      visibleClass: "is-menu-visible",
    });
});
