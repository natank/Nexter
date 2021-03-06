import gulp from 'gulp';
import postcss from 'gulp-postcss';
import postcssMixins from 'postcss-mixins';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssExtend from 'postcss-extend';
import postcssHexrgba from 'postcss-hexrgba';
import postcssVars from 'postcss-simple-vars';

gulp.task('styles', function () {
    let plugins = [
        postcssImport,
        postcssPresetEnv({  
          stage: 3
        }),
        postcssVars,
        postcssMixins,
        postcssNested,
        postcssExtend,
        postcssHexrgba        
    ];
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss(plugins))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString())
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp'));
});


