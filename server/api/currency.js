export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = useQuery(event)
  
    // handle post data
    // const { age } = await useBody(event)
  
    // return {
    //   message: `Hello, ${name}! You are ${age} years old.`
    // }
  
    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_xqvA3iUpLhGVv2VWv5tDsJPS5qXqSFFGr9fBNGQ7&currencies=EUR%2CUSD%2CCAD')
  
    return data
  })