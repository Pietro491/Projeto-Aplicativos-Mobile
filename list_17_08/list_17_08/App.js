```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Input</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
            background-color: #f2f2f2;
        }

        input {
            padding: 10px;
            width: 250px;
            font-size: 16px;
        }

        button {
            padding: 10px 20px;
            margin-left: 5px;
            cursor: pointer;
        }

        #resultado {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>

<body>

    <h1>Digite seu nome</h1>

    <input type="text" id="nome" placeholder="Digite aqui...">

    <button onclick="mostrarNome()">Enviar</button>

    <p id="resultado"></p>

    <script>
        function mostrarNome() {
            let nome = document.getElementById("nome").value;

            document.getElementById("resultado").innerText =
                "Olá, " + nome + "!";
        }
    </script>

</body>
</html>
```
