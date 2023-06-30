


function send_email(contact, about) {
    const webhookURL = 'https://discord.com/api/webhooks/1123801320877477908/Ha4WUuEGcJFaxf4-pPJTZ08LYFCLltTXXQwCdrl3r8E4ElcAV7geISJ0acKOhlVuNkdC';

    const payload = {
        embeds: [
            {
                title: 'Novo E-mail Recebido',
                fields: [
                    {
                        name: 'Contato',
                        value: contact,
                    },
                    {
                        name: 'Sobre',
                        value: about,
                    },
                ],
            },
        ],
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao enviar e-mail para o webhook: ${response.status} ${response.statusText}`);
        }
        console.log('E-mail enviado com sucesso para o webhook!');
    })
    .catch(error => {
        console.error('Erro ao enviar e-mail para o webhook:', error);
    });
}





function validar_enviar_email(event) {
    event.preventDefault()
    let contato = document.getElementById("contato").value
    document.getElementById("contato").value = ""
    let sobre = document.getElementById("sobre").value
    document.getElementById("sobre").value = ""
    send_email(contato, sobre)
    document.getElementById("send-email-form").style.display = "none"
    document.getElementById("sent-email").style.display = "flex"
}


