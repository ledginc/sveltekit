<script>
  import Agenda from "$lib/Components/Agenda.svelte";


  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();



</script>

<div class="main">
  <div class="header">

  </div>
  <div class="agenda">
    <Agenda type="weekly" />
  </div>
</div>

<style>

</style>