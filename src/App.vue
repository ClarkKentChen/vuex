<template>
  <div id="app">
    <h3>welcome vuex-demo</h3>
    <input type="button" value="减少" @click="reduce" />
    <input type="button" value="增加" @click="increment" />
    <input type="button" value="只有偶数才能点击" @click='clickodd' />
    <input type="button" value="点击异步的" @click='clickAsync' />

    <div>现在的数字为：{{count}},现在的数字是{{getodd}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: mapGetters([
    'count',
    'getodd'
  ]),
  methods: mapActions([
    'increment',
    'reduce',
    'clickodd',
    'clickAsync'
  ])
  // methods:{
  //   increment(){
  //     alert('111');
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
