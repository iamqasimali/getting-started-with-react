## useEfect

useEffect is a hook that automatically triggers the component called page load or reload etc.
useEffect() can be used in three ways

no second argument / no array
Empty array 
Dependency Array

### 1) No Array

The first time it will call when the component is called and also triggered on every state changed in that component.

```
useEffect(()=> {
`// Block of Code 
})
```

### 2) Empty Array 
 This kind of useEffect() triggers only once when the component is rendered.

```
useEffect( ()=> {
// Code Block ...
}, [])
```


### 3) Dependency Array

```
useEffect( ()=>{
// code block
}, [count])

```

This kind of useEffect() is initially rendered when the component is loaded and will trigger every state change mentioned in the dependency list.