document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsapp-form');
    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = document.querySelector('input[type="tel"]').value;
        //document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsapp-form');
    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = document.querySelector('input[name="telefone"]').value;
        fetch('salvar_numero.php', {
            method: 'POST',
            body: JSON.stringify({ telefone: phoneNumber }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Mensagem de resposta do servidor (pode ser removido em produção)
            // Redireciona o usuário para o WhatsApp
            window.location.href = 'https://api.whatsapp.com/send?phone=' + phoneNumber;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});

    });
});
