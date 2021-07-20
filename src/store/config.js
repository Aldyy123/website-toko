import axios from 'axios'

const config = {
  api_url: 'https://mongo-arsy.herokuapp.com/',
  api_dev: 'http://localhost:8000/',
  wa: `https://api.whatsapp.com/send?phone=6282135293831&text=Saya%20Ingin%20Tanya%20${window.location.href}`
}

const getToken = async () => {
  try {
    const result = await axios.get(`${config.api_url}products/token`)
    return result.data.token
  } catch (error) {
    console.log(error)
  }
}

export { config, getToken }
