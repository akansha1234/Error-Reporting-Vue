
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
          // Uses the returned text in an alert.

        }, 
        //https://stackoverflow.com/questions/44117064/access-selected-text-not-value-of-a-select-element-with-vue
        updateFromSelectedText(event) {
          // The @"METHOD" style in vuejs looks to set the method to METHOD(this). 
          
          
          const options = event.target.options;
          // Creates a list of the options. 
          
          

          const selectedOption = options[options.selectedIndex];
          // Creates a variable that hold sthe selected index based on the change. 


          this.selectedText = selectedOption.textContent;
          // Holds the currently selected text. 

          return this.selectedText;
          // Returns the text for use elsewhere. 
      }
      }
  })