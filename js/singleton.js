// ==================================================
// The singleton design pattern ensures that all
// instances point to a single object.
// ==================================================

(glob => {

  // First (longer) method
  const SingletonOne = (() => {
    let instance;
  
    function init() {
      return {
        someMethod
      };
  
      function someMethod() {
        console.log('I have been instantiated.');
      }
    }
  
    return {
      getInstance: () => {
        if(!instance) {
          instance = init();
        }
  
        return instance;
      }
    };
  })();

  // Second (shorter) method
  const SingletonTwo = (() => {
    let instance;

    return () => {
      if(!instance) {
        instance = {
          someMethod: () => {
            console.log('I have been instantiated.');
          }
        };
      }

      return instance;
    };

  })();

  // Not checking if instance already exists
  const NotASingleton = (() => {
    let instance;

    return () => {
      instance = {
        someMethod: () => {
          return;
        }
      };

      return instance;
    };

  })();
  
  const s1 = SingletonOne.getInstance();
  const s2 = SingletonOne.getInstance();
  
  const s3 = SingletonTwo();
  const s4 = SingletonTwo();
  
  const s5 = NotASingleton();
  const s6 = NotASingleton();
  
  console.log('Are s1 and s2 two instances of the same object?', s1 === s2);
  console.log('Are s3 and s4 two instances of the same object?', s3 === s4);
  console.log('Are s5 and s6 two instances of the same object?', s5 === s6);

})(this);