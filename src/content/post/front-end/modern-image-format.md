---
title: "브라우저 호환성을 고려한 이미지 최적화 (feat. webP, avif)"
description: 현대적인 이미지 포맷을 활용하여 웹 성능을 최적화하는 방법을 알아봅니다.
date: 2024-08-14
type: Post
---

웹 성능을 향상시키기 위해 이미지를 최적화하는 방법에는 여러가지가 있습니다. 오늘은 그 중에서 현대적인 이미지 포맷을 사용하여 이미지를 최적화하는 방법에 대해 알아보겠습니다.

# 이미지 포맷의 종류와 특성

### 1) png

- 파일 포맷 : Portable Network Graphics
- MIME type : `image/png`
- 파일 확장자 : `.png`

PNG는 원본 이미지의 정확한 재현이 필요하거나 투명도가 요구될 때 JPEG보다 선호됩니다. PNG 포맷은 무손실 압축 방식을 사용하므로 압축 시 모든 원본 데이터를 유지합니다. 중요한 정보가 손실되지 않기 때문에 웹 사이트에서 디테일한 그래픽과 차트를 표시할 때 적합합니다.

#### Can I use png?

<img src="/images/post/front-end/modern-image-format/04.png"/>
<img src="/images/post/front-end/modern-image-format/03.png"/>

전통적인 이미지 포맷 답게 대부분의 브라우저를 지원하고 있는 모습입니다. 놀랍게도 아주 오래된 인터넷 익스플로러 6버전 이하에서는 지원하지 않는 것을 볼 수 있네요. 다행히도 인터넷 익스플로러 6버전 이하는 글로벌 사용량이 0%로 나오네요.

### 2) jpeg (jpg)

- 파일 포맷 : Joint Photographic Expert Group image
- MIME type : `image/jpeg`
- 파일 확장자 : `.jpg`, `.jpeg`, `.jfif`, `.pjpeg`, `.pjp`

JPEG는 1980년대 후반과 1990년대 초반에 파일 포맷을 표준화한 국제 전문가 단체인 Joint Photographic Experts Group의 약자입니다.

JPEG 파일은 최대 24비트 색상을 지원하며, 간편한 저장과 전송을 위해 손실 압축 방식으로 이미지를 저장합니다. 일상적인 사용에는 큰 문제가 없지만 원본 이미지의 품질이 훼손될 수 있다는 단점이 있습니다.

손실 압축이 필요한 정지 이미지에 적합하며(현재 가장 인기 있음), 이미지의 정밀한 재현이 필요한 경우에는 PNG를, 더 나은 재현과 높은 압축률이 필요한 경우에는 WebP 또는 AVIF를 사용하는 것이 좋습니다.

#### jpeg와 jpg의 차이?

사실상 동일한 이미지 파일 포맷입니다. 둘 다 "Joint Photographic Experts Group"에서 개발한 이미지 압축 표준을 기반으로 하며, 동일한 방식으로 이미지를 압축하고 저장합니다. 차이점은 파일 확장자의 길이에 있습니다.

- JPG: Windows의 초기 버전에서 파일 확장자가 3자리에 제한되어 있었기 때문에 "JPEG"에서 "E"를 생략한 "JPG"가 사용되었습니다.
- JPEG: Mac이나 Unix 시스템에서는 3자 제한이 없었기 때문에 "JPEG"를 사용했습니다.

#### Can I use jpeg?

JPEG 파일은 PNG와 마찬가지로 대부분의 브라우저, 소프트웨어, 앱과 호환되는 가장 보편적인 이미지 파일 포맷입니다. (Can I Use에서 내용을 찾아볼 수 없음)

### 3) webp

- 파일 포맷 : Web Picture format
- MIME type : `image/webp`
- 파일 확장자 : `.webp`

이미지와 애니메이션 이미지 모두에 탁월한 선택입니다. VP8 비디오 포맷을 기반으로 한 이미지 포맷으로, 손실 및 무손실 압축, 애니메이션, 알파 투명도를 지원합니다. WebP는 일반적으로 JPEG, PNG, GIF보다 더 나은 압축을 제공하며, 이들을 대체하기 위해 설계되었습니다. AVIF와 JPEG XL은 WebP를 대체하기 위해 설계된 포맷입니다. AVIF는 약간 더 나은 압축을 제공하지만, 브라우저 지원이 부족하고 점진적 렌더링(progressive rendering)을 지원하지 않습니다.

#### Can I use webp?

<img src="/images/post/front-end/modern-image-format/05.png"/>
<img src="/images/post/front-end/modern-image-format/06.png"/>

