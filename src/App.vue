<template>
  <div id="app">
    <Quiz></Quiz>


  </div>
</template>

<script>
import Quiz from "@/components/Quiz";



export default {
  data(){
    return{
      info: null
    }
  },
 mounted() {
  },
  name: 'App',
  components: {
    Quiz
  }
}
</script>

<style>
@import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");





.btn {
  padding: 10px 32px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  margin: 0 2px;
  cursor: pointer;
  font: inherit;
  display: inline-block;
  text-decoration: none;
  transition: .2s ease-in;
  vertical-align: top;
  outline: none;

}

.btn:active {
  opacity: 0.7;
}
.is-active {
  background: #064864;
  color: #fff;
  border-color: transparent;
}

.is-active:hover {
  background: #032534;
}
body
{
  font-family: Open Sans,sans-serif;
  font-size: 14px;
  height: 100vh;
  background: #064864;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
header {
  background: rgba(0, 0, 0, .025);
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
</style>
