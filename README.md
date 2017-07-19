# Passing-Data-in-React
A demo app to understand flow of data in react.

### Introduction
React has one way of data flow, but sometimes it needs to be able to move from child to parent, parent to child or among children components.

### Program structure
- Index
  - ProductList
    - InputBrand
    - Product
    - Total

### Types of flow
#### Parent to Child
If parent have data then it can pass it down to its children via **props**.
[photo here]
and in the child, those passed props can be accessed by

```javascript
this.props.passedDownIdentifier
```
