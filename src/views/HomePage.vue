<template>
  <div class="home">
    <SignUpButton/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpButton from '@/components/SignUpButton.vue';

export default {
  name: 'home',
  components: {
    SignUpButton,
  },
};
</script>
