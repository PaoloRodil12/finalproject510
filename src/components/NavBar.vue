<template>
  <nav v-if="isLoggedIn">
    <v-toolbar app style="background:linear-gradient(to right, #de813e , #360312)">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light"><img class="img" src="https://i.ibb.co/1Zg9W7q/RustAuto.png" width="60" height="60"> </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="menudiv"
          color="white"
          v-bind="props"
        >
          Menu
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
          color="error"
          @click="handleSignOut"
          v-if="isLoggedIn"
        >
          Sign Out
        </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer">
      
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<style scoped>
.img {
  margin-top: 3%;
}

a:hover {
  background: #de813e;
}

.menudiv:hover {
  background: #373e98;
}
</style>

<script setup>
  import { ref } from 'vue'
  import { onMounted } from 'vue';
  import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
  import { useRouter} from 'vue-router';
  const router = useRouter();
  const drawer = ref(false);

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/home' },
           { title: 'Simple Calculator', icon: 'mdi-calculator-variant', path: '/basicMath' },
           { title: 'Vowel Count', icon: 'mdi-alphabetical', path: '/stringApp'},
           { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/aboutVuetify'},
           { title: 'Quiz', icon:'mdi-comment-question-outline', path: '/axiosQuiz'},
           { title: 'About Application', icon:'mdi-application', path: '/aboutProject'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }
 const isLoggedIn = ref(false);
 let auth;
 onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user)=> {
    if(user) {
      isLoggedIn.value = true;
    } else{
      isLoggedIn.value = false;
    }
  });
 });
 const handleSignOut = () => {
  signOut(auth).then(()=>{
    router.push("/");
  });
 };

 
</script>