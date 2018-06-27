<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title>test1 Actions</v-card-title>
        <v-card-text>
          <v-text-field
              id="testing"
              name="input-1"
              label="파일에 쓸 내용 작성"
              v-model="test1.text"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="test1save">
            <v-icon left>save</v-icon>
            파일저장
          </v-btn>
          <v-btn color="warning" @click="test1remove">
            <v-icon left>remove</v-icon>
            파일삭제
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title>test1 Read</v-card-title>
        <v-card-text>
          {{test1.read}}
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="test1read">
            <v-icon left>attachment</v-icon>
            파일읽기
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
  import fs from 'fs'
  import path from 'path'

  export default {
    name: 'testFile',
    data: () => ({
      snackbar: {
        act: false,
        text: '',
        color: 'success',
        timeOut: 5000
      },
      test1: {
        text: '1234a가나',
        read: ''
      },
      appPath: ''
    }),
    mounted () {
      this.appPath = path.join(this.$electron.remote.app.getPath('appData'), 'elecapp', 'test1.txt')
    },
    methods: {
      pop (msg, cl, t) {
        this.snackbar.act = true
        this.snackbar.text = msg
        this.snackbar.color = cl
        this.snackbar.timeOut = t
      },
      test1save () {
        fs.writeFile(this.appPath, this.test1.text, (err) => {
          if (err) return this.pop(err.message, 'error', 60000)
          this.pop('잘 써졌음', 'success', 3000)
        })
      },
      test1remove () {
        fs.unlink(this.appPath, (err) => {
          if (err) return this.pop(err.message, 'error', 60000)
          this.pop('잘 지워짐', 'success', 3000)
        })
      },
      test1read () {
        fs.readFile(this.appPath, (err, r) => {
          if (err) return this.pop(err.message, 'error', 60000)
          this.test1.read = r
          this.pop('잘 읽음', 'success', 3000)
        })
      }
    }
  }
</script>

<style scoped>
</style>
