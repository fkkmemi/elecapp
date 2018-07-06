<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card height="400">
      <!--<v-card style="height: 400px">-->
        <v-toolbar color="cyan" dark>
          <v-icon>mode_comment</v-icon>

          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
                v-if="item.header"
                :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
                v-else-if="item.divider"
                :inset="item.inset"
                :key="index"
            ></v-divider>

            <v-list-tile
                v-else
                :key="item.title"
                avatar
                @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">
            <v-icon left>add</v-icon>
            Add
          </v-btn>
          <v-btn color="error">
            <v-icon left>remove</v-icon>
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6>
      <v-card height="400">
        <v-toolbar color="orange" dark>
          <v-icon>home</v-icon>

          <v-toolbar-title>Todo list</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-alert
              :value="true"
              type="info"
          >
            This is a info alert.
          </v-alert>
        </v-card-text>
        <v-list
            subheader
            two-line
        >
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="sound = !sound">
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox v-model="video"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="video = !video">
              <v-list-tile-title>Video sounds</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts video call</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'testUI',
    data: () => ({
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; <span class='hidden-xs-only'> I'll be in your neighborhood doing errands this weekend. Do you want to hang out?</span>"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; <span class='hidden-xs-only'>Wish I could come, but I'm out of town this weekend.</span>"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; <span class='hidden-xs-only'>Do you have Paris recommendations? Have you ever been?</span>"
        }
      ],
      notifications: false,
      sound: false,
      video: false,
      invites: false
    }),
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
