/*
 * simple pushStateAccordion | http://www.happygaia.com/ | Published under GPL http://www.gnu.org/licenses/gpl-3.0 
 */
$(window).on("popstate", function(e) {
    if( window.location.href.indexOf("?") >= 0 )
    {
        var toBeMagicallyToggled = window.location.href.split("?")[1];
        $("[data-accordion="+toBeMagicallyToggled+"]").slideToggle('normal');
        $("[data-accordion]").not($("[data-accordion="+toBeMagicallyToggled+"]")).slideUp('slow');
    }
});
$("[data-tools=accordion]").click(function(e) {
    e.preventDefault();
    var toBeToggled = $(this).attr("href").split('?')[1];
    // $("[data-accordion="+toBeToggled+"]").slideToggle('normal');
    // $("[data-accordion]").not($("[data-accordion="+toBeToggled+"]")).slideUp('slow');


    if($(this).attr("data-accordion-style") == 'tab')
    {
        $("[data-accordion="+toBeToggled+"]").fadeToggle("normal");
        $("[data-accordion]").not($("[data-accordion="+toBeToggled+"]")).fadeOut('normal');
    }
    else
    {
        $("[data-accordion="+toBeToggled+"]").slideToggle('normal');
        $("[data-accordion]").not($("[data-accordion="+toBeToggled+"]")).slideUp('normal');
    }

    // change url of address bar
    var url = window.location.href;
    var href = $(this).attr("href");
    
    if(url.indexOf(href.split("?")[1]) >= 0) window.history.pushState('', '', url.split("?")[0]);
    else window.history.pushState('', '', href);
    return false;
});
$(".btn-cancel").on('click', function(e){
    $("[data-accordion]").slideUp("slow");
    window.history.pushState('', '', window.location.href.split("?")[0]);
});