<script>
export default {
  name: "App",
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");

body {
  margin: 0;
  padding: 0;
  background-color: #1e1e1e;
}

#app {
  font-family: "Cutive Mono", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dcdcdc;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
