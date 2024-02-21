(function($) {
    $.fn.timeline = function() {
        let selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline_img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "url(" +
            selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
            ")"
        );
    let itemLength = selectors.item.length;
    $(window).scroll(function(){
        let max, min;
        let pos = $(this).scrollTop();
        selectors.item.each(function(i){
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            let that = $(this);
            if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                    "url(" +
                    selectors.item
                    .last()
                    .find(selectors.img)
                    .attr("src") +
                    ")"
                );
            selectors.item.last().addClass(selectors.activeClass);
            } else if (pos<= max - 40 && pos >= min) {
                selectors.id.css(
                    "url(" +
                    $(this)
                    .find(selectors.img)
                    .attr("src") +
                    ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                $(this).addClass(selectors.activeClass);
            }
        });
    });
    };
})(jQuery);
$("#timeline-1").timeline();