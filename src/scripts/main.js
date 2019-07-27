import { foo } from "./foo";
import MyElement from './my-element';

import '../scss/main.scss'


console.log(`Hello {{version}} ${foo("bar")}`);

async function cacheImage() {
  const cache = await caches.open('App__{{version}}')
  await cache.addAll(['static/images/thumbnail.jpg'])
}

cacheImage()

document.querySelector("#main-container").addEventListener("wobble", event => {
  console.log(event.detail.m, event.detail.s)
})