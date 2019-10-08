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

## prototype이란 ? 

Java, C++과 같은 클래스 기반 객체지향 프로그래밍 언어와 달리 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어이다.

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다.
이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이 부모 객체를 **Prototype(프로토타입) 객체** 또는 줄여서 Prototype(프로토타입)이라 한다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-11.png)

[그림 1]

```
function Person(){}  

```

_[소스 1]_

속성이 하나도 없는 Person이라는 함수가 정의되고, 파싱단계에 들어가면, Person 함수 Prototype 속성은 프로토타입 객체를 참조합니다. 프로토타입 객체 멤버인 constructor 속성은 Person 함수를 참조하는 구조를 가집니다. 여기서 알아야 하는 부분은 Person 함수의 prototype 속성이 참조하는 프로토타입 객체는 new라는 연산자와 Person 함수를 통해 생성된 모든 객체의 원형이 되는 객체입니다. 생성된 모든 객체가 참조한다는 것을 기억해야 합니다. 아래의 그림 2와 같이 표현합니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-02.png)

[그림 2]

```
function Person(){}

var joon = new Person();  
var jisoo = new Person();  

```

_[소스 2]_

JavaScript에서는 기본 데이터 타입인 boolean, number, string, 그리고 특별한 값인 null, undefined 빼고는 모두 객체입니다. 사용자가 정의한 함수도 객체이고, new라는 연산자를 통해 생성된 것도 객체입니다. 객체 안에는  **proto**(비표준) 속성이 있습니다. 이 속성은 객체가 만들어지기 위해 사용된 원형인 프로토타입 객체를 숨은 링크로 참조하는 역할을 합니다.

## 2. 프로토타입 객체란?

함수를 정의하면 다른 곳에 생성되는 프로토타입 객체는 자신이 다른 객체의 원형이 되는 객체입니다. 모든 객체는 프로토타입 객체에 접근할 수 있습니다. 프로토타입 객체도 동적으로 런타임에 멤버를 추가할 수 있습니다. 같은 원형을 복사로 생성된 모든 객체는 추가된 멤버를 사용할 수 있습니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-03.png)

[그림 3]

```
function Person(){}

var joon = new Person();  
var jisoo = new Person();

Person.prototype.getType = function (){  
    return "인간"; 
};

console.log(joon.getType());   // 인간  
console.log(jisoo.getType());  // 인간  

```

_[소스 3]_

위 소스 3 6라인은 함수 안의 prototype 속성을 이용하여 멤버를 추가하였습니다. 프로토타입 객체에 getType()이라는 함수를 추가하면 멤버를 추가하기 전에 생성된 객체에서도 추가된 멤버를 사용할 수 있습니다. 같은 프로토타입을 이용하여 생성된 joon과 jisoo 객체는 getType()을 사용할 수 있습니다.

여기서 알아두어야 할 것은 프로토타입 객체에 멤버를 추가, 수정, 삭제할 때는 함수 안의 prototype 속성을 사용해야 합니다. 하지만 프로토타입 멤버를 읽을 때는 함수 안의 prototype 속성 또는 객체 이름으로 접근합니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-04.png)

[그림 4]

```
joon.getType = function (){  
    return "사람"; 
};

console.log(joon.getType());   // 사람  
console.log(jisoo.getType());  // 인간

jisoo.age = 25;

console.log(joon.age);   // undefined  
console.log(jisoo.age);  // 25  

```

_[소스 4]_

위 소스 4 1라인은 joon 객체를 이용하여 getType() 리턴 값을 사람으로 수정하였습니다. 그리고 joon과 jisoo에서 각각 getType()을 호출하면 joon 객체를 이용하여 호출한 결과는 사람으로 출력되고, jisoo로 호출한 결과는 인간이 출력됩니다. 생성된 객체를 이용하여 프로토타입 객체의 멤버를 수정하면 프로토타입 객체에 있는 멤버를 수정하는 것이 아니라 자신의 객체에 멤버를 추가하는 것입니다. joon 객체를 사용하여 getType()을 호출하면 프로토타입 객체의 getType()을 호출한 것이 아닙니다. joon 객체에 추가된 getType()을 호출한 것입니다. 프로토타입 객체의 멤버를 수정할 경우는 멤버 추가와 같이 함수의 prototype 속성을 이용하여 수정합니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-05.png)

