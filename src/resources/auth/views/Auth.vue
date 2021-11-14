<template>
  <div>
    <Header />
    <div
      class="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-50
        py-12
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="@/assets/logo.png" alt="Logo" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Please {{ texts.button }} your user
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            {{ " " }}
            <a
              @click="register_form()"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {{ texts.toolbar }}
            </a>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div
              v-if="isSignUp"
              :class="{ error: v$.form.name.$errors.length }"
            >
              <label for="name" class="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="Name"
                required="true"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-t-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Your Name"
                v-model="v$.form.name.$model"
              />
              <div
                class="input-errors"
                v-for="error of v$.form.name.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div :class="{ error: v$.form.email.$errors.length }">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-t-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Email address"
                v-model="v$.form.email.$model"
              />
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.email.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div :class="{ error: v$.form.password.$errors.length }">
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-b-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Password"
                v-model="v$.form.password.$model"
              />
              <div
                class="input-errors"
                v-for="error of v$.form.password.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>

          <div v-if="isLogin" class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="
                  h-4
                  w-4
                  text-indigo-600
                  focus:ring-indigo-500
                  border-gray-300
                  rounded
                "
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                @click="forgot - password()"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="button"
              class="
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              @click="auth()"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              {{ texts.button }}
            </button>
            <div v-if="isLoginError">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    Credentials invalid!
                </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
import { LockClosedIcon } from "@heroicons/vue/solid";
import Header from "@/components/shared/Header.vue";
import { useUserStore } from "@/store/index";
import useVuelidate from "@vuelidate/core";
import { required, helpers, email, minLength } from "@vuelidate/validators";

export default {
  name: "Auth-Page",
  setup: () => ({
    v$: useVuelidate({ $lazy: true, $autoDirty: true }),
  }),
  components: {
    LockClosedIcon,
    Header,
  },
  data() {
    return {
      isSignUp: false,
      isLogin: true,
      isLoginError: false,
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapStores(useUserStore),
    ...mapState(useUserStore, ["user"]),
    texts() {
      return this.isLogin
        ? { toolbar: "Register a new account", button: "login" }
        : { toolbar: "Login your user", button: "register" };
    },
  },
  methods: {
    ...mapState(useUserStore, ["getToken", "getUser"]),
    ...mapActions(useUserStore, ["userLogin", "userRegister"]),
    async auth() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        alert("Credentials invalid");
        this.v$.$reset();
        return;
      }
      this.isLoginError = false;
      console.log(this.v$)
      const _email = this.form.email;
      const  _password = this.form.password;
      const _name = this.form.name;
      if (this.isLogin) {
        const _login = {'email': _email, 'password': _password}
        console.log(_login)
        await this.userLogin(_login);
        console.log("logado", await this.user.token);
      } else {
        const _register = {
            'email': _email,
            'password': _password,
            'name': _name
        }
        await this.userRegister(_register);
        console.log("registrado", await this.user.token);
      }
      const _user = await this.getUser();
      if (!_user) {
        this.isLoginError = true;
        return;
      }
      this.$router.push(this.$route.query.redirect || { name: "Dashboard" });
    },
    register_form() {
      this.isSignUp = !this.isSignUp;
      this.isLogin = !this.isLogin;
    },
  },
  validations() {
    const validations = {
      form: {
        email: {
          required: helpers.withMessage("This field cannot be empty", required),
          email,
        },
        password: {
          required: helpers.withMessage("This field cannot be empty", required),
          min: helpers.withMessage(
            ({ $invalid, $params }) =>
              `This field haven't a min length of ${$params.min} so it is ${
                $invalid ? "invalid" : "valid"
              }`,
            minLength(6)
          ),
        },
      },
    };
    if (this.isLogin) {
      return validations;
    }
    return {
      form: {
        ...validations.form,
        name: {
          required,
        },
      },
    };
  },
};
</script>
