<template>
    <b-navbar toggleable="lg" type="light" variant="light" >
    <b-navbar-brand href="/"><img style="height: auto; width: auto;  max-height: 64px; max-width: 250px;" src="@/assets/images/sdg-square-transparent.png"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-nav pills>  
        <b-nav-item href="/">Join</b-nav-item>
        <b-nav-item href="/edit">Edit</b-nav-item>
      </b-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>