<template>
  <footer class="footer">
    <nav class="footer__nav" role="navigation" aria-label="footer__nav">
      <a v-if="questionItem>0" @click="prev" class="btn ">Предыдущий вопрос</a>
      <a class="btn"  v-on:click="next"
         v-bind:class="(userAnswer[questionItem]==null)?'':'is-active' "
         :disabled="disable"
      > {{ btnText() }} </a>
    </nav>

  </footer>
</template>

<script>

export default {
  props: ["quiz", "questionItem", "userAnswer", "next", "prev"],
  name: "Footer",
  data() {
    return {

      disable: this.questionItem >= this.quiz.questions.length,
    }
  },


  methods:
      {
        btnText() {
          return  this.userAnswer[this.questionItem] == null ? 'Пропустить Вопрос' : 'Следуюший Вопрос'
        },

      },
}
</script>

<style scoped>
.footer {
  background: rgba(0, 0, 0, 0.025);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  align-self: flex-end;

}

.footer__nav {
  display: flex;
  justify-content: space-around;
  padding: 15px 25px;
}


</style>