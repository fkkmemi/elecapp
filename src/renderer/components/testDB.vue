<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title>등록 카드</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
                v-model="form.name"
                :rules="rule.name"
                :counter="10"
                label="이름"
                required
            ></v-text-field>
            <v-text-field
                v-model="form.email"
                :rules="rule.email"
                :counter="100"
                label="E-mail"
                required
            ></v-text-field>
            <v-btn
                color="primary"
                :disabled="!valid"
                @click="formSubmit"
            >
              <v-icon left>save</v-icon>
              등록
            </v-btn>
            <v-btn @click="formClear">
              <v-icon left>undo</v-icon>
              초기화</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title>디비 확인 카드</v-card-title>
        <v-card-text>
          {{content}}
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="read">
            <v-icon left>attachment</v-icon>
            파일읽기
          </v-btn>
          <v-btn color="error" @click="remove">
            <v-icon left>clear</v-icon>
            전부 지우기
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
  export default {
    name: 'testFile',
    data: () => ({
      snackbar: {
        act: false,
        text: '',
        color: 'success',
        timeOut: 5000
      },
      valid: true,
      form: {
        name: '',
        email: '',
        rmk: ''
      },
      rule: {
        name: [
          v => !!v || '이름은 꼭 써야합니다.',
          v => (v && v.length <= 10) || '이름은 10글자 이하여야합니다.'
        ],
        email: [
          v => !!v || '이메일은 꼭 써야합니다.',
          v => (v && v.length <= 100) || '이름은 100글자 이하여야합니다.',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '유효한 이메일 주소가 아닙니다.'
        ]
      },
      content: ''
    }),
    mounted () {
    },
    methods: {
      pop (msg, cl, t) {
        this.snackbar.act = true
        this.snackbar.text = msg
        this.snackbar.color = cl
        this.snackbar.timeOut = t
      },
      formSubmit (e) {
        if (!this.$refs.form.validate()) return this.pop('값이 유효하지 않습니다', 'error', 60000)
        this.$db.insert(this.form, (err) => {
          if (err) return this.pop(err.message, 'error', 60000)
          this.pop('저장 성공', 'success', 5000)
          this.formClear()
        })
      },
      formClear () {
        this.$refs.form.reset()
      },
      read () {
        this.$db.find({}, (err, r) => {
          if (err) return this.pop(err.message, 'error', 60000)
          this.content = r
        })
      },
      remove () {
        this.$db.remove({}, { multi: true }, (err) => {
          if (err) return this.pop(err.message, 'error', 60000)
          this.pop('모두 삭제 성공', 'success', 5000)
        })
      }
    }
  }
</script>

<style scoped>
</style>
