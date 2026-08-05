import { test, expect } from '@playwright/test';

const BASE_URL = 'https://simple-tool-rental-api.click'

test('API001 - Status', async ({ request }) => {

       const response = await request.get(BASE_URL+'/status')

       console.log(response.status())

       // Assertion
       await expect(response.status()).toBe(200)

       const body = await response.json()

       console.log(body)

       await expect(body.status).toBe('UP')


})

test('API002 - Get All Tools + Query Parameter', async ({ request }) => {

       const response = await request.get(BASE_URL+'/tools', {
        params:{
            available: true,
            results:5
        }
       })

       console.log(response.status())

       // Assertion
       await expect(response.status()).toBe(200)

       const body = await response.json()

       console.log(body)

})

test('API003 - Single Tool', async ({ request }) => {

       const response = await request.get(BASE_URL+'/tools/6483')

       console.log(response.status())

       // Assertion
       await expect(response.status()).toBe(200)

       const body = await response.json()

       console.log(body)
       await expect(body.id).toBe(6483)

})

test('API004 - Create new user', async ({ request }) => {

    let emailRandom = 'ricardo.avalos'+Date.now()+'@mail.com'
    console.log(emailRandom)

       const response = await request.post(BASE_URL+'/api-clients',{
        data:{
            clientName: 'Ricardo Avalos',
            clientEmail: emailRandom
        }
       })

       console.log(response.status())

       // Assertion
       await expect(response.status()).toBe(201)

       const body = await response.json()

       console.log(body)
       
       // Guardar token
       console.log(body.accessToken)

})