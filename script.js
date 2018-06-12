$(function(){

/* .children()
Get the children of each element in the set of matched elements,
 optionally filtered by a selector. Here the selector is "li"*/
  var $mainMenuItems = $("#main-menu ul").children("li"),
      totalMainMenuItems = $mainMenuItems.length,
      openedIndex = 2,

      init = function(){
      bindEvents();
        if(validIndex(openedIndex))
        /*.eq()
        Reduce the set of matched elements to the one at the specified index.
         Here the index is openedIndex, declared above and equal 2*/
          animateItem($mainMenuItems.eq(openedIndex), true, 700);
      },
      bindEvents = function(){
        /* .click()
        Bind an event handler to the “click” JavaScript event,
         or trigger that event on an element.Here is trigger the function*/
        $mainMenuItems.children(".images").click(function(){
          /* .parent()
          Get the parent of each element in the current set of matched elements,
           optionally filtered by a selector.*/
           /* .index()
          Search for a given element from among the matched elements.*/
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });

        $(".button").hover(
        function(){
          /* .addClass()
        Adds the specified class(es)
         to each element in the set of matched elements.*/
            $(this).addClass("hovered");
        },
        function(){
          /*.removeClass()
          Remove a single class, multiple classes,
           or all classes from each element in the set of matched elements.*/
            $(this).removeClass("hovered");
        }
        );

        $(".button").click(function(){
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });


    },

    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },

    animateItem = function($item, toOpen, speed){
      /*.find()
      Get the descendants of each element in the current set of matched elements,
       filtered by a selector, jQuery object, or element.*/
        var $colorImage = $item.find(".color"),
        /*The question mark here is a a ternary if operation,
         Simply put, it is a short, inline if statement.
         If the statement before the question mark evaluates to true,
        then the left-hand side of the colon is used, otherwise (if it is false) the right-hand side is used.*/
        itemParam = toOpen ? {width: "420px"}:{width: "140px"} ,
        colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};
        /*.animate()
        Perform a custom animation of a set of CSS properties.
        Here the customs animations are itemParam and colorImageParam*/
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);
    },

    checkAndAnimateItem = function(indexToCheckAndAnimate){
        if(openedIndex === indexToCheckAndAnimate)
        {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        }
        else
        {
            if(validIndex(indexToCheckAndAnimate))
            {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            }
        }
    };

    init();
});
