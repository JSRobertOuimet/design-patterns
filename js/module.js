// ==================================================
// The module (reveal) design pattern encapsulates
// protects private methods and returns public ones
// ==================================================

(glob => {

  const Module = (() => {

    return {
      publicMethodOne,
      publicMethodTwo,
      publicMethodThree
    };

    function publicMethodOne() {
      console.log('I am the first public method.');
    }

    function publicMethodTwo() {
      console.log('I am the second public method.');
    }

    function publicMethodThree() {
      console.log('I am the third public method.');
      _privateMethod();      
    }

    function _privateMethod() {
      console.log('I am a private method only accessible to public ones.');
    }

  })();

  const m = Module;

  m.publicMethodOne();

  console.log('------------------------------');

  m.publicMethodTwo();

  console.log('------------------------------');
  
  m.publicMethodThree();

  if(!glob.Module) {
    glob.Module = Module;
  }

})(this);