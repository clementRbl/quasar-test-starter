<template>
  <q-page class="flex flex-center">
    <div>
        <h2>Test importation selective composable </h2>
        <p>Dans cet exemple, j'importe une fonction spécifique de mon composabe usePhrase</p>
        <p>je la sélectionne en l'important entre crochet et je l'initialise grace au spread operator dans mon setup</p>
        <p>J'execute cette fonction immédiatement au chargement du composant</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { sendPhrase } from 'src/tuto/composables/usePhrase'

export default defineComponent({
  name: 'Test1',
  setup() {
    return {
        ...sendPhrase()
    }
  }
})
</script>