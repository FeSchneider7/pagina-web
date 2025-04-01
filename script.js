document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('celular').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && celular && mensagem) {
        const whatsappMessage = `https://wa.me/5511992997202?text=${encodeURIComponent(`Nome: ${nome}\nCelular: ${celular}\nEndereço: ${endereco}\nCPF: ${cpf}\nMensagem: ${mensagem}`)}`;
        window.open(whatsappMessage, '_blank');
    } else {
        alert('Por favor, preencha os campos obrigatórios!');
    }
});
