<script>
import store from "@/store";

export default {
  name: "GoogleLogin",
  props: {
    callback: Function,
  },
  methods: {
    async handleClick() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const idToken = googleUser.getAuthResponse().id_token;
        const profile = googleUser.getBasicProfile();
        store.commit("auth/logIn", {
          token: idToken,
          name: profile.getName(),
          email: profile.getEmail(),
        });
        this.callback(idToken);
      } catch (error) {
        console.log("failed sign in\n" + error);
      }
    },
  },
  render() {
    return (
      <div id="signin" onClick={this.handleClick}>
        <span class="icon"></span>
        <span class="buttonText">Sign in</span>
      </div>
    );
  },
};
</script>

<style scoped>
#signin {
  display: inline-block;
  text-align: left;
  background-color: #202020;
  color: rgb(143, 143, 143);
  width: fit-content;
  border-radius: 5px;
  box-shadow: 4px 4px 10px #101010, -3px -3px 10px #303030;
  white-space: nowrap;

  transition: background-color 0.1s;
}
#signin:hover {
  cursor: pointer;
  background-color: #1e1e1e;
  transition: background-color 0.25s;
}
span.icon {
  background: url("~@/assets/google_icon.png") transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
  width: 42px;
  height: 42px;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
  font-size: 16px;
  font-weight: bold;
}
</style>