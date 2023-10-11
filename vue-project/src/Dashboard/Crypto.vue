<template>
    <!DOCTYPE html>
    <html>

    <head>
        <title>Cryptocurrency</title>
        <link href="Crypto.css" rel="stylesheet">
    </head>

    <body>

        <div class="container">
            <header class="main">
                Crypto List
            </header>
            <div class="bitcoin">
                <h1>Bitcoin</h1>
                <p> Bitcoin is a protocol which implements a highly available, public, permanent, and decentralized ledger.
                    In order to add to the ledger, a user must prove they control an entry in the ledger. The protocol
                    specifies that the entry indicates an amount of a token, bitcoin with a minuscule b. The user can update
                    the ledger, assigning some of their bitcoin to another entry in the ledger. Because the token has
                    characteristics of money, it can be thought of as a digital currency.
                </p>
                <div id="background-1">
                    <img src="Bitcoin.svg.png" alt="Bitcoin"><br>
                </div>
                <div class="ethereum">
                    <h1>Ethereum</h1>
                    <p>Ethereum is a technology for building apps and organizations, holding assets, transacting and
                        communicating without being controlled by a central authority. There is no need to hand over all
                        your personal details to use Ethereum - you keep control of your own data and what is being shared.
                        Ethereum has its own cryptocurrency, Ether, which is used to pay for certain activities on the
                        Ethereum network.
                    </p>
                    <div id="background-2">
                        <img src="/ethereum.img" alt="Ethereum"><br><br><br>
                    </div>
                </div>

                <div class="tether">
                    <h1>Tether</h1>
                    <p>Launched in 2014, Tether is a blockchain-enabled platform designed to facilitate the use of fiat
                        currencies in a digital manner. Tether works to disrupt the conventional financial system via a more
                        modern approach to money. Tether has made headway by giving customers the ability to transact with
                        traditional currencies across the blockchain, without the inherent volatility and complexity
                        typically associated with a digital currency. As the first blockchain-enabled platform to facilitate
                        the digital use of traditional currencies (a familiar, stable accounting unit), Tether has
                        democratised cross-border transactions across the blockchain.
                    </p>
                    <div id="background-3">
                        <img src="/texter.logo3.png" alt="Tether"><br>
                    </div>
                </div>
            </div>
        </div>
    </body>

    </html>
</template>

<script setup>

</script>

<style scoped>
html,
body {
    width: 1350px;
}

.main {
    background: #afc2ca;
    color: #101048;
    font-family: helvetica;
    font-weight: bold;
    width: 1350px;
    height: 100px;
    font-size: 34px;
    padding: 25px 80px 15px 480px;
    position: relative;
    top: 70px;
}

.bitcoin {
    text-align: left;
    font-size: 19px;
    margin: 150px 100px 20px 30px;
    padding-right: 230px;
    padding-left: 120px;
    width: 900px;
    height: 78%;
}

.container {
    position: relative;
    left: 84px;
    background-color: #e7e2e2;
}


.bitcoin h1 {
    display: inline;
    margin-left: 50px;
    font-weight: bold;
    font-size: 23px;
    color: #101048;
    font-family: helvetica;
    border: 6px rgb(12, 12, 41);
    border-style: outset;
    border-radius: 13px;
    padding: 6px 10px;
    background-color: #b3cad2
}

.bitcoin p {
    text-indent: 20px;
    font-size: 17px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: helvetica;
    text-align: justify;
    padding-top: 5px;
    width: 600px;
}

#background-1 {
    position: relative;
    top: -240px;
    right: -700px;
}

#background-2 {
    position: relative;
    top: -265px;
    right: -720px;
}

#background-3 {
    position: relative;
    bottom: 239px;
    right: -710px;
}

body {
    background-color: rgb(219, 231, 242);
}

.ethereum {
    margin-top: -150px;
}

.tether {
    margin-top: -300px;
}
</style>