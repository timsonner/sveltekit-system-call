# SvelteKitSystemCall
Skeleton project with a route that makes a system call using the spawn() function from the child_process module. The route is accessed by hitting the /api.json endpoint. For example: http://localhost:3000/api.json if you have deployed your web server locally. The endpoint will present the terminal output of a directory listing of the project directory. 
<p>tl;dr => the server runs `ls -al` and your browser displays the output.</p>

> Note: Try some other commands, but note that arguments are treated as seperate elements and placed in an array, so `ping -c 10 8.8.8.8` will turn into `ping`, [`-c`, `10`, `8.8.8.8`] when passed as parameters to spawn(). 


## Before running the server

Here is a preemptive purple jelly bean. Congrats! 

```bash
# before running the server
npm install
```
> Note: If you're using GitPod, this is all turn key, including VSCode extensions, and HMR.

## Running a development server

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building a production server

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
