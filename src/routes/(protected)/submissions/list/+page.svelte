<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>Titre</th>
        <th>Statut</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each data.submissions as submission}
      <tr>
        <td>{submission.title}</td>
        <td>{submission.status}</td>
        <td>
          <a href={`submissions/${submission.id}`} class="btn btn-sm">Voir</a>
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>