![](http://www.nextree.co.kr/p7323/)

[그림 5]

```
Person.prototype.getType = function (){  
    return "사람"; 
};

console.log(jisoo.getType());  // 사람  

```

_[소스 5]_

소스 5를 보게 되면 함수의 prototype 속성을 이용하여 getType() 리턴 값을 사람으로 수정합니다. 그리고 jisoo 객체를 이용하여 호출한 결과 사람이 나옵니다.

결론을 내리면, 프로토타입 객체는 새로운 객체가 생성되기 위한 원형이 되는 객체입니다. 같은 원형으로 생성된 객체가 공통으로 참조하는 공간입니다. 프로토타입 객체의 멤버를 읽는 경우에는 객체 또는 함수의 prototype 속성을 통해 접근할 수 있습니다. 하지만 추가, 수정, 삭제는 함수의 prototype 속성을 통해 접근해야 합니다.

## 3. 프로토타입이란?

JavaScript에서 기본 데이터 타입을 제외한 모든 것이 객체입니다. 객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형인 프로토타입 객체를 이용하여 객체를 만듭니다. 이때 만들어진 객체 안에 __proto__ (비표준) 속성이 자신을 만들어낸 원형을 의미하는 프로토타입 객체를 참조하는 숨겨진 링크가 있습니다. 이 숨겨진 링크를 프로토타입이라고 정의합니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-06-1.png)

[그림 6]

```
function Person(){}

var joon = new Person();  

```

_[소스 6]_

위 그림 6 joon 객체의 멤버인 __proto__ (비표준) 속성이 프로토타입 객체를 가리키는 숨은 링크가 프로토타입이라고 합니다. 프로토타입을 크게 두 가지로 해석된다 했습니다. 함수의 멤버인 prototype 속성은 프로토타입 객체를 참조하는 속성입니다. 그리고 함수와 new 연산자가 만나 생성한 객체의 프로토타입 객체를 지정해주는 역할을 합니다. 객체 안의 __proto__(비표준) 속성은 자신을 만들어낸 원형인 프로토타입 객체를 참조하는 숨겨진 링크로써 프로토타입을 의미합니다.

JavaScript에서는 숨겨진 링크가 있어 프로토타입 객체 멤버에 접근할 수 있습니다. 그래서 이 프로토타입 링크를 사용자가 정의한 객체에 링크가 참조되도록 설정하면 코드의 재사용과 객체 지향적인 프로그래밍을 할 수 있습니다.

## 4. 코드의 재사용

코드의 재사용 하면 떠오르는 단어는 바로 상속입니다. 클래스라는 개념이 있는 Java에서는 중복된 코드를 상속받아 코드 재활용을 할 수 있습니다. 하지만 JavaScript에서는 클래스가 없는, 프로토타입 기반 언어입니다. 그래서 프로토타입을 이용하여 코드 재사용을 할 수 있습니다.

이 방법에도 크게 두 가지로 분류할 수 있습니다. classical 방식과 prototypal 방식이 있습니다. classical 방식은 new 연산자를 통해 생성한 객체를 사용하여 코드를 재사용 하는 방법입니다. 마치 Java에서 객체를 생성하는 방법과 유사하여 classical 방식이라고 합니다. prototypal 방식은 리터럴 또는 Object.create()를 이용하여 객체를 생성하고 확장해 가는 방식입니다. 두 가지 방법 중 JavaScript에서는 prototypal 방식을 더 선호합니다. 그 이유는 classical 방식보다 간결하게 구현할 수 있기 때문입니다. 밑의 예제 1 ~ 4번까지는 classical 방식의 코드 재사용 방법이고, 5번은 prototypal 방식인 Object.create()를 사용하여 코드의 재사용을 보여줍니다.

### (1) 기본 방법

부모에 해당하는 함수를 이용하여 객체를 생성합니다. 자식에 해당하는 함수의 prototype 속성을 부모 함수를 이용하여 생성한 객체를 참조하는 방법입니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-07.png)

