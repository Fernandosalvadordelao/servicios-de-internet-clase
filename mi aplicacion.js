requiere('dotenv').config()
const express= requiere('express')
const app= express()
const { appConfig } = requiere('./config/config')
const foo =false
app.listen(appConfig.port, ()=> console.log('puesto en marcha en puerto'))