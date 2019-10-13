<template>
  <div id="app">

<ul class="nav nav-pills nav-justified">
    <li class="nav-item">
   <router-link to="/bichri" class="nav-link" active-class="active" exact>que suis-je ?</router-link>

    </li>
    <li class="nav-item">
<router-link to="/hamza" class="nav-link" active-class="active" exact>compétence</router-link>
    </li>

  </ul>
  <router-view></router-view>

  </div>
</template>
