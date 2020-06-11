const axios = require('axios');

const init = async function () { 
    const dids = (await axios({
        url: 'https://api.totalvoice.com.br/did',
        method: 'post',
        headers: {
            'Acess-Token': '918c62746d04cc3753bd7279fa2cf596'
        },

        data: {
           ura_id: "id",
        }
    })).data
} 

init();