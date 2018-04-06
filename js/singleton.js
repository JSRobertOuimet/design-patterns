const Singleton = (() => {
  let instance;

  function init() {
    return {
      getName
    };

    function getName() {
      return 'This is the returned value.';
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

const s = Singleton.getInstance();

s.getName();