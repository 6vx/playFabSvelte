# PlayFab + Svelte

![playfabsvelte logo](https://deathmettastorage.s3.us-west-2.amazonaws.com/files/playfabsveltelogo128.png)

### Every route in sveltekit IS a component

Mix together components to achieve the functionality you need.

## [live example](https://metta.d3nvj95fro2i68.amplifyapp.com/)


This project is meant to be used as an example for anyone trying to figure out how to use Svelte and PlayFab together. 

Svelte is easy. PlayFab is cool and free. This seems practical. 

If you've made a barebones component that covers a method I haven't already made (or just implemented yours better/more cleanly/more easily) please fork and make a pull request. 

Deviations from the SvelteKit Skeleton Project Template will be listed below.

---

## Svelte Local Storage Store

> https://github.com/joshnuss/svelte-local-storage-store

    npm install svelte-local-storage-store

This puts your svelte store into local storage, I use this to maintain userdata between navigations.

Remember when developing that if you change a variable in storage you'll need to clear your cache to see the changes (right click refresh with dev tools open in Microsoft Edge, for example).

---

## Static Adapter

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

AWS doesn't autodetect SvelteKit projects, and requires changing of the default build directory from '/' to 'build'

Besides this it's flawless. Deploying from github should be easy for most providers. 

---

## PlayFab Script

> https://blog.playfab.com/blog/playfab-now-serving-javascript-sdk-via-cdn/

Don't know how to get npm playfab-web-sdk working tbh. And this saves bandwidth. So win win. 

Wouldn't mind having some autocomplete in the editor but this is easier than trying to figure out webpack or babel or whatever rn. Ain't nobody got time for that.

---

## Project Structure

> add src/lib

I love the lib way of doing things, never go back. Haters that want to old component folder are out their minds. 

---

## Change the titleId

> TitleId = "#####"

Change the titleid in /lib/localStore.js to match your project's titleId.

---

# Contribution Guidelines

---

## boiler plate components for static svelte site

Examples for copying / learning how to use playfab or svelte. 

If a component is demonstrating something new for the first time it should contain lots of comments and very descriptive variable and method names. 

---

## cloudScript

When using cloudscript handlers all script should be available as a comment at the bottom of the component for someone to copy and add to their own revision.

