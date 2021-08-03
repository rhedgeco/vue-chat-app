<script>
import GoogleLogin from "@/components/GoogleLogin.vue";

export default {
  name: "Home",
  components: {
    GoogleLogin,
  },
  methods: {
    createSession(token) {
      console.log(token);
    },
  },
  render() {
    return (
      <div id="home">
        <h1>Sign in to gain access...</h1>
        <GoogleLogin callback={this.createSession} />
      </div>
    );
  },
};
</script>

<style scoped>
#home {
  height: fit-content;
}

h1 {
  color: rgb(165, 42, 42);
  margin: 32px;
}
</style>
