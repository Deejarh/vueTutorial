 var app = new Vue({
  el: "#app",
  data: {
    first: 'Ade',
    description: 'okay',
    image:'/img.jpeg',
    name : 'Damola',
    age: 10,
    x: 0,
    y: 0,
    counter:0
  },
    methods:{  
      update:function(event){
        this.x = event.clientX;
        this.y = event.clientY;   
      },
      increase: function(step){
        this.counter += step;
      }
    }
});







 

/* async function githubAPIUsers(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  // check
  if (!response.status) {
    throw new Error("api call failed");
  }

  const data = await response.json();
  return data;
}

githubAPIUsers("zeddysoft").then(data => console.log(data)) */

