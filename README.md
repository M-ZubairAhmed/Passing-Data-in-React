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
Props are immutable in child components.
#### Child to Parent
If child have data which parent needs to have access to then it is done via **callback**

1. Constuct the method in the parent with the parameters which you will recieve from the child.
```javascript
callbackMethodInParent = (dataFromChild) => {
  // foo bar
};
```
2. Pass the constructed callback method to the child as props.
```javascript
<ChildComponent callbackMethodInParent = {this.callbackMethodInParent} />
```
3. In the child call the callback with the data you recieved.
```javascript
this.props.callbackMethodInParent(newData);
```
[combined image with number tags]
