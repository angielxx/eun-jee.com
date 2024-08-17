---
title: "브라우저 호환성을 고려한 이미지 최적화 (feat. webP, avif)"
description: 현대적인 이미지 포맷을 활용하여 웹 성능을 최적화하는 방법을 알아봅니다.
date: 2024-08-14
type: Post
---

웹 성능을 향상시키기 위해 이미지를 최적화하는 방법에는 여러가지가 있습니다. 오늘은 그 중에서 현대적인 이미지 포맷을 사용하여 이미지를 최적화하는 방법에 대해 알아보겠습니다.

# 이미지 최적화란?

> 최적화란 **이미지의 품질은 유지하면서 파일 크기를 줄여 파일이 빠르게 로드되도록 만드는 프로세스**를 말합니다. 사이트에서 사용하려고 업로드하기 전에 최적화하지 않은 이미지는 사이트의 로드 속도를 떨어뜨려 방문자가 사이트에서 나가는 원인이 될 수 있습니다.

출처 : https://wordpress.com/ko/support/media/image-optimization/

# 최적화하지 않은 이미지의 예

그렇다면 어떤 경우에 최적화하지 않은 이미지라고 할 수 있을까요?

<img src="https://en-support.files.wordpress.com/2018/01/truck-in-field.jpeg" width="400"/>

위 이미지는 실제 2048\*1286 사이즈의 이미지를 사용하여 너비 400 픽셀의 이미지 요소를 구현했습니다. 이 이미지의 실제 용량은 무려 1.1MB입니다. 브라우저는 고작 400 픽셀 너비의 이미지를 렌더링하기 위해 1.1MB 크기의 거대한 이미지를 요청하게 됩니다. 이미지의 용량이 클수록 네트워크 요청 시간은 길어지고, 사용자들은 화면이 렌더링될 떄까지 더 긴 시간을 기다려야 하게 되므로 사용자 경험을 해치게 되겠죠.

# 이미지 포맷의 종류와 특성

웹 개발 시 가장 많이 사용되는 이미지 포맷들에 대해 살펴보고, 특히 그 중에서

### 1) png

- 파일 포맷 : Portable Network Graphics
- MIME type : `image/png`
- 파일 확장자 : `.png`

PNG는 원본 이미지의 정확한 재현이 필요하거나 투명도가 요구될 때 JPEG보다 선호됩니다. PNG 포맷은 무손실 압축 방식을 사용하므로 압축 시 모든 원본 데이터를 유지합니다. 중요한 정보가 손실되지 않기 때문에 웹 사이트에서 디테일한 그래픽과 차트를 표시할 때 적합합니다.

#### Can I use png?

<img src="/public/images/post/front-end/modern-image-format/04.png"/>
<img src="/public/images/post/front-end/modern-image-format/03.png"/>

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

#### Can I use webp?

<img src="/public/images/post/front-end/modern-image-format/05.png"/>
<img src="/public/images/post/front-end/modern-image-format/06.png"/>

### 4) avif

- 파일 포맷 : AV1 Image File Format
- MIME type : `image/avif`
- 파일 확장자 : `.avif`

높은 성능과 로열티 없는 이미지 포맷으로, PNG나 JPEG보다 훨씬 더 나은 압축을 제공하며, 높은 색상 깊이, 애니메이션 프레임, 투명도 등을 지원합니다.

#### Can I use avif?

<img src="/public/images/post/front-end/modern-image-format/02.png"/>
<img src="/public/images/post/front-end/modern-image-format/01.png"/>

'Can I Use'에서 살펴본 avif의 브라우저 지원 여부에서 가장 구 버전의 chrome 버전을 아래와 같이 확인해보면 2020년에 출시된 버전으로 매우 최신 브라우저부터 지원하고 있는 것을 확인할 수 있습니다.

# 이미지 포맷 종류별 비교

참고글

- https://gusrb3164.github.io/web/2021/11/26/browser-image-optimzing/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
- https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
- https://www.adobe.com/kr/creativecloud/file-types/image/raster/jpeg-file.html
