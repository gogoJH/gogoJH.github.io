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

자바스크립트는 프로토타입이라는 용어를 뗄 수 없다.

그만큼 매우 중요하기에 확실히 이해해야한다.

하지만 자바스크립트  프로토타입은 많은 이들에게 혼란을 주기도 한다.

이유는 천천히 읽어보자.

  

> "자바스크립트의 프로토타입(Prototype)은  무엇인가?"

  

일반적으로 프로토타입(prototype)이란 시제품, 견본 등과 같은 의미로 일반적으로 **원형**이라는 뜻을 가진다.

질문은 "C++, JAVA 에서 Class 란 무엇인가?" 와 같은 맥락이라고 볼 수 있다.

이러한 원천적인 질문의 답은 실질적으로는 "원형" 이라는 일반적인 의미를 벗어나지 않는다.

즉, 자바스크립트에서 프로토타입은 **자신을 만들어낸 객체의 원형**을 뜻한다.

  

만약 반대로 프로토타입은 자신을 통해 만들어질 객체의 원형이라고 생각하고 있다면, 이건 다음 질문에 대한 답이 된다.

  

> "자바스크립트에서 프로토타입(prototype)은 어떻게 사용되는가?"

  

실질적인 자바스크립트 사용 질문으로써, 여기서 나타내는 프로토타입은 **자신을 통해 만들어질 객체의 원형**을 뜻한다.

정확히는 용어로는 프로토타입보다는 프로토타입 프로퍼티(prototype property) 를 의미한다.

prototype 프로퍼티란 아래와 같이 실제 코드에서 볼 수 있는 것을 의미한다.

  

![prototype](https://t1.daumcdn.net/cfile/tistory/99E1F3355ADC0EC616)

  

----------

  

결과적으로 질문에 따른 프로토타입의 의미는 2 가지로 구분했다.

이러한 이유는 자바스크립트 자체의 프로토타입을 표현하는 용어는 두가지로 나뉘어있기 때문이다.

프로토타입의 2 가지 용어는 다음과 같다.

  

-   Prototype Link - 자신을 만들어낸 객체의 원형
-   Prototype Object - 자신을 통해 만들어질 객체의 원형

  

위와 같은 용어들은 예제 코드를 통해 확인해보자.

  

function person() {

  

}

console.dir(person)

  

![prototype](https://t1.daumcdn.net/cfile/tistory/99226B4C5ADC218828)

  

  

위와 같은 결과를 그림으로 표현하면 다음과 같다.

  

![prototype](https://t1.daumcdn.net/cfile/tistory/99E4F84C5ADC20D817)

  

__proto__  - 자신을 만들어낸 객체의 원형과 연결된 속성이다.

constructor  - 생성자로써, 자신을 만들어낸 객체와 연결된 속성이다.

prototype  - 자신을 원형으로 만들어진 새로운 객체들과 연결된 속성이다.

  

person 의 Prototype Object 는 **생성** **당시의 정보를 가진 새로운 객체를 복제하여 생성한다. (아래 예제 참고)**

prototype 프로퍼티와 연결된 Prototype Object 는 person 함수를 통해 생성되는 객체들의 원형이 되는 것이다.

이를 이해하기 위한 예제 코드를 통해 보자.

  

var person = function() {

 this.hp = function() {

 console.log("100");

 }

}

  

person.hp = function() {

 console.log("50");

}

  

var p1 = new person();

  

p1.hp() // 100

  

우리가 원하는 결과는 50 이지만 결과는 100 이다.

**이러한 이유는 Prototype Object 는 생성 당시의 정보를 복제하기 때문이다.**

그림으로 표현하면 다음과 같다.

  

![prototype object](https://t1.daumcdn.net/cfile/tistory/995755445ADC323337)

  

원하는 결과를 위한 예제는 다음과 같다.

  

var person = function() {}

  

person.hp = function() {

 console.log("100");

}

  

person.prototype.hp = function() {

 console.log("50");

}

  

var p1 = new person();

  

p1.hp() // 50  

  

**이것이 가능한 이유는 p1의 원형이 되는 Prototype Object 에 직접 접근했기 때문이다.**

  

----------

  

지금까지는 이해를 위해 연결된 하나의  프로토타입만을 표현했다.

**실제로 자바스크립트의 모든 객체는 Object 객체의 프로토타입을 기반으로 확장되었기 때문에 연결의 끝은 항상 Object 이다.**

이를 표현하기 위한 예제와 이를 바탕으로 연결된 전체 그림은 다음과 같다.

  

var person = function() {
  this.hp = function() { 

 // 상속 console.log("100");
  }
} 

// 공유

person.prototype.power = 5;

 var p1 = new person();
var p2 = new person(); 

p1.hp = function() {

 console.log("50");

}

 p1.mp = function() {
  console.log("100");
} 

  

p1.hp(); // 50

p2.hp(); // 100

 p1.mp(); // 100
p2.mp(); // p2.mp is not a function

p1.power; // 5
p2.power; // 5

  

p1.toString(); // [object]

  

person.hp 는 복제를 통해 상속 메소드를 뜻한다.

prototype 을 이용한 power 변수는 공유 변수를 뜻한다.

  

![prototype chain](https://t1.daumcdn.net/cfile/tistory/99E0BD3A5ADC3DED2B)

  

위처럼 연결이 이어진 관계를 프로토타입 체인(prototype chain)  이라고 한다.

연결은 __proto__ 프로퍼티를 통해 이어진다.

**이것을 이용해 자바스크립트 내부에서는 하위에서 최상위(Object)까지 탐색한다.**

이로 인해, 연결된 모든 변수 및 메소드 등과 같은 것을 접근할 수 있게 된다.

탐색시 접근 대상을 찾는다면 더이상 탐색하지않는다.

반대로 찾을때까지 탐색하다가 연결의 끝인 Object 까지 원하는 것이 없다면, undefined 또는 에러를 발생하게 된다.

  
  
출처: [https://mygumi.tistory.com/312](https://mygumi.tistory.com/312) [마이구미의 HelloWorld]
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ5MDIzNTU2MV19
-->