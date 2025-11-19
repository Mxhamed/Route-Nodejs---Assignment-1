**`forEach`**

- Execute a Callback For EACH Element.

- CAN'T Use `await` Inside the Callback → It WON'T Pause Execution!

- CAN'T Use `break` or `continue`.

  ```js
  arr.forEach(async (item) => {
    await someAsyncOperation(item); // ALL Start Together
  });
  ```

<br />

**`for...of`**

- Iterates Over Iterables (_Arrays, Strings, Maps, ...etc_).

- Supports `await` → CAN Pause Execution for Async Operations.

- CAN Use `break` and `continue`.

  ```js
  for (const item of array) {
    await someAsyncOperation(item); // Waits for EACH to Complete
  };
  ```

---

**ALL Variables/Functions are Hoisted BUT with Different Behaviors**

Those Declared with `var` are Hoisted with `undefined`

```js
console.log(firstName); // undefined
var firstName = "Mohamed";
```

While Those Declared with `let` or `const` will Raise an Error (_Due to TDZ_)

```js
console.log(firstName); // RefrenceError
const firstName = "Mohamed";
```

> **T**emporal **D**ead **Z**one → Region Where a Variable (_Declared with `let` and `const`_) Exists BUT is Inaccessible (_between the Beginning of the Scope and the Place Where the Variable is Declared_), and Any Attempt to Access it will Result in a `ReferenceError`.

---

**Loose Comparison (`==`)** → Equal Value.

**Strict Comparison (`===`)** → Equal Value AND Equal Type.

---

```js
try {
  throw new Error("Some Risky Operation...");
} catch (error) {
  // Handle the error
  console.log("Something Went Wrong:", error.message);
} finally {
  // OPTIONAL
  console.log("I ALWAYS Get Executed!");
}
```

**`try` Block Executes**

- **If NO Error** → Continues after `catch`.

- **If Error Occurs** → IMMEDIATELY Jumps to `catch`.

  > `finally` Block ALWAYS Executes (_Regardless of Error_).

---

**Type Coercion** → JavaScript IMPLICITLY Converts between Data Types.

```js
1 + "2"; // 12
1 + 2 + "3"; // 33
"10" - 0; // 10
```

**Type Conversion** → The Developer EXPLICITLY Converts between Types.

```js
Number.parseInt("16px"); // 16
Boolean(null); // 0
```