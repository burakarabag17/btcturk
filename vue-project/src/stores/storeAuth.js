import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/js/firebase";
import { useRouter } from "vue-router";

const router = useRouter();

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          console.log("this.router", this.router);
          this.router.push("/login");
          console.log("user logged in: ", user);
        } else {
          this.user = {};
          this.router.replace("/login");
          console.log("user logged out: ", user);
        }
      });
    },
    registerUser(accounts) {
      createUserWithEmailAndPassword(auth, accounts.email, accounts.password)
        .then((userAccount) => {
          const user = userAccount.user;
          console.log("user: ", user);
        })
        .catch((error) => {
          console.log("error.message", error.message);
        });
    },
    loginUser(accounts) {
      signInWithEmailAndPassword(auth, accounts.email, accounts.password)
        .then((userAccount) => {
          const user = userAccount.user;
          this.router.push("/home")
          console.log("user: ", user);
        })
        .catch((error) => {
          console.log("error.message: ", error.message);
        });
    },
    logOutUser() {
      signOut(auth)
        .then(() => {
          // console.log("User signed out.")
        })
        .catch((error) => {
          // console.log(error.message)
        });
    },
  },
});
