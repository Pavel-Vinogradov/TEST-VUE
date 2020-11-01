<template>
  <div>

        <span class="icon">
      <i class="fa" :class="iconClass"></i>
    </span>
    <h2 class="title">
      Вы проделали {{ assess }} работу!
    </h2>
    <p class="subtitle">Правильных ответов: {{ sum() }}</p>
    <br/>
    <a class="btn is-active" @click="restart">
      Повторить
      <i class="fas fa-sync-alt"></i>
    </a>

  </div>
</template>

<script>
export default {
  props: ["quiz", "score", "restart"],
  name: "Result",
  methods: {
    sum() {
      return  `${this.scorePro() } / ${this.quiz.questions.length}`
    },
    scorePro() {
      return this.score();
    },

  },

  data() {
    return {
      iconClass: this.scorePro() > 3 ? 'fas fa-check-circle green' : 'fa-times-circle',
      assess: this.scorePro() > 7 ? 'потрясающую' : (this.scorePro() < 4 ? 'плохую' : 'хорошую'),

    }
  }
}
</script>

<style scoped>
.icon {
  color: #ff5252;
  font-size: 5rem;
}

.green {
  color: green;
}
</style>