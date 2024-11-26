const paginas = {
    "inicio": "<h1>Bem-vindo ao nosso site!</h1><p>Explore nossos serviços e conheça mais sobre nós.</p>",
    "sobre": "<h1>Sobre nós</h1><p>Somos uma empresa dedicada a fornecer soluções de qualidade.</p>",
    "servicos": "<h1>Veja nossos serviços.</h1><p>Oferecemos desenvolvimento web, marketing digital e mais!</p>",
    "contato": "<h1>Fale conosco</h1><p>Envie um e-mail para contato@empresa.com ou ligue para (00) 1234-5678.</p>",
};

 let conteudo = window.document.getElementById('conteudo');

 function navegarpara(pagina){
    conteudo.innerHTML = paginas[pagina];
 }