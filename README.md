# TypeScript Type Mismatch
This example demonstrates a common TypeScript error: type mismatch.  The `add` function expects two numbers, but we're passing a string.  TypeScript's type system catches this error during compilation, preventing runtime surprises. 

## How to reproduce
1. Save the code in `bug.ts`
2. Compile with the TypeScript compiler (tsc bug.ts)
3. Observe the compilation error.

## Solution
The solution involves ensuring that all arguments passed to the `add` function are of type `number`.