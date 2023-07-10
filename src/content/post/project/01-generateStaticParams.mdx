---
title: 배포 후 동적 라우팅 페이지 접근시 404 에러 (feat. generateStaticParams 사용법)
description: generateStaticParams로 동적 라우팅에 대응하는 params를 생성하여 빌드 시 정적 파일 생성하기
date: 2023-06-19
type: Post
---

> 이 글은 Next.js 13 버전을 기준으로 설명하고 있습니다.

# 문제 상황

next.js를 사용하여 현재 글을 보고 계신 기술 블로그 정적 웹 사이트를 개발했습니다.

개발 완료 후 처음에는 vercel로 배포하여 어플리케이션이 잘 동작하는지 확인하고, AWS를 사용하여 직접 배포하는데에 도전했습니다. AWS의 S3로 배포하니 개발 환경과 vercel로 배포했을 때는 잘만 접속되던 `.../post/[...slug]` 와 같은 경로에 접근하면 404에러가 발생했습니다!

# 진단

먼저 현재 이 프로젝트가 각 블로그 글을 보여주는 페이지를 ‘정적 생성’하여 ‘정적 웹 호스팅’을 하고 있다는 사실이 중요합니다. 모든 경로에 대해 정적 파일 (html, css, js) 파일을 미리 생성해놓고 그 파일들을 가지고 정적 웹 사이트를 만들어 호스팅하는 것입니다.

여기서 정적으로 페이지를 생성한다는 뜻은 어떤 페이지에 대해 정적인 파일 즉, html 파일을 미리 생성하고 해당 페이지에 대한 요청이 들어오면 미리 생성해놓은 html 파일을 클라이언트에게 보여준다는 것입니다.

> 그렇다면 지금 404 에러가 발생하는 경로들에 대해 html파일을 못 가져오는 건 아닐까?

이러한 ‘킹리적 갓심’으로 html 파일이 모두 있는지 확인을 했습니다. 그 전에 Next.js에서 정적 파일을 생성하는 과정인 ‘Static Exports’ 기능에 대해 알아보겠습니다.

### Static Exports

next에서는 static exports를 통해 HTML, CSS, JS의 정적 어셋을 가지고 정적 배포 및 호스팅 할 수 있도록 지원합니다. (static export는 모든 경로에 대해 정적 파일을 생성하는 것입니다.)

> When running `next build`, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing the bundle size and enabling faster page loads.

위에 인용한 공식문서의 설명대로 next에서는 react와 달리 `next build` 를 실행하면 각 경로에 맞는 HTML 파일을 생성합니다.

static exports를 통해 생성된 정적 파일들은 `./out` 폴더 안에 생성됩니다. html이 모두 있는지 확인하기 위해 `./out` 를 살펴봤습니다.

### html 파일이 모두 잘 생성되었나?

제 프로젝트의 정적 파일이 생성된 (static export된) out 폴더에 어떤 html 파일들이 있는지 살펴봤습니다.

![/images/post/generateStaticParams_01.png](/images/post/generateStaticParams_01.png)

현재 생성된 html 파일이 `404.html`, `category.html`, `guestbook.html`, `index.html` 의 네 개 뿐이었습니다. 각 포스팅 페이지에 해당하는 html 파일은 다른 폴더를 뒤져봐도 찾을 수 없었습니다!

그러니 **‘이 글의 html 파일을 달라’**고 요청을 보내면 **‘해당 파일은 없어’**라고 404 에러가 발생하는 게 당연했죠…!

결론적으로 현재 404 에러가 나고 있는 모든 경로들에 대해서 html 파일이 생성되야하는 것입니다.

# 해결방법

각 포스팅 페이지는 `/post/[...slug]`와 같은 Catch-all Segments 방식([공식문서](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments))으로 동적 라우팅 되고 있고, `/post/[...slug]`에 해당하는 모든 url이 404 에러가 나고 있었습니다.

그래서 일단 동적 라우팅 문제라고 생각하고 공식문서를 살펴봤더니 `generateStaticParams`라는 함수를 발견했습니다. 그 설명을 읽어보니 현재 문제를 해결하기 위해 제가 딱 필요로 하는 기능을 제공하고 있었습니다!

### `generateStaticParams`이란?

`generateStaticParams`에 대해 설명하고 있는공식문서를 읽어봅시다.

