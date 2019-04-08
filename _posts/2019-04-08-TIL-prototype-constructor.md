---
layout:     post
title:      "2019.04.08 __proto__, prototype, constructor"
subtitle:   ""
date:       2019-04-08
author:     gogoJH
header-img: img/post-bg-first.jpg
catalog: true
tags:
    - TIL
    - 개발일기
    - JS
---


<br>
  
# 오늘 한 일

>  prototype, constructor 는 함수만 가지고 있다.
>  `_proto_`는 생성한 생성자의 prototype을 바라본다.
>  class를 쓰면 너무 편하게 prototype chaning 할 수 있다.

<br>

### ProtoType 
  


1.  &nbsp; 생성자만 가질 수 있고 생성될 객체를 사용할 때 사용할 메소드들의 집합


```
function Human (name) {
    this.name = name;
}

Human.prototype.sleep = function() { console.log('sleep')};
```


<br>

### Constructor



1.  &nbsp; 어떤 Instance를 만들어낸 생성자를 바라본다.

```
const steve = new Human('steve');

steve.prototype.construct === Human // true;

```

<br>


### _proto_



1. &nbsp; 날 만든 생성자의 prototype을 바라본다.

```
const steve = new Human('steve');

steve.prototype.construct === Human // true;
steve._proto_ = Human.prototype // true;

```

<br>
  
---



#### coment
&nbsp; 크하하핫 ... 사실 몇 일동안 머리속 정리가 너무 힘들어서..
&nbsp; 새로운 마음으로 .. 하 열심히 해야지 ㅠㅠ

&nbsp; 동기들과 코드리뷰도 진행하고 내가 알고있는 개념을 설명하면서 
&nbsp; 좀더 명확하게 다가오고 있는거 같다.
  

### 끝!