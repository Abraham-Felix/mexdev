<template>
	<div class="Gigs">
		<Sheet />
    <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <router-link class="nav-link" to="/add">+ Add New Row</router-link>
      </li>
    </ul> -->
	</div>
</template>

<script>
// @ is an alias to /src
import Sheet from '@/components/Sheet.vue'

export default {
	name: 'Gigs',
	components: {
		Sheet
	}
}
</script>
