---
layout:     post
title:      "2019.10.06 prototype이란?"
subtitle:   "다시보는 JS"
date:       2019-06-25
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
![enter image description here](/img/home-bg-geek.jpg)

- [[Prototype]] 
-
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE5MTM2ODU3OSwxMzk5MDIyODMsMzM5Mj
k4NzIwLC0xNTE4MTA3MjA2LDE2NDI4NjE5MTksMjEwNzI4OTM0
OCwtMTAyMzg1OTA5M119
-->