# Hacky'Nov Blockchain challenges - Write Up & Source Code

<div align="center">
  <a href="https://hackynov.fr"><img src="./Keccak/img/Logo+Texte-Hacky&apos;Nov-Depths-White.svg" alt="Hacky'Nov" width="50%"></a>
  <br><br>
  
  ![Discord](https://img.shields.io/discord/897766049099956284?label=Discord&style=for-the-badge)
  ![Twitter Follow](https://img.shields.io/twitter/follow/HackyNov?color=%231d9bf0&label=Twitter&style=for-the-badge)
  ![Twitch Status](https://img.shields.io/twitch/status/hackynov?color=%23772ce8&style=for-the-badge)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Kur0n33k0/HackyNov_CTFD?color=green&label=size&style=for-the-badge)
  
  <p>Follow us on</p>
  <a href="https://www.linkedin.com/company/hacky-nov/">Linkedin</a>
  •
  <a href="https://twitter.com/HackyNov">Twitter</a>
  •
  <a href="https://discord.gg/JGue7PhV">Discord</a>
  •
  <a href="https://www.twitch.tv/hackynov">Twitch</a>
  •
  <a href="https://www.youtube.com/@Hackynov">Youtube</a>
</div>

---

## Contact us

Pseudo : [v4ss](https://github.com/v4ss)<br/>
Pro : [Florian Allione](https://www.linkedin.com/in/florian-allione-40879817a/)

Pseudo : [33hig](https://github.com/33hig)<br />
Pro : [Rayan Guerroumi](https://www.linkedin.com/in/rayan-guerroumi-303645193/)

## Challenges

| Challenge name                                                                                 | Category   | Author                                                          | Description                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [TutoBlockchain](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/TutoBlockchain)     | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Tout est dit sur la page :) A vous de jouer !                                                                                                                                                                                              |
| [The Lost Treasure](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/TheLostTreasure) | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Vous allez devoir utiliser des fonctions spécifiques du contrat intelligent pour trouver et récupérer un coffre submergé au fond de l'océan ... Déplacez-vous à l'endroit indiqué par la carte pour réussir le challenge.                  |
| [Keccak](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/Keccak)                     | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Votre mission est de devenir propriétaire de ce contrat intelligent. Sa propriété est protégée par un mécanisme de vérification unique basé sur le hashage et la connaissance de la Blockchain.                                            |
| [Fightoo](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/Fightoo)                   | Blockchain | [33hig](https://www.linkedin.com/in/rayan-guerroumi-303645193/) | Vous allez devoir parier sur des combats et gagner 10 fois d'affilé ! Vous avez intérêt à être très chanceux ...                                                                                                                           |
| [Auction House](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/AuctionHouse)        | Blockchain | [33hig](https://www.linkedin.com/in/rayan-guerroumi-303645193/) | Votre but est de gagner l'enchère organisée par les pirates de la LockSea. Ils ont amassé un beau butin mais certains de ces pirates ne sont peut-être pas très fidèle à leur équipage. Devenez le topBidder pour remporter le challenge ! |
| [Keccak_2](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/Keccak_2)                 | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Vous allez devoir récupérer un nombre secret en analysant le code du contrat. Votre but est de devenir "owner" du contrat en utilisant vos connaissances sur la Blockchain.                                                                |
| [Storage](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/Storage)                   | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Vous allez devoir récupérer un nombre secret en analysant le code du contrat. Votre but est de devenir "owner" du contrat en utilisant vos connaissances sur la Blockchain.                                                                |
| [Tracker](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/Tracker)                   | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Vous allez devoir récupérer un nombre secret en analysant le code du contrat. Votre but est de devenir "owner" du contrat en utilisant vos connaissances sur la Blockchain.                                                                |
| [Writer](https://github.com/v4ss/Hacky_Nov_Write_Up_2024/tree/main/Writer)                     | Blockchain | [v4ss](https://www.linkedin.com/in/florian-allione-40879817a/)  | Utilisez vos connaissances sur la blockchain pour devenir owner de l'instance du contrat WriterTarget que vous pourrez déployer sous certaines conditions.                                                                                 |

## Getting started

Before run docker containers, you have to put some environment variables.

Each challenge directories are like this :

```
<challenge-name>/
├─ challenge/
│  ├─ .env.example
│  ├─ <sources-files-and-folders>
├─ contracts/
│  ├─ <foundry-project-for-contracts>
├─ docker-compose.yml
├─ Dockerfile.back
├─ Dockerfile.front
```

You will have to rename the `.env.example` to `.env` and put the two missing variables who are :

- `PRIVATE_KEY` : A wallet private key with no fund, zero tokens and a wallet you will never use ! (it is just to call view functions)
- `SEPOLIA_RPC_URL` : RPC address of a node to interact with Sepolia Network (Check Alchemy or Infura node providers)

At this time, all is good.

You can run the docker container :

```bash
cd <chall-name>
docker compose up -d --build
```

Container running, you can have fun ! :)

Kiss <3
