Vue.component('project', {
  props: ['title', 'body'],

  template: `
    <article class="uk-card uk-card-default" uk-scrollspy="cls:uk-animation-slide-bottom; delay: 200">
      <div class="uk-card-media-top">
          <img src="https://placehold.it/500x400&text=Placeholder" alt="">
      </div>
      <div class="uk-card-body">
          <h3 class="uk-card-title">{{ title }}</h3>
          <p>{{ body }}</p>
      </div>
    </article>
  `
});

new Vue({
  el: 'main',
  data: {
    projects:[
      { title: 'Project Title', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' }
    ]
  }
});
