<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="cooking" checked @change="setFilter"/>
      <label for="cooking">Cooking</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="photography" checked @change="setFilter"/>
      <label for="photography">Photography</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="life" checked @change="setFilter"/>
      <label for="life">Life</label>
    </span>
  </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                cooking: true,
                photography: true,
                life: true,
            }
        };
    },
    methods: {
        
        setFilter(event) {
            const id = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [id]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters)
        }
    }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>