<template>
  <section class="w-1/2 h-1/5">
    <h1 class="font-bold text-3xl">Random Dad Joke</h1>
    <p class="text-gray-500 text-sm">About {{ jokesStore.randomJoke.type }}</p>

    <LoadingSpinner :loading="jokesStore.loading"/>
    <article v-if="! jokesStore.loading" class="space-y-4 bg-white p-4 rounded-xl drop-shadow-lg w-full h-full mt-2">


      <p class="text-xl">{{ jokesStore.randomJoke.setup }}</p>

      <button @click="reveal = true"
              v-show="! reveal"
              class="border rounded-lg bg-orange-400 p-2 text-white font-bold"
      >
        Reveal Punchline
      </button>

      <div v-show="reveal" class="space-y-4">
        <p class="text-xl">{{ jokesStore.randomJoke.punchline }}</p>
        <button @click="getAnotherJoke"
                :disabled="! reveal"
                class="border rounded-lg bg-orange-400 p-2 text-white font-bold"
        >
          Get Another Joke
        </button>
      </div>
    </article>
  </section>
</template>

<script setup>
import {ref} from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import {useJokesStore} from "@/stores/JokesStore";

const jokesStore = useJokesStore();

let reveal = ref(false);

function getAnotherJoke() {
  reveal.value = false;
  jokesStore.getRandomJoke();
}
</script>

<style scoped>

</style>