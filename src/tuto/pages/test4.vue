<template>
  <q-page class="flex flex-center">
    <div>
        <h2>Autre façon d'importer et d'utiliser les composables</h2>
        <p>Suite à un visionnage d'une vidéo sur youtube, j'importe et utilise les composable d'une façon plus propre (il me semble)</p>
        <p>voici le lien : <a href="https://youtu.be/KsNXsxKoXlY?t=976" target="_blank">Lien</a></p>
        <ul>
            <li>J'execute la fonction sendPhrase() immediatement au montage du composant</li>
            <li>Je déclanche également l'éxecution lors du click sur le bouton Test</li>
        </ul>
        <q-btn @click="sendPhrase" label="test"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import usePhrase2 from '../composables/usePhrase2'; // j'importe tout le fichier

export default defineComponent({
  name: 'Test1',
  setup() {
      const { sendPhrase, sendNumber } = usePhrase2() // je récupère seulement la ffonction sendPhrase de la fonciton usePhrase2
      onMounted(() => {
          sendPhrase()
      })
    return {
       sendPhrase,
       sendNumber
    }
  }
})
</script>