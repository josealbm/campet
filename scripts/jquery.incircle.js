(function($) {

    $.fn.incircle = function(options) {

        // Default options.
        var settings = $.extend({
            color: "#556b2f",
            backgroundColor: "white",
            type: 0.5, //circle type - 1 whole, 0.5 half, 0.25 quarter
            radius: '10em', //distance from center
            start: -180, //shift start from 0
            top: '16em',
            left: 'calc(50% - 4em)'
        }, options);

        this.css({
            'position': 'relative',
            'top': settings.top,
            'left': settings.left,
            'list-style-type': 'none',
            'margin': 'auto',
            'padding': 'auto'
        });

        $elements = this.children(':not(:first-child)');
        numberOfElements = (settings.type === 1) ? $elements.length : $elements.length - 1; //adj for even distro of elements when not full circle
        slice = 360 * settings.type / numberOfElements;

        $elements.each(function(i) {
            var $self = $(this),
                rotate = slice * i + settings.start,
                rotateReverse = rotate * -1;

            $self.css({
                'position': 'absolute',
                '-webkit-transition': 'all 2s linear',
                '-moz-transition': 'all 2s linear',
                'transition': 'all 2s linear'
            });

            $self.css({
                'transform': 'rotate(' + rotate + 'deg) translate(' + settings.radius + ') rotate(' + rotateReverse + 'deg)'
            });
        });

        return this;
    };

}(jQuery));