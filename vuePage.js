
const app = new Vue({
    el: '#app',
    data: {
      device: '', 

      errorTypes:[

        {text:'Bad Battery'}, 

        {text: 'Screen Crack'}

      ]}, 
      methods:{
        errorSub : function() {
          alert(this.selectedText);
        }, 
        updateFromSelectedText(event) {
          const options = event.target.options;
          const selectedOption = options[options.selectedIndex];
    
          this.selectedText = selectedOption.textContent;
          return this.selectedText;
      }
      }
  })