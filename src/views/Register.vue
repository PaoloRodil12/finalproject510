<template>
    <body>
    <v-row class="vrow">
        <v-col
          cols="12"
          sm="10"
          md="8"
          lg="6"
        >
            <v-card class="ma-15"
    max-width="500"
    max-height="1000"
    style="background:linear-gradient(#facfce, #f86f4d, #eb603d)">
                <v-card-text>
                    <center>
                    <v-card-title><h2>Register</h2></v-card-title></center>
                    <v-text-field
                        v-model="email"
                        :error-messages="errorMessages"
                        label="Enter Email"
                        placeholder="Email"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        type="password"
                        :error-messages="errorMessages"
                        label="Enter Password"
                        placeholder="Password"
                        required
                    ></v-text-field>
                </v-card-text>
                <v-card-actions class="vcardaction">
                    <v-btn type="text" rounded color="#00539CFF" class="btn" @click="register">Register</v-btn>
                    <v-btn type="password" rounded color="#00539CFF" class="btn" @click="signInWithGoogle">Sign In With Google</v-btn><br>
                    
                </v-card-actions>
                <center><p>Already have an Account?<router-link to="/">Sign In</router-link></p></center>
            </v-card>
        </v-col>
    </v-row>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</body>
  </template>
  
  

    <style scoped>
    
    .vrow {
         justify-content: center;
         margin-right: 50%;
         padding-left: 5%;
         height: 100%;
         width: 100%;
         font-size: 15px;
         font-weight: 600;
    }
    .vcard{
      border-radius:50px;
    }
    .vcardaction {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ma-15{
      padding-top: 25px;
    }
    .btn{
        background: #EEA47FFF;
    }
    body {
   background-image: url('https://wallpaperaccess.com/full/2002264.png');
   background-repeat: no-repeat;
   background-attachment: fixed;
   background-size: cover;
 }
    </style>

<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useRouter} from 'vue-router' 
const email = ref("");
const password = ref("");
const router = useRouter() 

const register = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully Registered!");

            console.log(auth.currentUser)
            router.push('/home')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);   
        });
};

const signInWithGoogle  = () => {

};
</script>



