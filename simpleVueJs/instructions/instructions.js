/**
 * Instructions
 */

new Vue({
   el: '#testIntructions',
   data: {
      hrefIntructions: 'www.google.com',
      message: '',
   },

   methods: {
      showHref() {
         console.log(this.hrefIntructions);
      },
      infos() {
         console.log('You are writting in an input');
      },
   },
});

/**
 * Directives Way
 */

let mydirective = (el, binding, vnode) => {
   el.addEventListener('click', () => {
      console.log(el, binding, vnode);
   });
};

/** Other Way */

Vue.directive('testing', {
   inserted: (el) => {
      el.focus();
   },
});

new Vue({
   el: '#directives',
   directives: {
      mydirective,
   },
});
