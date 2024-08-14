---
title: '브라우저 호환성을 고려한 이미지 최적화 (feat. webP, avif)'
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

위 이미지는 실제 2048*1286 사이즈의 이미지를 사용하여 너비 400 픽셀의 이미지 요소를 구현했습니다. 이 이미지의 실제 용량은 무려 1.1MB입니다. 브라우저는 고작 400 픽셀 너비의 이미지를 렌더링하기 위해 1.1MB 크기의 거대한 이미지를 요청하게 됩니다. 이미지의 용량이 클수록 네트워크 요청 시간은 길어지고, 사용자들은 화면이 렌더링될 떄까지 더 긴 시간을 기다려야 하게 되므로 사용자 경험을 해치게 되겠죠.


# 이미지 포맷의 종류와 특성

참고글
- https://gusrb3164.github.io/web/2021/11/26/browser-image-optimzing/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
- https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types