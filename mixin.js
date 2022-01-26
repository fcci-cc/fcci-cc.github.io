const reusableVueCode = {
  el: '#app',
  data: function () {
    return {
      mode: 'light'
    };
  },
  methods: {
    toggleMode: function () {
      if (this.mode === 'light') {
        this.mode = 'dark';
      } else {
        this.mode = 'light';
      }
    }
  },
  created: function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.mode === 'dark';
    }
  }
};
