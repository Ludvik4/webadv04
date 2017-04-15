'use strict';

module.exports = function() {

    $.gulp.task('sprite.png', function () {
        var spriteData = $.gulp.src('./source/img/sprite/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));

        var imgStream = spriteData.img

            .pipe($.buffer())
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gp.csso())
            .pipe($.gulp.dest($.config.root + '/assets/css'));

        return $.merge(imgStream, cssStream);
    });

};