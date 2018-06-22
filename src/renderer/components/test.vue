<template>
  <v-layout row wrap>
    <v-flex xs12 sm4>
      <v-chip color="red" text-color="white">
        {{msg1}}
      </v-chip>
    </v-flex>
    <v-flex xs12 sm4>
      <v-chip color="orange" text-color="white">
        {{msg2}}
      </v-chip>
    </v-flex>
    <v-flex xs12 sm4>
      <v-chip color="orange" text-color="white">
        {{msg3}}
      </v-chip>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          {{fileContent}}
        </v-card-title>
        <v-card-text>
          <v-chip color="info" v-for="c in chips">
            {{c}}
            <v-icon right>school</v-icon>
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogOpen">
            <v-icon left>save</v-icon>
            파일 선택
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
    <v-snackbar
        :timeout="snackbar.timeOut"
        top
        v-model="snackbar.act"
        :color="snackbar.color"
    >
      {{ snackbar.text }}
      <v-spacer></v-spacer>
      <v-btn flat color="white" @click.native="snackbar.act = false">닫기</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
  import * as fs from 'fs'

  export default {
    name: 'test',
    data: () => ({
      msg1: 'vuetify 해보자',
      msg2: 'vue 해보자',
      msg3: 'electron 해보자',
      fileContent: '파일을 보고 싶네요',
      snackbar: {
        act: false,
        text: '',
        color: 'success',
        timeOut: 5000
      },
      chips: []
    }),
    methods: {
      pop (msg, cl, t) {
        this.snackbar.act = true
        this.snackbar.text = msg
        this.snackbar.color = cl
        this.snackbar.timeOut = t
      },
      dialogOpen () {
        this.$electron.remote.dialog.showOpenDialog((r) => {
          if (!r) return this.pop('파일을 선택하세요', 'error', 5000)
          if (!r.length) return this.onError('파일을 선택하세요', 'error', 5000)

          fs.readFile(r[0], (err, fd) => {
            if (err) return this.pop(err.message, 'error', 5000)
            this.fileContent = fd.toString()
            this.chips = this.fileContent.split(',')
            this.pop('파일 로드가 성공적이네요!!', 'success', 3000)
          })
        })
      }
    }
  }
</script>

<style scoped>
</style>
