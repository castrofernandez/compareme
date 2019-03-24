# compareme
Library to compare objects

1. Install 

```
npm install compareme
```

2. Usage

```
import compareme from 'compareme';

compareme.is({a: 1}).like({a: 2}); // true
compareme.is({a: 1, b: 2}).deeply.like({a: 3}) // true
compareme.is({a: 1}).strictly.like({a: 2, b: 3}) // false
compareme.get([10]).deeply.difference.with(['Something']);
/*
{
    success: false,
    differences: [{
        index: '0',
        first: 'number',
        second: 'string',
    }],
}
*/
```

3. Development

```
npm run dev
```

This watches files and compiles them

4. Run tests

```
npm test
```

`npm run dev` should be running to watch and recompile files.

5. List of methods

* Start methods:
  * is(object): returns a boolean at the end of the chain.
  * get(object): returns an object with the boolean result of the chain and a list of differences.

* Modifiers:
  * not: negates the condition.
  * deeply: checks first object deeply. Values in second object could not exist.
  * strictly: checks first object deeply and values must match. Second object could not have different values.

* Finish methods:
  * like: compares the type of each pair of objects.