# PruebaLibreria
A continuación daré una guia para saber como utilizar la API REST diseñada, primero que todo debes instalar los siguientes modulos y dependencias:
npm i morgan,
npm i express,
npm i dotenv,
npm i git,
npm mysql12,
npm nodemon.
Una vez realizado esto, debes tener en cuenta los ajustes de la base de datos, en el script  "db.js" se encuentran estos, debes modificarlo según to propia base de datos
en mi caso usé MySQL workbench para realizar la conexión. Adicioné un script para la creación de la base de datos en mySQL, dicho script es "CREATION_TABLE_DATABASE".
Para facilitar la ejecución de los codigos, incluí 2 comandos, "dev" que se utiliza para correr el index.js y "test" para correr los 6 test diseñados.
La ruta de acceso a la api es /libros/api, allí verás lo que se encuentra dentro de la base de datos, esto se realiza mediante la petición GET.
Para realizar una petición PUT o DELETE, debes incluir lo siguiente /libros/api/id, con esto especificas que libro vas a editar o eliminar.
Para agregar y editar libros debes incluir todos los datos, de no hacerlo no se realizará la modificación en la base de datos.
El objetivo era despegar la API sin embargo por cuestiones de tiempo y porque no encontré una pagina gratuita para hacer esto no la pude desplegar y ser consumida por una pagina web.
