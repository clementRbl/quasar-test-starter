<template>
  <q-page class="flex flex-center">
    <div>
        <h2>Test d'utilisation d'une fonction lors d'un click </h2>
        <p>Dans cet exemple, je veux executer une fonction lors d'un click</p>
        <p>le resultat de la fonction est affiché dans le paragraphe lors du click sur la fonction</p>
        <q-btn @click="show" label="Phrase en console"  />
        <p>{{number}}</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { sendNumber } from 'src/tuto/composables/usePhrase'

export default defineComponent({
  name: 'Test1',
  setup() {
      const number = ref()
      const show = () => {
          number.value = sendNumber()
      }
    return {
        show,
        number
    }
  }
})
</script>