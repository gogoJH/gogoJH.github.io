---
layout:     post
title:      "2019.10.07 prototype이란?"
subtitle:   "다시보는 JS"
date:       2019-10-07
author:     gogoJH
header-img: img/home-bg-geek.jpg
catalog: true
tags:
    - 개발일기
    - JS
    - 프로젝트
---

## 1. prototype이란 ? 

Java, C++과 같은 클래스 기반 객체지향 프로그래밍 언어와 달리 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어이다.

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 **Prototype(프로토타입) 객체** 또는 줄여서 Prototype(프로토타입)이라 한다.

![enter image description here](https://poiemaweb.com/img/printout_student_obj_from_chrome.png)

**Prototype 객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다. 하지만 set 액세스는 허용되지 않는다.**

대신에 __ __proto__ __ 로 부모의 프로퍼티에 접근 할 수 있다 .

## 2. [[Prototype]] vs prototype 프로퍼티
![enter image description here](/img/prototype_1.png)

- [[Prototype]] 

	-   함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
	
	-   **객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우  `Function.prototype`를 가리킨다.**

![enter image description here](/img/prototype_2.png)


- prototype 프로퍼티

	-   함수 객체만 가지고 있는 프로퍼티이다.
	
	-   **함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.**

## 3. constructor 프로퍼티
프로토타입 객체는 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는
자신의 부모가 누군지 알 수 있게 해준다 .
(부모를 막 바꿀 수 있다 .. 못된 놈 .. )

![enter image description here](/img/prototype_4.png)


## 4. prototype 객체의 확장
프로토타입 객체도 객체이므로 일반 객체와 같이 프로퍼티를 추가/삭제할 수 있다. 그리고 이렇게 추가/삭제된 프로퍼티는 즉시 프로토타입 체인에 반영된다.

![enter image description here](/img/prototype_5.png)

위의 예에서는 Person.prototype 객체에 메소드 sayHello를 추가하였다. 이때 sayHello 메소드는 프로토타입 체인에 반영된다. 따라서 생성자 함수 Person에 의해 생성된 모든 객체는 프로토타입 체인에 의해 부모객체인 Person.prototype의 메소드를 사용할 수 있게 되었다.

![enter image description here](https://poiemaweb.com/img/extension_prototype.png)

사실 프로젝트를 진행하면서 객체지향 프로그래밍을 해본 적은 없다.
사용할 일도 그리 많지 않고,,, 현업에서는 어떻게 사용되고 있는지 구
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQzMjMzNjIyNCwtMTUzODU1NDk3Ml19
-->