'Can I Use'를 살펴보니 전세계 사용량 기준으로 98.52%의 환경이 webP를 지원하는 브라우저 환경임을 알 수 있습니다.

### 4) avif

- 파일 포맷 : AV1 Image File Format
- MIME type : `image/avif`
- 파일 확장자 : `.avif`

AV1 비디오 포맷을 기반으로 한 현대적인 이미지 포맷입니다. AVIF는 일반적으로 WebP, JPEG, PNG, GIF보다 더 나은 압축을 제공하며, 이들을 대체하기 위해 설계되었습니다. 높은 색상 깊이, 애니메이션 프레임, 투명도 등을 지원합니다.

#### Can I use avif?

<img src="/images/post/front-end/modern-image-format/02.png"/>
<img src="/images/post/front-end/modern-image-format/01.png"/>

> Since January 2024, this feature works across the latest devices and major browser versions.

2024년 1월에 최신 기기와 주요 브라우저의 최신 버전에서 작동한다고 하는데, 표준적인 웹 환경에서 전반적으로 지원되기 시작한지 얼마 안 된 따끈따끈한 이미지 형식이라는 걸 알 수 있습니다.

# \<picture>로 브라우저 환경에 맞는 이미지 제공하기

해상도, 미디어 쿼리, 특정 이미지 포맷 지원 여부를 기반으로 사용자 에이전트가 사용자에게 어떤 이미지 리소스를 제공할지 제어하는 반응형 이미지 방법입니다.

`<picture>` HTML 요소는 다양한 디스플레이/장치 시나리오에 맞춰 대체 이미지 버전을 제공하기 위해 `<source>` 요소와 `<img>` 요소를 포함합니다. 브라우저는 각 `<source>` 요소를 평가해 최적의 이미지를 선택하며, 지원되지 않는 경우 `<img>` 요소의 src 속성에 지정된 URL을 사용합니다.

### Can I Use \<picture>?

<img src="/images/post/front-end/modern-image-format/07.png"/>
<img src="/images/post/front-end/modern-image-format/08.png"/>

'Can I Use'에서 `<picture>` 태그의 브라우저 호환성을 살펴보니 일부 브라우저에서 지원하지 않는 것을 볼 수 있습니다. 그렇다면 이미지 브라우저 호환성을 위해 사용하는 `<picture>`가 모든 브라우저를 커버하지 않는다면 이게 무슨 소용인가? 할 수 있겠지만, 이런 경우를 위해 `<img>` 태그가 중요한 역할을 한다고 합니다. `<img>` 요소는 `<picture>` 요소를 지원하지 않는 브라우저에서도 사용되므로, 브라우저 호환성에 대해 걱정할 필요가 없습니다.

### \<img>의 목적

1. 이미지의 사이즈나 다른 속성들을 표한하기 위해
2. `<source>`로 제공된 이미지 중 사용가능한 것이 없을 때 대체 이미지로 사용하기 위해

### media 속성

media 속성은 미디어 조건을 지정합니다. `<source>`의 미디어 조건이 거짓으로 평가되면, 브라우저는 이를 건너뛰고 `<picture>` 내의 다음 요소를 평가합니다.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### srcset 속성

크기 또는 디스플레이의 픽셀 밀도에 따라 선택할 수 있는 이미지 목록을 제공합니다. 표준 해상도와 고밀도 해상도에서 사용될 이미지를 각각 지정할 수 있습니다.

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

### type 속성

`<source>` 요소의 srcset 속성에 있는 리소스 URL에 대한 MIME 타입을 지정합니다. 사용자 에이전트가 지정된 타입을 지원하지 않으면, `<source>` 요소는 건너뛰어집니다.

```html
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="photo" />
</picture>
```

# 글을 맺으며

이렇게 'Can I Use' 홈페이지를 자세히 뜯어본 것은 처음인데요. 현대적인 이미지 포맷을 활용하여 웹 성능을 최적화하고 브라우저 호환성을 고려하여 개발하는 방법에 대해 알게 되었습니다. 웹 개발자로서 다양한 브라우저 환경을 고려하여 모든 사용자들에게 최적의 사용자 경험을 제공하는 것이 중요하다는 것을 새삼 깨달았습니다. 앞으로 이미지를 다룰 떄는 오늘 공부한 내용을 적용하여 사용자에게 더 나은 경험을 제공할 수 있도록 해야겠습니다!

<br/>
<br/>
<br/>
참고글

- https://gusrb3164.github.io/web/2021/11/26/browser-image-optimzing/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
- https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
- https://www.adobe.com/kr/creativecloud/file-types/image/raster/jpeg-file.html
