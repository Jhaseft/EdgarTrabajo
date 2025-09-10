<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <!-- Establece el idioma de la página según la configuración de Laravel -->

    <head>
        <meta charset="utf-8"> <!-- Codificación de caracteres -->
        <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- Responsive para móviles -->

        <!-- Título dinámico usando Inertia -->
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
<meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Favicon personalizado -->
        <link rel="icon" href="{{ asset('https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png') }}" type="image/png">

        <!-- ===========================
             Meta Open Graph para redes sociales
             =========================== -->
        <meta property="og:title" content="Corte Beniano" />
        <meta property="og:description" content="Cortes de Calidad " />
        <meta property="og:image" content="{{ asset('https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png') }}" />
        <meta property="og:url" content="{{ url('/') }}" />
        <meta property="og:type" content="website" />

        <!-- ===========================
             Meta para Twitter
             =========================== -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carniceria Corte Beniano" />
        <meta name="twitter:description" content="Cortes de Calidad Hechos Con Amor" />
        <meta name="twitter:image" content="{{ asset('https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png') }}" />

        <!-- ===========================
             Fuentes
             =========================== -->
        <link rel="preconnect" href="https://fonts.bunny.net"> <!-- Optimiza la carga de fuentes -->
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- ===========================
             Scripts de Laravel + Inertia + React
             =========================== -->
        @routes <!-- Genera rutas de Laravel para usar en JS -->
        @viteReactRefresh <!-- Habilita Hot Module Replacement (HMR) con React -->
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]) <!-- Archivos JS principales -->
        @inertiaHead <!-- Inertia gestiona el <head> dinámicamente -->
    </head>

    <body class="font-sans antialiased">
        @inertia <!-- Punto de montaje de la app Inertia/React -->
    </body>
</html>
