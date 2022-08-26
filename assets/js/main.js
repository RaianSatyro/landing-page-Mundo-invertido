import { subscribeToHellFireClub } from './firebase/hellfireclub.js';

const completName = document.getElementById('txtName');
const userEmail = document.getElementById('txtEmail');
const level = document.getElementById('txtLevel');
const persona = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe')


btnSubscribe.addEventListener('click', async () => {
    const subscrition = {
        nome: completName.value, 
        email: userEmail.value,
        level: level.value,
        character: persona.value
    }

    const subscriptionId = await subscribeToHellFireClub(subscrition);
    console.log(`Inscrito com Sucesso: ${subscriptionId}`)

    completName.value = ''
    userEmail.value = ''
    level.value = ''
    persona.value = ''
})

