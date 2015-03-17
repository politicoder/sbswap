var openpanel = null; // All panels closed at first

(function($) {
    $(document).ready(function() {

        var $site = $('#sb-site, .sb-site-container');

        $('[data-sbswap]').on('click', function(e) {
            var thedata = $(this).data('sbswap');
            drawerswap(this, thedata, e);
        });


        $site.on('touchend click',function() {
            $('[data-sbswap]').removeClass('sb-active-control');
            window[openpanel] = null;
        })  


        function hideThePanels() {
            $('.sb-swap-panel').hide();
        }
        hideThePanels();

            
        function drawerswap(thebutton, thispanel, e) {
            function eventHandler(e) {
                e.stopPropagation();
                e.preventDefault();
            }
            eventHandler(e);
            var thecontent = $('#' + thispanel);
            
            if ($(thecontent).closest('.sb-left').length) {
                paneldirection = 'left';
            }
            if ($(thecontent).closest('.sb-right').length) {
                paneldirection = 'right';
            }
            if (window[openpanel] != thispanel) {
                $('[data-sbswap]').removeClass('sb-active-control');
                $("[data-sbswap=" + thispanel + "]").addClass('sb-active-control');
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
                                window[openpanel] = thispanel;
                            }, 250);
                        }, 250);
                    }, 100);
                } else {
                    hideThePanels();
                    $(thecontent).show();
                    window.setTimeout(function() {
                        $.slidebars.open(paneldirection);
                        window[openpanel] = thispanel;
                    }, 100);
                }
                window[openpanel] = thispanel;
            } else {
                $(thebutton).removeClass('sb-active-control');
                $.slidebars.close();
                window[openpanel] = null;
            }
        }
    });
})(jQuery);
