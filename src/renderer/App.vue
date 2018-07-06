<template>
  <div id="app">
    <v-app :dark="dark">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list>
          <v-list-tile 
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="dark = !dark"
        >
          <v-icon>loop</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height grid-list-md>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>

      <v-footer app>
        <v-spacer></v-spacer>
        <span>&copy; 2017 everybody go &nbsp; </span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'elecapp',
    data: () => ({
      drawer: true,
      items: [
        { icon: 'cloud', title: '메뉴바꿈!', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
        { icon: 'title', title: 'test', to: '/test' },
        { icon: 'attachment', title: 'testFile', to: '/testFile' },
        { icon: 'archive', title: 'testDB', to: '/testDB' },
        { icon: 'brightness_low', title: 'testUI', to: '/testUI' }
      ],
      title: 'Electron Test',
      dark: false
    })
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
