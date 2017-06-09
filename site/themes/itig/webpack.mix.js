/**
 * Created by mario on 5/11/17.
 */

let mix = require('laravel-mix');

mix.js('core/js/itig.js', 'js');

mix.js('core/js/components/dist.js', 'js/dist.js');

mix.sass('core/sass/itig.scss', 'css');