import { foo } from "./foo";

import '../scss/main.scss'

import MyElement from './my-element';

console.log(`Hello {{version}} ${foo()}`);

async function cacheImage() {
  const cache = await caches.open('App__{{version}}')
  await cache.addAll(['static/images/thumbnail.jpg'])
}

cacheImage()