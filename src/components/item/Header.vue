<template>
  <header >
 <h1 class="title"> {{title}}</h1>
    <div class="progress__wrap">
      <progress
          class="progress-block "
          :value="(value)"
          max="100"
      >{{(value)}}%</progress>
      <p class="progress__subtitle">Вопрос {{num}}</p>
    </div>
  </header>
</template>

<script>

export default {
  props:['questionItem', 'quiz','title'],
  name: "Header",
  data(){
    return{
     value: (this.questionItem/this.quiz.questions.length)*100,
      num:`${this.questionItem + 1}/${this.quiz.questions.length}`,
    }
  },
}
</script>

<style scoped>
.progress__wrap
{
  width: 60%;
  margin: 0 auto;
}
.progress-block
{
  margin: 0;
  border-radius: 32px;
  overflow: hidden;
  border: none;
  color: #064864;
}
.progress__subtitle
{margin: 10px 0}

.title
{
  font-family: Montserrat, sans-serif;
  font-size: 24px;
   font-weight: 700;
  line-height: normal;
  margin-bottom: 1rem !important;
}
</style>