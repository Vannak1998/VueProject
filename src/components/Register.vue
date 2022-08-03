<template>
   
  <div class="text-lg border w-1/2 m-auto bg-emerald-100 bg-opacity-20 shadow-lg rounded">
    <div class="flex justify-center text-3xl font-bold py-4 border bg-slate-50 shadow-sm">
      <h1>{{ msg }}</h1>
    </div>
    <div class="px-6 py-8 space-y-4">
      <div class="flex space-x-4 w-full">
        <div class="w-full">
          <label class="">First Name*</label><br>
          <input placeholder="First Name"  class="w-full rounded text-sm py-2 border px-4 bg-white outline-none" v-model="firstname" aria-required="Please input your first name">
        </div>
        <div class="w-full">
          <Label>Last Name*</Label><br>
          <input placeholder="Last Name" class="w-full rounded text-sm py-2 px-4 border bg-white outline-none" v-model="lastname" aria-required="Please input your lastname">
        </div>
      </div>
      <div class="">
        <Label>Phone</Label><br><input class="w-full rounded text-sm py-2 px-4 border bg-white outline-none" v-model="phone" placeholder="Please Enter your phone number here! ">
      </div>
      <div>
        <label> Company Name*</label><br><input placeholder="Your Company " v-model="companyname" class="w-full rounded text-sm py-2 px-4 border bg-white outline-none" aria-required="Please input company name">
      </div>
      <div>
        <label>Email Address*</label><br><input type="Email" v-model.trim="email" placeholder="name@yourcompany.com" class="w-full rounded text-sm py-2 px-4 border bg-white outline-none">
      </div>
      <div>
        <label>Birthday</label><br><input type="date" v-model.trim="Birhtday" placeholder="Date OF Birth" class="w-full rounded text-sm py-2 px-4 border bg-white outline-none" aria-required="Please Input your date of birht">
      </div>
      <div>
        <label>Password</label><br><input type="password" v-model.trim="password" placeholder="8 Character or More" class="w-full rounded text-sm py-2 px-4 border bg-white outline-none" aria-required="Please Input your Password">
      </div>
      <div class="flex justify-between">
        <div>
          <label> <input type="checkbox"> I agree to the <span class="hover:text-sky-700 text-blue-800">Term Service*</span></label>
        </div>
        <div>
          <label><input type="checkbox"> I agree to the <span class="text-blue-700"> Privecy Policy </span></label>
        </div>
      </div>
      <button type="button" @click="submitt" class="border py-2 px-8 bg-blue-400 rounded hover:bg-blue-600">Sign Up</button>
      <div class="flex justify-center">
        <h5>Already have an account? <span>Login now</span></h5>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  props: {
    msg: String
  },
  data(){
    return{
      firstname: '',
      lastname: '',
      phone: '',
      companyname: '',
      email: '',
      password: '',
    }
  }
  
}

</script>

<style scoped>

</style>
