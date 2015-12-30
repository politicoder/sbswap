(function($) {
    $(document).ready(function() {

        var panels = {"open":null}; // All panels closed at first

        var $site = $('#sb-site, .sb-site-container');

        // Separate element with .sb-swap-close class will close any open slidebars/panels
        $('.sb-swap-close').click(function() { 
            $.slidebars.close();
            $('.sb-active-control').removeClass('sb-active-control');
            panels.open = null;
        });

        // Trigger Slidebars Swap on clicking any element with data-sbswap
        $('[data-sbswap]').on('click', function(e) { 
            var thedata = $(this).data('sbswap');
            swapIt(this, thedata, e);
        });

        // Trigger with jQuery
        $.fn.slidebarsSwap = function(button, e) {
            var panelID = this.attr('id');
            swapIt(button, panelID, e);
        };

        // Clears Slidebars Swap adjustments when Slidebars are closed via site touch/click
        $site.on('touchend click',function() {
            $('.sb-active-control').removeClass('sb-active-control');
            panels.open = null;
        })  

        // Hides all Swap panels by default
        function hideThePanels() {
            $('.sb-swap-panel').hide();
        }
        hideThePanels();

        // The main function
        function swapIt(thebutton, thispanel, e) {
            function eventHandler(e) {
                e.stopPropagation();
                e.preventDefault();
            }
            eventHandler(e);

            // Targets specified panel ID
            var thecontent = $('#' + thispanel);
            
            // Checks to see if target panel is in left or right slidebar
            if ($(thecontent).closest('.sb-left').length) {
                paneldirection = 'left';
            }
            if ($(thecontent).closest('.sb-right').length) {
                paneldirection = 'right';
            }

            // Checks if panel is already open
            if (panels.open != thispanel) {

                // Remove active control class from all elements and add it to specified control
                $('.sb-active-control').removeClass('sb-active-control');
                $("[data-sbswap=" + thispanel + "]").addClass('sb-active-control');
                $(thebutton).addClass('sb-active-control');

                // If Slidebars on either side are open, close them, swap out content, then reopen
                if ($.slidebars.active('left') || $.slidebars.active('right')) {
                    window.setTimeout(function() {
                        $.slidebars.close();
                        window.setTimeout(function() {
                            hideThePanels();
                            window.setTimeout(function() {
                                $(thecontent).show();
                            }, 100);
                            window.setTimeout(function() {
                                $.slidebars.open(paneldirection);
                                panels.open = thispanel;
                            }, 250);
                        }, 250);
                    }, 100);

                } else {

                    // If no Slidebars were open, swap out content and open
                    hideThePanels();
                    $(thecontent).show();
                    window.setTimeout(function() {
                        $.slidebars.open(paneldirection);
                        panels.open = thispanel;
                    }, 100);
                }
                panels.open = thispanel;

            } else {

                // If the clicked panel was already open, close it
                $(thebutton).removeClass('sb-active-control');
                $.slidebars.close();
                panels.open = null;
            }
        }
    });
})(jQuery);