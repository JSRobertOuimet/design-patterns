// ==================================================
// A decorator provides new methods to an object
// ==================================================

(glob => {
  
  const o1 = {'key': 'value'};
  const o2 = {'key': 'value'};
  
  decorator(o2);
  
  console.log(o1);
  console.log('------------------------------');
  console.log(o2);
  
  function decorator(o) {
    o.addedMethod = () => {};
  }

})(this);