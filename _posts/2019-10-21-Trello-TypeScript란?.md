---
layout:     post
title:      "2019.10.21 TypeScript란?"
subtitle:   "개발자를 위한 TypeScript"
date:       2019-10-21
author:     gogoJH
header-img: img/home-bg-geek.jpg
catalog: true
tags:
    - 개발일기
    - JS
    - Trello
---
![enter image description here](https://images.velog.io/post-images/dongwon2/95f04080-3845-11e9-acb0-ebd80ec9a711/10ei2MOQxAzF7krm-v60wnQ.jpeg)

## TypeScirpt
TypeScript는 Microsoft에서 2012년 발표한 오픈소스로, 정적 타이핑을 지원하며 ES6(ECMAScript 2015)의 클래스, 모듈 등과 ES7의 Decorator 등을 지원한다.

TypeScript는 ES5의 Superset이므로 기존의 자바스크립트(ES5) 문법을 그대로 사용할 수 있다.

---

###  TypeScript의 장점

#### 1. 정적 타입 지원 
자바스크립트는 코드상으로는 어떤 타입의 인수를 전달하여야 하는지, 어떤 타입의 반환값을 리턴해야 하는지 명확하지 않다.
```
function  sum(a,  b)  {  return  a  +  b;  }  

sum('x',  'y');  // 'xy' 
```

아마도 개발자의 의도는 숫자의 합을 구하려 한 것이였겠지.

이러한 상황 때문에 TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있다.
```
function  sum(a:  number,  b:  number) {  
	return  a  +  b;  
}  

sum('x',  'y');  
// error TS2345: Argument of type '"x"' is not 
assignable to parameter of type 'number'.
```

이는 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅을 쉽게 한다.

---

#### 2. 도구의 지원

TypeScript를 사용하는 이유는 여러가지 있지만 가장 큰 장점은 IDE(통합개발환경)를 포함한 다양한 도구의 지원을 받을 수 있다는 것이다. IDE와 같은 도구에 타입 정보를 제공함으로써 높은 수준의 인텔리센스(IntelliSense), 코드 어시스트, 타입 체크, 리팩토링 등을 지원받을 수 있으며 이러한 도구의 지원은 대규모 프로젝트를 위한 필수 요소이기도 하다.

---

#### 3. 강력한 객체지향 프로그래밍 지원

인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍 지원은 크고 복잡한 프로젝트의 코드 기반을 쉽게 구성할 수 있도록 도우며, Java, C# 등의 클래스 기반 객체지향 언어에 익숙한 개발자가 자바스크립트 프로젝트를 수행하는 데 진입 장벽을 낮추는 효과도 있다.


<!--stackedit_data:
eyJoaXN0b3J5IjpbNzk5Njc0NzMzXX0=
-->