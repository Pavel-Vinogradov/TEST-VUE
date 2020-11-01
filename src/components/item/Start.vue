<template>
  <div class="main-page" v-if="questionItem < 0" >
    <header>
      <h1 class="main-title">{{ title }}</h1>
    </header>
    <div class="description">
      <div class="description__wrap">
        <a @click="next" class="btn is-active ">Начать</a>
      </div>
      <p class="description__remarks">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questionItem', 'quiz','title','next'],
  name: "Start",
  data() {
    return {
          subtitle: 'Данный квест, вам нужно будет ответить на 10 вопросов , в конце викторины вы\n' +
          '        узнаете ваш результат\n' +
          '        и возможность повторить викторину'
    }
  },

}
</script>

<style scoped>
.description {
  padding: 30px 50px;
  flex-direction: column;
  justify-content: space-between;
}

.description__wrap {
  padding: 20px 0;
}

.description__remarks {
  font-size: 14px;
  opacity: .7;
}

.main-page {
  display: block;
  width: 100%;
  text-align: center;
}

.main-title {
  font-family: Montserrat, sans-serif;
  font-size: 24px;

  font-weight: 700;
  margin-bottom: 1rem !important;
}








</style>