# intro-to-express

## Preparing your environment
Make sure you have installed [Node.js](https://nodejs.org/en/download/). If not you can install [here](https://nodejs.org/en/download/).

Node.js comes with something called NPM (Node Package Manager) that we will use manage our node modules. You can check if you have Node, NPM, and Git installed by running these commands (one at a time):

```
node -v
npm -v
git --version
```

Clone this repository
```
git clone https://github.com/kaiz16/intro-to-express.git
cd intro-to-express
```

Open the folder you just cloned in your code editor. You should have a few files already created:
```
.gitignore
server.js
```
We are ignoring `/node_modules` folder in the .gitignore file because we don't want to track the entire folder in our git history, we will create a package.json file, which will allow us to install and save node modules.

Run this from your command line: ```npm init -y```
You should see package.json in your folder.
Now you can install Express library using NPM. To install, simply enter `npm install express`

In your package.json file you should have express listed as dependency:

```
"dependencies": {
  "express": "^4.17.1",
}
```
The number on the right is the version you downloaded. Since we are ignoring node_modules folder in .gitignore, this `dependencies` object in the package.json is a reference used by NPM to re-install the modules your application depends on.
