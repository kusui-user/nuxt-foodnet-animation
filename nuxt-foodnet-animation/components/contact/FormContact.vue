<template>
  <form
    class="form form-contact"
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSej_yb3xaorggDzZxJZIyy_Al2NDH05FnV0Y1Fs7yf8YyxuJw/formResponse"
    target="hideResult"
  >
    <FormItemInput
      v-model="form.name"
      placeholder="お名前*"
      name="entry.465948602"
      required
    />
    <FormItemInput
      v-model="form.email"
      type="email"
      placeholder="メールアドレス*"
      name="entry.2080153569"
      required
    />
    <FormItemInput
      v-model="form.tel"
      type="tel"
      placeholder="電話番号"
      name="entry.1340815702"
    />
    <FormItemInput
      v-model="form.title"
      placeholder="タイトル"
      name="entry.1572972724"
    />
    <FormItemInput
      v-model="form.message"
      placeholder="メッセージ*"
      name="entry.1631956001"
      required
    />
    <div class="btn">
      <FormItemButton
        type="submit"
        :disabled="status === 'success'"
        @click="submitForm()" 
        >送信する</FormItemButton
      >
      <div class="msg txt-right">
        <p v-if="status === 'success'" class="msg-txt">Thanks!</p>
        <p v-if="status === 'error'" class="msg-txt">
          エラーが発生しました。もう一度送信してください。
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isSending: false,

      status: "",

      form: {
        name: "",
        email: "",
        tel: "",
        title: "",
        message: "",
      },

      formInfo: {
        action:
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSej_yb3xaorggDzZxJZIyy_Al2NDH05FnV0Y1Fs7yf8YyxuJw/formResponse",
        name: "entry.465948602",
        email: "entry.2080153569",
        tel: "entry.1340815702",
        title: "entry.1572972724",
        message: "entry.1631956001",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.form.name && this.form.email && this.form.message) {
        this.isSending = true;

        const submitParams = new FormData();

        Object.keys(this.form).forEach((key) => {
          // @ts-ignore
          submitParams.append(this.formInfo[key], this.form[key]);
        });

        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        const GOOGLE_FORM_ACTION = this.formInfo.action;

        this.$axios
          .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
          .then(() => {
            this.isSending = false;
            this.status = "success";
          })
          .catch((e) => {
            console.warn(e); // eslint-disable-line
            this.isSending = false;
            this.status = "error";
          });

        setTimeout(() => {
          this.isSending = false;
          this.status = "success";
        }, 2400);
      }
    },
  },
};
</script>

<style lang="scss">
.form-contact {
  position: relative;
  width: 90%;
  margin: auto;
  background-color: white;
  @include target600() {
      flex-direction: column;
      width: 70%;
    }
  

  > .form-item {
    margin-top: 20px;
    
  }

  > .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    // margin: 32px 0;

    > .form-item-button {
      display: block;
      max-width: 500px;
    }
  }

  > .msg {
    position: absolute;
    right: 0;
    top: 100%;
    max-width: 100%;
    padding: 8px 16px;
    background-color: var(--color-bg-default);
  }

  > *:first-child {
    margin-top: 0;
  }
}
</style>