<template>
  <q-page class="flex flex-center">
    <div>
        <h2>Test importation de tout le composable </h2>
        <p>Dans cet exemple, j'importe deux fonction spécifique de mon composable</p>
        <p>Concretement, j'importe tout ce que contient la fonction usePhrase</p>
        <p>J'utilise toute cette fonction seulement quand je clique sur le bouton</p>
        <div>
          <q-btn @click="execute" label="Execute" />
        </div>
        
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { usePhrase } from 'src/tuto/composables/usePhrase'

export default defineComponent({
  name: 'Test2',
  setup() {
    const execute = () => {
     usePhrase()
    }
    return {
        execute
    }
  }
})
</script>