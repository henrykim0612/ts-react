### The primitives: string, number, boolean

```typescript
const a: number = 1;
const b: string = 'b';
const c: boolean = true;
```

### Arrays

```typescript
const d: number[] = [1, 2, 3];
const e: any[] = [{name: 1}, {name: 2}];
```

### Object
```typescript
const f: any = {name: 'James'};
const g = (obj: { name: string, age: number }) => { // 위에 보단 이것처럼 각각 프로퍼티에 타입을 명시해 주는게 좋겠지.
  console.log(`이름: ${obj.name} 나이: ${obj.age}`);
};
// Optional properties
const h = (obj: { name: string, age?: number }) => { // age? 로 표기
  console.log(obj.name);
  if (obj.age !== undefined) { // Optional property 항목은 없을 수 있으니 체크를 꼭 해주자.
    console.log(obj.age);
  }
}
h({name: 'James', age: 20});
h({name: 'Mary'});
```

### Functions

```typescript
function test1(name: string) {
  console.log(name);
}

function test2(value: number): number {
  return value + 5;
}

const test3 = (name: string) => {
  console.log(name);
}

const test4 = (value: number): number => value + 5;
```

### Anonymous functions

```typescript
const test5 = ['Alice', 'James', 'Mary'];
test5.forEach((s) => console.log(s.toUppercase()));
// Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
// 타입핑을 하지 않았는데도 에러 메세지로 문자열의 toUpperCase 냐고 추론하는걸 보면, 익명 함수 내부에서 알아서 타입을 추론해준다.
// 이걸 Contextual typing 이라고 불림
```

### Union Types

```typescript
const unionTest1 = (id: number | string | string[]) => {
  console.log(id);
  console.log(id.toUpperCase()); // 이건 사용할 수 없다. number 타입에는 존재하지 않는 함수니까. 해결법은 아래처럼 해야함.
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else if (Array.isArray(id)) {
    id.forEach((s) => console.log(s));
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
unionTest1(1123412);
unionTest1('ID123');
// 만약 Union 타입에 동일한 기능을 호출한다고 가정하면 위에처럼 분기처리를 굳이 하지 않아도 됨.
const unionTest2 = (value: number[] | string) => {
  value.slice(0, 2); // slice 는 두 타입 모두 가지고 있는 함수임.
}
```

### Type Aliases

```typescript
type Person = {
  name: string,
  age: number,
};
const typeAliasTest1 = (obj: Person) => { // 위에서 파라미터로 선언한 방식과 동일함
  console.log(obj.name);
  console.log(obj.age);
}

type Id = number | string
const typeAliasTest2 = (id: Id) => {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// Type Alias 는 재할당을 할 수 없다.
type Id = boolean; // Duplicate identifier 'Id'.
```

### Interface

```typescript
interface interface1 {
  name: string,
  age: number,
}

const interfaceTest1 = (person: interface1) => {
  console.log(person.name);
  console.log(person.age);
}

// Interface 는 extends 가능
interface interface2 extends interface1 {
  isCaptain: boolean
}
```

### Type Assertions (타입 단언)

```typescript
// 타입스크립트가 타입을 잘 인식하지 못할때 힌트를 주는것. as 또는 <> 사용하는데, <> 는 비추천(리액트 jsx 랑 문법이 겹침)
const myCanvas1 = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
```

### Literal Types

```typescript
// 'left', 'right' 처럼 값을 지정할 수 있음
function printText(s: string, alignment: "left" | "right" | "center") {
// ...
}

printText("Hello, world", "left");
printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

### null and undefined

```typescript
// Typescript 에서는 두개를 null 이라 부른다.
function nullAndUndefinedChecker(x: string | null) {
  if (x === null) {
  // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```


### void return in function
**void is not the same as undefined.**




