<template>
  <div class="container">

    <div class="box__block">
      <Start :questionItem="questionItem" :quiz="quiz" :title="title" :next="next"/>
      <transition name="fade" mode="out-in">
        <div class="box__wrap" v-if="questionItem<quiz.questions.length && questionItem >= 0"
             v-bind:key="questionItem">
          <Header :questionItem="questionItem" :quiz="quiz" :title="title"/>
          <h2 class="title__question">{{ titleQuestion() }}</h2>
          <div class="question__box">
            <RadioButton class="question__option"
                         v-for="(answer, index) in quiz.questions[questionItem].answers"
                         name="options" :label="answer.text" :key="index" :class="changeClass(index)"
                         @change="selectOption(index)"
            > {{ answer.text }}
            </RadioButton>
          </div>
          <Footer :questionItem="questionItem" :quiz="quiz" :next="next" :prev="prev" :userAnswer="userAnswer"/>
        </div>
        <div class="result" v-if="questionItem >= quiz.questions.length"
             v-bind:key="questionItem">
          <Result :quiz="quiz" :score="score" :restart="restart"/>
        </div>

      </transition>
    </div>
  </div>

</template>

<script>
// import question
import {quiz} from "../../config";
import Start from "@/components/item/Start";
import Header from "@/components/item/Header";
import RadioButton from "@/components/item/RadioButton";
import Footer from "@/components/item/Footer";
import Result from "@/components/item/Result";
//Set type:Null
const userAnswer = Array(quiz.questions.length).fill(null)


export default {
  components: {Start, Header, RadioButton, Footer, Result},

  name: "Quiz",
  data() {

    return {
      title: '10 вопросов и ответов по викторине по "Звездным войнам" для несгибаемых фанатов',
      quiz,

      userAnswer,
      // set count page
      questionItem: -1,
      show: true,
    }
  },

  methods: {
    titleQuestion() {
      return this.quiz.questions[this.questionItem].text
    },
    next() {
      if (this.questionItem < this.quiz.questions.length) {
        this.questionItem++;
      }
    },
    prev() {
      if (this.quiz.questions.length > 0) {
        this.questionItem--;
      }
    },
    changeClass(index) {
      return (`'is-selected': ${this.userAnswer[this.questionItem] == index} `)
    },
    selectOption(index) {
      return this.$set(this.userAnswer, this.questionItem, index);
    },
    score: function () {
      let score = 0;
      for (let i = 0; i < this.userAnswer.length; i++) {
        if (
            typeof (this.quiz.questions[i].answers[this.userAnswer[i]]) !==
            "undefined" &&
            this.quiz.questions[i].answers[this.userAnswer[i]].correct
        ) {
          score++;
        }
      }
      return score
    },
    restart() {
      this.questionItem = 0;
      this.userAnswer = Array(this.quiz.questions.length).fill(null);
    },

  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.container {
  margin: 0 8px;
}

.animated {
  transition-duration: 1.5s;
}

.result {
  width: 100%;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title__question {
  text-align: center;
  margin: 0 auto;
  padding: 24px;
  font-weight: normal;
}

.box__block {
  max-width: 480px;
  width: 100%;
  min-height: 480px;
  background: #fafafa;
  position: relative;
  display: flex;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23);
}

.box__wrap {
  white-space: normal;
  height: 100%;
  width: 100%;
}

.question__box {
  margin-top: 12px;
  flex-grow: 1;
}

.question__option {
  cursor: pointer;
  transition: 0.3s;
}

.is-selected {
  border-color: rgba(0, 0, 0, 0.25)
}

.question__option:active {
  transform: scaleX(0.9)
}


</style>