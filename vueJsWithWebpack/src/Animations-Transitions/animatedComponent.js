export default {
   data() {
      return {
         msg: 'Hey this is me, the transitions component',
         msg2: 'Hey this is me, the animated component',
         visible: true,
      };
   },
   methods: {
      toggle() {
         this.visible = !this.visible;
      },
   },
};
