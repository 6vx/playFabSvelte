# playFab Svelte

## [example](https://metta.d3nvj95fro2i68.amplifyapp.com/)

### adjustments from skeleton sveltekit project

> https://github.com/joshnuss/svelte-local-storage-store

    npm install svelte-local-storage-store

I use this in everything because I never wanted to figure out how to finnagle a store into localstorage.

> https://github.com/sveltejs/kit/tree/master/packages/adapter-static

First run:

    npm i -D @sveltejs/adapter-static@next

Then add to svelte.config.js:

    // svelte.config.js
    import adapter from '@sveltejs/adapter-static';
    export default {
        kit: {
            adapter: adapter({
                // default options are shown
                pages: 'build',
                assets: 'build',
                fallback: null
            })
        }
    };



> https://blog.playfab.com/blog/playfab-now-serving-javascript-sdk-via-cdn/

Personally I have a wonky dev experience with the NPM package for this and I use the CDN to pull it in at runtime. You do lose all that autocomplete action in the editor though which is kind of frustrating. Please contact me if you know how to get sveltekit and playfab to play nice together installed. 

> src/lib

I love the lib way of doing things and don't know why it was taken out of the default application. I suppose since this is the skeleton template. Well, let's put some meat back on them bones, y'hear?

> TitleId

Change the title id in src/lib/localStore.js to your titleId.

## boiler plate components for static svelte site

I'd like to make this super barebones and allow people (or just myself) to simply swap in their own playFab game ID and get all the functionality of playFab right away. 

I like to build static sites only, I'll be making this with that in mind. I use AWS Lambda's in my normal life but I'll try to use the playFab cloudScripts when possible. They seem to have a limited funcionality and ... Actually now that I think about it...

## cloudScript

Going to put handlers needed to execute into the comments below a components script. That way anyone can just copy the handler into their own cloudScript revision and expect the functionality. Dope. 





# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
