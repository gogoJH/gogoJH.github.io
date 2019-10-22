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

###  TypeScript의 장점

#### 정적 타입 지원 
자바스크립트는 코드상으로는 어떤 타입의 인수를 전달하여야 하는지, 어떤 타입의 반환값을 리턴해야 하는지 명확하지 않다.
```
function  sum(a,  b)  {  return  a  +  b;  }  

sum('x',  'y');  // 'xy' 
```

아마도 개발자의 의도는 숫자의 합을 구하려 한 것이였겠지.
dlfj그래서 TypeScript wjdq
```
function  sum(a:  number,  b:  number) {  
	return  a  +  b;  
}  

sum('x',  'y');  
// error TS2345: Argument of type '"x"' is not 
assignable to parameter of type 'number'.
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwMTYwODQ5NjVdfQ==
-->