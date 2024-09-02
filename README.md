
# ```Probablistic Graphical Models Virtual Laboratory```

This is a virtual lab designed to ease the learning curve of Probablistic Graphical Models with the help of animations and consise theory. The web app is fully mobile frindly and is supported on all devices.

## Tech Stack

**Frontend:** React, TailwindCSS

**Backend:** Express, Node, Nodemon

**Database:** MongoDb

## Commiting Code of Conduct

> [!NOTE]
> #### Make sure you pull the code first before commiting to the repo

If you already have the code on your system and you want to commit your changes
```bash
git pull origin main
git push -u origin main
```

## Installation

> [!Note]
> #### make sure you have Node installed in your system with the latest version

Clone the project

```bash
git clone 'https://github.com/KushalHarsora/pgm_vlab.git'
```

Go to the project directory

```bash
  cd pgm_vlab
```

#### Setting up Frontend

Go to frontend directory and install dependencies

```bash
cd frontend
npm install
```

To run the frontend run the following command

```bash
npm run dev
```

#### Setting up Backend

Go to backend directory and install dependencies

```bash
cd backend
npm install
```
Create a env file with following fields

```env
PORT = 5000
CONNECTION_STRING = <your mongodb connection string>
```

To run the backend server run the following command

```bash
npm run dev # development server
npm start # prod server
```
