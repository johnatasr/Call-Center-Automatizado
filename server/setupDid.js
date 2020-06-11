const axios = require('axios');

const init = async function () { 
    const ura = (await axios({
        url: 'https://api.totalvoice.com.br/ura',
        method: 'post',
        headers: {
            'Acess-Token': '<TOKEN>'
        },

        data: {
            nome: `URA ${Math.floor(Math.random() * 10000)}`,
            dados: [
                {
                    acao: 'tts',
                    coletar_dtmf: "6",
                    timeout: "20",
                    acao_dados: {
                        mensagem: 'Olá, bem-vindo ao meu perfil ao meu canal ! Digite o código de 6 dígitos que está aparecendo na sua tela'
                    }
                },
                {
                    acao: 'dinamico',
                    acao_dados: {
                        url: 'http://82a10379757e20ead7a895b75ac84aec.m.pipedream.net'
                    }
                }
            ]
        }
    })).data
} 

init();