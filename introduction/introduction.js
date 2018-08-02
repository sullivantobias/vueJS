/**
 * Introduction VIEW
 */

new Vue({
   el: '#introduction',
   data: {
      successMessage: 'All is good',
      hoverMessage: 'I\'m an hovering message',
      introductionClass: 'alert-success',
   },
   methods: {
      disapear() {
         this.success = !this.success;
      },
   },
});

/**
 * list VIEW
 */

new Vue({
   el: '#game-list',
   data: {
      games: [
         {id: 1, text: 'Mario'},
         {id: 2, text: 'Sonic'},
         {id: 3, text: 'Pacman'},
      ],
      errorMessage: 'Something went wrong',
      buttonMessage: 'Go Wrong',
      success: true,
   },
   methods: {
      wrong() {
         if (this.success) {
            this.success = false;
            this.buttonMessage = 'Show List';
         } else {
            this.success = true;
            this.buttonMessage = 'Go Wrong';
         }
      },
   },
});