> The `generateStaticParams` function can be used in combination with [dynamic route segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) to **[statically generate](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#static-rendering-default)** routes at build time instead of on-demand at request time.

> `generateStaticParams` 함수는 동적 라우팅과 함꼐 사용하여 페이지에 대한 각 요청을 받을 때마다 경로를 생성하는 것이 아닌, 빌드 타임에 정적으로 경로를 생성할 수 있습니다.

여기서 **‘페이지에 대한 각 요청을 받을 때마다 경로를 생성’**하는 방식과 **‘빌드 타임에 정적으로 경로를 생성’**하는 방식은 각각 **SSR** 방식과 **SSG** 방식입니다. (SSG, SSR, CSR의 개념에 대해 공부하셨다면 바로 이해하실거에요.)

**‘페이지에 대한 각 요청을 받을 때마다 경로를 생성’**하는 방식은 어떤 페이지에 대해 요청이 들어오면 그 때 페이지를 생성하여 클라이언트에게 전송하는 것이고, **‘빌드 타임에 정적으로 경로를 생성’**하는 방식은 미리 빌드 타임에 페이지를 생성해놓고, 어떤 요청이 들어오면 그 요청에 맞는 페이지(미리 만들어놓은)를 클라이언트에게 전송하는 것입니다.

### `generateStaticParams`이 하는 일

> `generateStaticParams` should return an array of objects where each object represents the populated dynamic segments of a single route.

> `generateStaticParams`는 객체들을 담은 배열을 반환해야 한다. 각 객체는 한 경로의 완성된 dynamic segments를 나타낸다.

이렇게 빌드 타임에 미리 각 경로에 해당하는 html 파일을 생성하기 위해 `generateStaticParams`은 동적 라우팅으로 만들어지는 모든 경로들을 계산하고, 그 경로들의 params 목록을 반환해줍니다.

빌드 타임시 (`next build`) `generateStaticParams`이 레이아웃이나 페이지를 생성하기 전에 먼저 실행되어 params 목록을 만들고, 그 params를 가지고 해당 라우팅으로 어떤 경로가 생성될 지 추적하여 각 경로에 맞는 html을 생성하는 것입니다.

예를 들자면, `/post/[slug]`의 형식으로 동적 라우팅 하고 있을 때 `generateStaticParams` 을 사용하면 `/post/[slug]`으로 라우팅되는 모든 실제 경로들을 계산해서 `[slug]`라는 dynamic segment 대응되는 params의 목록을 담은 배열을 반환합니다.

아래는 route 타입에 따라 **`generateStaticParams`** 가 어떤 형식을 반환해야하는지를 나타냅니다. (공식 문서 발췌)

| Type                      | Example Route                  | generateStaticParams Return Type        |
| ------------------------- | ------------------------------ | --------------------------------------- |
| Single Dynamic Segment    | /product/[id]                  | { id: string }[]                        |
| Multiple Dynamic Segment  | /products/[category]/[product] | { category: string, product: string }[] |
| Catch-all Dynamic Segment | /products/[...slug]            | { slug: string[] }[]                    |

참고로 `generateStaticParams`는 Pages 디렉토리를 사용하는 라우터에서는 `getStaticPaths`가 같은 기능을 수행합니다.

## 사용법

Single Dynamic Segment의 예시를 살펴보면,

`.../product/[id]` 의 형식일 때

```jsx
// app/product/[id]/page.tsx

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
```

이렇게 `[id]` 라는 dynamic segment가 1, 2, 3의 세 가지가 있고, 여기서 생성된 params는 Page 컴포넌트의 props로 받아 컴포넌트 내에서 사용할 수 있습니다.

```jsx
// app/product/[id]/page.tsx

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  // ...
}
```

# 해결!

아래는 Catch-all Dynamic Segment의 경우 `generateStaticParams`를 사용하는 예시입니다. 제 프로젝트와 같은 경우, `/post/[...slug]` 라는 Catch-all Dynamic Segment를 사용하고 있었기에 아래의 예시처럼 적용하여 문제를 해결했습니다!

```jsx
// app/product/[...slug]/page.tsx

export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }];
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/a/1
// - /product/b/2
// - /product/c/3
export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  // ...
}
```

짠! `generateStaticParams` 적용 후 빌드하고 나니 각 경로에 맞는 html 파일들이 새롭게 생성된 것을 확인할 수 있었습니다.

![/images/post/generateStaticParams_02.png](/images/post/generateStaticParams_02.png)

# 출처

모든 내용은 Next.js 13버전의 공식문서를 참고했습니다. 자세한 내용은 공식문서를 참고해주세요.

[https://nextjs.org/docs/app/building-your-application/deploying/static-exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

[https://nextjs.org/docs/app/api-reference/functions/generate-static-params](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
