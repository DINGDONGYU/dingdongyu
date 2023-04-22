/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93ec6f0687626f2679ddc119f5434713"
  },
  {
    "url": "assets/css/0.styles.e8af3c32.css",
    "revision": "9aa12aed979e6750accb15898a777bcf"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.f2f3341e.js",
    "revision": "c7d82baac79e89387528290fdee2d57d"
  },
  {
    "url": "assets/js/10.7321b379.js",
    "revision": "4edb8a15bcb0dc9262fe81f5dd5ce70c"
  },
  {
    "url": "assets/js/11.802d4622.js",
    "revision": "2b8e4a8906eab0b051968aa36a6872bf"
  },
  {
    "url": "assets/js/12.71f02b81.js",
    "revision": "8fb8403e6dd68de6f04d667160685a4d"
  },
  {
    "url": "assets/js/13.555e55a8.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.e96af6c3.js",
    "revision": "7d5adaaf2e449ab6248b4c69383d1507"
  },
  {
    "url": "assets/js/15.41e60f71.js",
    "revision": "116203cd3252e03bc40acb4af122a2dc"
  },
  {
    "url": "assets/js/16.b7d73084.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.547d1447.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.3149ac71.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
  },
  {
    "url": "assets/js/4.07aba6d5.js",
    "revision": "1635772200479304da90dc68a39da7cb"
  },
  {
    "url": "assets/js/5.988cdfa4.js",
    "revision": "138b043e32257d17317fed05b50c0d12"
  },
  {
    "url": "assets/js/6.482c2e36.js",
    "revision": "714e1558b70b575464d8a588f99601f7"
  },
  {
    "url": "assets/js/7.4c06db98.js",
    "revision": "0cd0e9ab168b858aa7497a1a02692651"
  },
  {
    "url": "assets/js/8.18b83733.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.5e838a68.js",
    "revision": "dc395cfeacd6f5dc61675958cd2999d4"
  },
  {
    "url": "assets/js/app.2788aa5b.js",
    "revision": "3de1e4406abef04584ab161856d63785"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "0411ba9e8d77f1a91dfb47e2ffe5bb4b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ac3f944ed8ff200258df90b7724c82d6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d38273c03a379f5eaabfa16e6e8fdd08"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9c97b09996251359c217847cb9cf2aed"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e55eb5c63d85b94794b0220d3b51cbde"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "3f96b562cc95cde509b89eca5985b096"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "8e3a3eca585e4faceb7b145ae8c3e586"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "2406b6ac3560f25074e75c7457ebbace"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e3eb695c6b9b910713a21a0069ce295b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "83a3868583b9279e5923f371675e20d8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0037a3c391dd55307ad6f1f9eaf9e615"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b894fc3b7d011e7197e0c2896aff4386"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2139de5721db7ce92031ffce3659e06e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "be326e4f21909535e7085b88acfc2b67"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "755a8a0c9d6ba79915a2c782c8639f29"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "db50e99d5fb07f0ab6ee2f203c617926"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "74466461de6f34c533a959cb12c7ed94"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6bd0f3fe659d551593a0abc99f8be662"
  },
  {
    "url": "timeline/index.html",
    "revision": "51b2feb477864f52b139b087990c27e8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "3aac852785e430c9bc2dc670c62594c1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2813d2ced571e8bbf0020d9bb6e7cb25"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "9749bb3ba518e37c2f752b30dec75fe1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cf6416d832668d19c145576c7f52797e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6332eab6c02a6e340d722809b4010d5d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
