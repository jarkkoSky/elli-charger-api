const serverPort = parseInt(Deno.env.get("SERVER_PORT") ?? '3020')
const ipAddress = Deno.env.get("IP_ADDRESS") 
const chargerPassword = Deno.env.get("CHARGER_PASSWORD")

if (!ipAddress) {
    throw new Error('Charger IP address not given')
}

if (!chargerPassword) {
    throw new Error('Charger password not given')
}

export default {
    serverPort,
    ipAddress,
    chargerPassword
}