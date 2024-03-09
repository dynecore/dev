# Proyecto Logging

Este proyecto proporciona una herramienta de registro personalizada que permite registrar mensajes en archivos en lugar de imprimirlos en la consola.

## Instalación

1. Clona este repositorio:

git clone https://github.com/dynecore/Logs-para-cpanel.git

markdown
Copy code

2. Instala las dependencias:

npm install

scss
Copy code

## Uso
este recurso está diseñado para utilizarse al inicio del proyecto. solo escribe tu codigo empezando desde src/server.js y reconocerá ll() de forma automatica.

cada vez que se ejecuta el proyecto se generará un archivo "log23.txt" dentro de la carpeta "/logs" con el numero del registro segun la cantidad de archivos que haya en dicha carpeta, no me esforcé en buscar una forma de darle una id, asi que ten cuidao si guardas algo ahi!

como se guardan cada vez que se ejecuta, y eso significa cada reinicio, es facil que se empiecen a acumular los registros. no se si es importante ya que apenas lo estoy usando.

en caso de error, el registro no guarda todo el mensaje, solo la primera linea onda "valor is not defined". si quieres mostrar el error completo utiliza ll(error.stack) como puedes ver en el try-catch en /sistema.js

yo lo probé con express (por eso está en las dependencias). no me hago responsable de uso en otras situaciones, aunque si llega a ser realmente util puedo mejorarlo

## Licencia
no se nada de licencias, si quieres usarlo adelante pero si te sirve pon algo que diga gracias aira c: (si no te funciona no me desees la muerte! pls)

