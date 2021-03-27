# Josh CV (Server)

Web solution for my personal curriculum vitae ;)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Josh CV dependencies

```bash
npm install
```
<br/><br/>

## Basic Scripts
<br/>

In the project directory, you can run:
<br/><br/>

### Formating the code

```bash 
npm format
```
Runs the formatter mode engines by Prettier which searches for {.js} files and fix wrong format to correct format 

<br/><br/>

### Starting server in Development Mode
```bash 
npm start:dev
```
Runs the app in the development mode.
Open [http://localhost:6000](http://localhost:6000) to view it in the console.
The server will reload if you make edits.
You will also see any lint errors in the console.

<br/><br/>

### Starting server in Production Mode

```bash 
npm run start
```
Enables the production mode which prevent the server to re-start

<br/><br/>
<br/><br/>

## Avaible scripts with PM2

Enables the server for deplyment on a pm2 instance.
Some examples of usage:<br><br>


### For production mode:
```bash
npm run deploy:pm2
```
Runs the production mode with ecosystem file that is previosly config in package.json file<br><br>


### Logging server:
```bash 
npm run log:pm2
```
Runs the pm2 log comand to watch the process that is being served with the current project<br><br>


### Stop server:
```bash 
npm run stop:pm2
```
Runs the pm2 stop comand & stops only this instance <br><br>


### Retart server:
```bash 
npm run restart:pm2
```
Runs pm2 restart comand only for this instance <br><br>


### Monit server:
```bash 
npm run monit:pm2
```
Runs pm2 monit comand 


<br/><br/><br/><br/>
## License
[MIT](https://choosealicense.com/licenses/mit/)