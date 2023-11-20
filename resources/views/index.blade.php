<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7N4SS2BHDG"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-7N4SS2BHDG');
        </script>
        
        <meta charset="utf-8">
        <meta name="description" content="Jogo da Forca online">
        <title>Jogo da Forca</title>


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
        <!-- Styles -->
        <style>
            /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-t{border-top-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.dark\:text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--tw-text-opacity))}}
        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>

        
        <link rel="stylesheet" href="css/forca.css" media="screen">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

        <link rel="icon" type="image/x-icon" href="/assets/favicon.png">
        <link rel = "shortcut icon" type = "imagem/x-icon" href = "/assets/favicon.png"/>

    </head>
    <body>
        <div class="menu">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                    <a class="nav-link active" aria-current="page" href="http://www.pergunteai.com.br">Pergunte Ai</a>
                    <a class="nav-link active" aria-current="page" href="http://www.jogodasformulas.com.br">Jogo das Fórmulas</a>
            </nav>
        </div>

    <div class="container">
        
       

        <div id="imagem"></div>

        <div id="palavra-secreta">
            <!-- <div class="letras">A</div>
            <div class="letras">F</div>
            <div class="letras">G</div>
            <div class="letras">A</div>
            <div class="letras">S</div>
            <div class="letras">M</div> -->
        </div>
        
        <div id="teclado">
            <div class="teclas">
                <button id="tecla-A" onclick="verificaLetraEscolhida('A')">A</button>
                <button id="tecla-B" onclick="verificaLetraEscolhida('B')">B</button>
                <button id="tecla-C" onclick="verificaLetraEscolhida('C')">C</button>
                <button id="tecla-D" onclick="verificaLetraEscolhida('D')">D</button>
                <button id="tecla-E" onclick="verificaLetraEscolhida('E')">E</button>
                <button id="tecla-F" onclick="verificaLetraEscolhida('F')">F</button>
                <button id="tecla-G" onclick="verificaLetraEscolhida('G')">G</button>
                <button id="tecla-H" onclick="verificaLetraEscolhida('H')">H</button>
                <button id="tecla-I" onclick="verificaLetraEscolhida('I')">I</button>
            </div>
            <div class="teclas">
                <button id="tecla-J" onclick="verificaLetraEscolhida('J')">J</button>
                <button id="tecla-K" onclick="verificaLetraEscolhida('K')">K</button>
                <button id="tecla-L" onclick="verificaLetraEscolhida('L')">L</button>
                <button id="tecla-M" onclick="verificaLetraEscolhida('M')">M</button>
                <button id="tecla-N" onclick="verificaLetraEscolhida('N')">N</button>
                <button id="tecla-O" onclick="verificaLetraEscolhida('O')">O</button>
                <button id="tecla-P" onclick="verificaLetraEscolhida('P')">P</button>
                <button id="tecla-Q" onclick="verificaLetraEscolhida('Q')">Q</button>
                <button id="tecla-R" onclick="verificaLetraEscolhida('R')">R</button>
            </div>
            <div class="teclas">
                <button id="tecla-S" onclick="verificaLetraEscolhida('S')">S</button>
                <button id="tecla-T" onclick="verificaLetraEscolhida('T')">T</button>
                <button id="tecla-U" onclick="verificaLetraEscolhida('U')">U</button>
                <button id="tecla-V" onclick="verificaLetraEscolhida('V')">V</button>
                <button id="tecla-W" onclick="verificaLetraEscolhida('W')">W</button>
                <button id="tecla-X" onclick="verificaLetraEscolhida('X')">X</button>
                <button id="tecla-Y" onclick="verificaLetraEscolhida('Y')">Y</button>
                <button id="tecla-Z" onclick="verificaLetraEscolhida('Z')">Z</button>
                <button id="recarregar" onclick="sortear()"><i class='bx bx-refresh'></i></button> 
            </div>
        </div>

        

        <!-- inicio modal Bootstrap-->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body" id="modalBody"></div>
                <div class="modal-footer">
                <button type="button" onClick="window.location.reload();" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
            </div>
        </div>
        <!-- fim modal Bootstrap--> 
        <div id="categoria">
            <!-- CATEGORIA -->
        </div>

    <audio preload src="assets/positive.mp3" id='somAcerto'></audio>
    <audio preload src="assets/negative.mp3" id='somErro'></audio>
    <audio preload src="assets/aplausos.mp3" id='somAplausos'></audio>
  
    
    
    
    

    <script src="js/forca.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    
</body>
</html>
