 function formataCPF(buscaCPF) {
  const elementoAlvo = buscaCPF
  const cpfAtual = buscaCPF.value   
  
  let cpfAtualizado;
  
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
   function( regex, argumento1, argumento2, argumento3, argumento4 ) {
          return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
  }) 
  elementoAlvo.value = cpfAtualizado;
  if (buscaCPF = false){
  formataCPF(buscaCPF);



  }   
  
  
  } 
  function formataTelefone (tel) {
    // passa o número recebido para String e remove
    // caracteres não numéricos
    tel = tel.toString().replace(/[^\d]/g, '')
    
    // Se o telefone contiver 10 Digitos
    if (tel.length === 10) {
      return tel.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
    
    // Se tiver 11 Dígitos, ex: Celular  
    if (tel.length === 11) {
      return tel.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
    }
    return null
  }
  
  // Veja no console. Tecla [F12]
  console.log(formatPhone('Meu número 88h988.459521'))


 /* function formataTelefone(tel) {
    const elementoAlvo = tel
    const telAtual = tel.value   
    
    let telAtualizado;
    
    telAtualizado = telAtual.replace(/(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}/,
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '(  )' + argumento2 + ' ' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = telAtualizado; 
    }   
   */