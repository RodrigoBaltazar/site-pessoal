    <style scoped>
        :root,
        html,
        body {
            scroll-behavior: smooth;
        }

        p {
            font-family: 'Roboto Slab';

            span {
                font-family: inherit;
            }
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        * {
            margin: 0;
            padding: 0;
        }

        body {
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
        }

        img,
        picture,
        video,
        canvas,
        svg {
            display: block;
            width: 100%;
        }

        input,
        button,
        textarea,
        select {
            font: inherit;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            overflow-wrap: break-word;
            hyphens: auto;
        }

        #root,
        #__next {
            isolation: isolate;
        }

        li,
        ul {
            list-style: none;
        }

        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
        }

        header, footer {
            background: #006699 !important;
        }

        header {
            margin-bottom: 50px;
        }

        li {
            font-size: 18px;
        }

        li + li {
            margin-bottom: 20px;
        }

        .fa-check {
            margin-right: 5px;
        }
       .footy {
	background: #006699 !important;
	}
        #contato {
            margin-top: 2%;
        }
        #exemplos {
            margin-bottom: 2%;
        }
    </style>

<template>
    <header>
        <nav class="container-fluid navbar navbar-expand-lg auto d-flex justify-content-center align-items-center" style="margin: 0 auto">
            <div class="">
                <a class="navbar-brand" href="#" style="color: white">Técnico em Informática - Baltazar Soluciona</a>
            </div>
        </nav>
    </header>

    <main>
        <h1 class="text-center" style="font-size: 45px; margin-bottom:30px">Consertos em Geral para T.I</h1>
        <h2 id="exemplos">Exemplos:</h2>
        <ul class="text-center " style="list-style: none; padding: 0 15px;">
            <li><i class="fa-solid fa-check"></i> Problemas de Hardware (não liga, peças com defeito).</li>
            <li><i class="fa-solid fa-check"></i> Problemas com Windows, Linux ou Macos.</li>
            <li><i class="fa-solid fa-check"></i> Instalação de Impressoras.</li>
            <li><i class="fa-solid fa-check"></i> Lentidão.</li>
            <li><i class="fa-solid fa-check"></i> Upgrade.</li>
            <li><i class="fa-solid fa-check"></i> Escolha de peças para escritório ou pc gamer.</li>
            <li><i class="fa-solid fa-check"></i> Resolvo apenas no local, não retiro equipamentos do local.</li>
        </ul>
    </main>

    <section class="text-center" style="margin: 50px 0;">
        <h2 >
            Valores praticados pelo mercado.
        </h2>

        <ul>
            <li>Só é cobrado serviço se for resolvido.</li>
            <li>Não cobro visita.</li>
        </ul>
    </section>

    <section class="text-center" style="margin-bottom: 50px;">
        <h1>Contato:</h1>
        <h2 id="contato">
            Clique aqui para me chamar no WhatsApp!
        </h2>
        <div class="d-flex justify-content-center align-items-center">
            <a href="https://wa.me/5551997232493">
                <img src="./whats.png" alt="" style="width:100px ; height: 100px;">
            </a>
        </div>


        <h2 style="margin: 15px;">
            Ou ligue para:
        </h2>

            <a href="tel:+5551997232493">(51)997232493 - Rodrigo Baltazar</a>
    </section>

    
        <div id="footy">
            <a class="d-flex justify-content-center align-items-center" href="http://www.rodrigobaltazar.com.br" style="color: black; padding: 40px 0;">www.rodrigobaltazar.com.br</a>
        </div>
    

</template>