![](http://www.nextree.co.kr/p7323/)

[그림 7]

```
function Person(name) {  
    this.name = name || "혁준"; 
}

Person.prototype.getName = function(){  
    return this.name;
};

function Korean(name){}  
Korean.prototype = new Person();

var kor1 = new Korean();  
console.log(kor1.getName());  // 혁준

var kor2 = new Korean("지수");  
console.log(kor2.getName());  // 혁준  

```

_[소스 7]_

위 소스 7을 보면 부모에 해당하는 함수는 Person입니다. 10라인에서 자식 함수인 Korean 함수 안의 prototype 속성을 부모 함수로 생성된 객체로 바꿨습니다. 이제 Korean 함수와 new 연산자를 이용하여 생성된 kor 객체의 __proto__속성이 부모 함수를 이용하여 생성된 객체를 참조합니다. 이 객체가 Korean 함수를 이용하여 생성된 모든 객체의 프로토타입 객체가 됩니다. kor1에는 name과 getName() 이라는 속성이 없지만, 부모에 해당하는 프로토타입객체에 name이 있습니다. 이 프로토타입객체의 부모에 getName()을 가지고 있어 kor1에서 사용할 수 있습니다. 이 방법에도 단점이 있습니다. 부모 객체의 속성과 부모 객체의 프로토타입 속성을 모두 물려받게 됩니다. 대부분의 경우 객체 자신의 속성은 특정 인스턴스에 한정되어 재사용할 수 없어 필요가 없습니다. 또한, 자식 객체를 생성할 때 인자를 넘겨도 부모 객체를 생성할 때 인자를 넘겨주지 못합니다. 그림 7 소스 하단 두 번째 줄에서 kor2 객체를 생성할 때 Korean 함수의 인자로 지수라고 주었습니다. 객체를 생성한 후 getName()을 호출하면 지수라고 출력될 거 같지만, 부모 생성자에 인자를 넘겨주지 않았기 때문에 name에는 default 값인 혁준이 들어있습니다. 객체를 생성할 때마다 부모의 함수를 호출할 수도 있습니다. 하지만 매우 비효율적입니다. 그래서 다음 방법은 이 방법의 문제점을 해결하는 방법을 알아보겠습니다.

### (2) 생성자 빌려 쓰기

이 방법은 기본 방법의 문제점인 자식 함수에서 받은 인자를 부모 함수로 인자를 전달하지 못했던 부분을 해결합니다. 부모 함수의 this에 자식 객체를 바인딩하는 방식입니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-08.png)

[그림 8]

```
function Person(name) {  
    this.name = name || "혁준";
}

Person.prototype.getName = function(){  
    return this.name;
};

function Korean(name){  
    Person.apply(this, arguments);
}

var kor1 = new Korean("지수");  
console.log(kor1.name);  // 지수  

```

_[소스 8]_

위 소스 8 10라인을 보면 Korean 함수 내부에서 apply 함수를 이용합니다. 부모객체인 Person 함수 영역의 this를 Korean 함수 안의 this로 바인딩합니다. 이것은 부모의 속성을 자식 함수 안에 모두 복사합니다. 객체를 생성하고, name을 출력합니다. 객체를 생성할 때 넘겨준 인자를 출력하는 것을 볼 수 있습니다. 기본 방법에서는 부모객체의 멤버를 참조를 통해 물려받았습니다. 하지만 생성자 빌려 쓰기는 부모객체 멤버를 복사하여 자신의 것으로 만들어 버린다는 차이점이 있습니다. 하지만 이 방법은 부모객체의 this로 된 멤버들만 물려받게 되는 단점이 있습니다. 그래서 부모객체의 프로토타입 객체의 멤버들을 물려받지 못합니다. 위 그림 8 그림을 보시면 kor1 객체에서 부모객체의 프로토타입 객체에 대한 링크가 없다는 것을 볼 수 있습니다.

### (3) 생성자 빌려 쓰고 프로토타입 지정해주기

이 방법은 방법 1과 방법 2 문제점들을 보완하면서 Java에서 예상할 수 있는 동작 방식과 유사합니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-09.png)

[그림 9]

```
function Person(name) {  
    this.name = name || "혁준"; }

Person.prototype.getName = function(){  
    return this.name;
};

function Korean(name){  
    Person.apply(this, arguments);
}
Korean.prototype = new Person();

var kor1 = new Korean("지수");  
console.log(kor1.getName());  // 지수  

```

_[소스 9]_

