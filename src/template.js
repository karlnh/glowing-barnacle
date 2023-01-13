const template =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Team Profile</title>
    <style>
body {
    font-family: monospace;
}

header {
    background: lightsalmon;
    color: black;
    border: 1px solid black;
    text-align: center;
    padding: 1rem;
}

#card-holder {
    display: flex;
    place-content: center;
    border: 1px solid black;
    margin-top: 1rem;
    padding: 1rem;
}

.card {
    display: flex;
    border: 1px solid black;
    margin: 1rem;
    padding: 2rem;
}

ul {
    list-style: none;
    /* margin: 0; */
    padding: 0;
}
    </style>

</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section id="card-holder">
        
        </section>
    </main>
</body>
</html>
`

module.exports = template;