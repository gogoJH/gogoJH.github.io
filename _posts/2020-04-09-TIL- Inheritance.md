---
layout:     post
title:      "2019.04.9 Inheritance"
subtitle:   ""
date:       2019-04-09
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

>  오늘은 상속 관계(Inheritance)를 배우고 나서 실전처럼 써보았다.
>  부모의 prototype에 저장 되어있는 메서드를 자식에서 쓰려니까 참 골머리가 아프더라.
>  막상 `this.bind` 하는 방법도 알고 있다고 생각했는데 코드 속에서 막 바뀌는 `this`를
>  생각하고 쓴다는게 쉽지가 않았다.
>  그래서 답은 es6라는거지 .. super 짱 하하 ;;

<br>

### Object.create(parent.prototype)



1.  &nbsp; 자식이 될 녀석을 만드는 생성자에서 자신의 prototype을 부모를 바라보게 만들면 부모의 메소드들도
전부 가질 수 있게 된다. 
막상 그렇게 되면 Child의 prototype이 날 만든 사람이 누군지 모르게 되는데 요럴때 construct 부분을 바꿔준다.
그리고 부모의 프로퍼티를 사용하려면 생성자의 construct 부분에 Parent.call(this)를
해야한다.

```

function Child () {
  Parent.call(this, ?);
}
Child.prototype = Object.create(Parent.prototype);
child.prototype.construct = Child;

```

<br>

---



#### coment
&nbsp; 정말 헤매였던 부분이 Child에 부모 prototype이 가지고 있는 메소드를 재정의 하면서
parent 의 같은 메소드를 사용할 때였는데 막상 알고나니까 허무해져버리더라 ㅠㅠ
  

### 끝!