위 소스 9 9라인에서 부모 함수 this를 자식 함수 this로 바인딩합니다. 11라인에서 자식 함수 prototype 속성을 부모 함수를 사용하여 생성된 객체로 지정했습니다. 부모객체 속성에 대한 참조를 가지는 것이 아닌 복사본을 통해 내 것으로 만듭니다. 동시에 부모객체의 프로토타입 객체에 대한 링크도 참조됩니다. 부모객체의 프로토타입 객체 멤버도 사용할 수 있습니다. 그림 7과 비교했을 때 kor1 객체에 name 멤버가 없는 반면 그림 9에서는 name 멤버를 가지고 있는 것을 확인할 수 있습니다. 그림 8과 비교했을 때는 프로토타입 링크가 부모 함수로 생성한 객체에 대해 참조도 하고 있습니다. 그리고 부모 객체의 프로토타입 객체도 링크로 연결된 것을 볼 수 있습니다. 이 방법에도 문제점이 있습니다. 부모 생성자를 두 번 호출합니다. 생성자 빌려 쓰기 방법과 달리 getName()은 제대로 상속되었지만, name에 대해서는 kor1 객체와 부모 함수를 이용하여 생성한 객체에도 있는 것을 볼 수 있습니다.

### (4) 프로토타입공유

이번 방법은 부모 생성자를 한 번도 호출하지 않으면서 프로토타입 객체를 공유하는 방법입니다.

![](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-10.png)

![](http://www.nextree.co.kr/p7323/)

[그림 10]

```
function Person(name) {  
    this.name = name || "혁준";
}

Person.prototype.getName = function(){  
    return this.name;
};

function Korean(name){  
    this.name = name;
}    
Korean.prototype = Person.prototype;

var kor1 = new Korean("지수");  
console.log(kor1.getName());  // 지수  

```

_[소스 10]_

위 소스 10 12라인에서 자식 함수의 prototype 속성을 부모 함수의 prototype 속성이 참조하는 객체로 설정했습니다. 자식 함수를 통해 생성된 객체는 부모 함수를 통해 생성된 객체를 거치지 않고 부모 함수의 프로토타입 객체를 부모로 지정하여 객체를 생성합니다. 부모 함수의 내용을 상속받지 못하므로 상속받으려는 부분을 부모 함수의 프로토타입 객체에 작성해야 사용자가 원하는 결과를 얻게 됩니다. 그림 9와 비교했을 때 중간에 부모 함수로 생성한 객체가 없고 부모 함수의 프로토타입 객체로 링크가 참조되는 것을 볼 수 있습니다.

(5) prototypal한 방식의 재사용

이 방법은 Object.create()를 사용하여 객체를 생성과 동시에 프로토타입객체를 지정합니다. 이 함수는 첫 번째 매개변수는 부모객체로 사용할 객체를 넘겨주고, 두 번째 매개변수는 선택적 매개변수로써 반환되는 자식객체의 속성에 추가되는 부분입니다. 이 함수를 사용함으로 써 객체 생성과 동시에 부모객체를 지정하여 코드의 재활용을 간단하게 구현할 수 있습니다.

```
var person = {  
    type : "인간",
    getType : function(){
        return this.type;
    },
    getName : function(){
        return this.name;
    }
};

var joon = Object.create(person);  
joon.name = "혁준";

console.log(joon.getType());  // 인간  
console.log(joon.getName());  // 혁준  

```

_[소스 11]_

위 소스 1라인에서 부모 객체에 해당하는 person을 객체 리터럴 방식으로 생성했습니다. 그리고 11라인에서 자식 객체 joon은 Object.create() 함수를 이용하여 첫 번째 매개변수로 person을 넘겨받아 joon 객체를 생성하였습니다. 한 줄로 객체를 생성함과 동시에 부모객체의 속성도 모두 물려받았습니다. 위의 1 ~ 4번에 해당하는 classical 방식보다 간단하면서 여러 가지 상황을 생각할 필요도 없습니다. JavaScript에서는 new 연산자와 함수를 통해 생성한 객체를 사용하는 classical 방식보다 prototypal 방식을 더 선호합니다.

## 5. 마치며

지금까지 JavaScript 프로토타입에 대해 정리했습니다. 처음 프로토타입을 공부할 땐, 자바 OOP 관점에서 접근하여 혼란스러웠습니다. 하지만 함수의 내부구조부터 차근차근 접근하였더니 쉽게 이해할 수 있었습니다. 그리고 코드의 재사용 방식에 대해 공부하였던 것도 JavaScript 언어 자체를 이해하는 데 많은 도움이 되었습니다.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzUwOTA5MzA5LDIxMDcyODkzNDgsLTEwMj
M4NTkwOTNdfQ==
-->