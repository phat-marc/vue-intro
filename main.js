// We want this variable to display in index.html
let product = 'hats';

// The Vue way
let app = new Vue({
  el: '#hats',
  data: 
    {product: 'hat pics...',
    textDescription: 'Cats look great in hats'}
});

// Can't add a second Vue object like this, must do it inside the original
let app2 = new Vue({
  el: '#coats',
  data: 
  {product: 'coat pics...',
  textDescription: 'Your cat will be 100 times cooler in a stylish coat'}
});

// Bind elements with v-bind
// This is called a directive and is a special attribute provided by Vue
// Says: Kepp this els title attribute up to date with the message property on the Vue instance
let app3 = new Vue({
  el: '#hover',
  data: {
    message: new Date().toLocaleString(),
    visible: true
  }
});
// Hide by changing visible to false in the console. 

// v-for in
let app4 = new Vue({
  el: '#todo',
  data: {
    todos: [
      {text: 'find a cat'},
      {text: 'get a hat'},
      {text: 'put cat in hat'}
    ]
  }
});

// v-on 
let app5 = new Vue({
  el: '#mirror',
  data: {message: '):lol !tah eht ni tac ehT'},
  methods: {
    leReverso: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

// no actual dom manipulation so far.

// v-model directive for  2 way binding between form input and state
let app6 = new Vue({
  el: '#form',
  data: {message: 'Type something here!'
  }
});


//COMPONENTS
// a todo-item as a component
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

let data = {
  theList: [
    {id: 0, text: 'floral shirt'},
    {id: 1, text: 'panama hat'},
    {id: 2, text: 'typewriter'},
    {id: 3, text: 'rum n coke'}
  ]
};

let app7 = new Vue({
  el: '#dyna',
  data: data
});

// 1. in index.html the element <todo-item> will be replaced by the compos template: <li>
// 2. in index.html, v-for="item in theList", for each item in obj key theList:, to prop from compos props: will be bound to the item, therefore we can get the value for obj key text: with todo.text
// 3. same for bind item.id
// 4. the reusable component and data are kep seperate from the vue instance

// note that we have app7.theList === data.theList, changing one will update the other, and rerender the view
// if we add a new property later, app7.theList2, it will not be reactive(dynamic), so if we know that we will add it later, it is best to start will an initialise one of these values:
// '', 0, false, [], null


// an app layout example using component structure
// Vue compos look like custom html elements
// <div id='app'>
//   <app-nav></app-nav>
//   <app-view>
//   <app-sidebar></app-sidebar>
//   <app-content></app-content>
//   </app-view>
// </div>