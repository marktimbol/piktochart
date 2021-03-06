var elixir = require('laravel-elixir');
const bowersPath = '../../../bower_components/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', 'resources/assets/css/app.css')
    	.styles([
            bowersPath + 'bootstrap/dist/css/bootstrap.css',
    		'app.css',
    	], 'public/css/app.css')

    	.scripts([
            bowersPath + 'jquery/dist/jquery.js',
            bowersPath + 'bootstrap/dist/js/bootstrap.js',
    	], 'public/js/app.js');

    mix.sass('create.scss', 'resources/assets/css/create.css')
        .styles([
            bowersPath + 'bootstrap/dist/css/bootstrap.css',
            'create.css',
        ], 'public/css/create.css')

        .scripts([
            'ruler.js',
            'create.js'
        ], 'public/js/create.js');
});
