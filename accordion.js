/*
 * simple pushStateAccordion | https://github.com/CanRau/pushStateAccordion | Published under GPL http://www.gnu.org/licenses/gpl-3.0 
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
    $("[data-accordion="+toBeToggled+"]").slideToggle('normal');
    $("[data-accordion]").not($("[data-accordion="+toBeToggled+"]")).slideUp('slow');

    // change url of address bar
    var url = window.location.href;
    var href = $(this).attr("href");
    
    if(url.indexOf(href.split("?")[1]) >= 0) window.history.pushState('', '', url.split("?")[0]);
    else window.history.pushState('', '', href);
    return false;
});
$("[data-accordion-close]").on('click', function(e){
    $("[data-accordion]").slideUp("slow");
    window.history.pushState('', '', window.location.href.split("?")[0]);
});